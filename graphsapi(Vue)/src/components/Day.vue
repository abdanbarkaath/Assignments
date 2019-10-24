<template>
  <div>
    <div class="container-fluid">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Chart } from "highcharts-vue";
import axios from "axios";
import VueProgressBar from 'vue-progressbar'

export default {
  computed: {
    ...mapGetters(["city"]),
    ...mapGetters(["temp"]),
    ...mapGetters(["data"])
  },
  data() {
    return {
      val: null,
      store: 2,
      chartOptions: {
        chart: {
          type: "line",
          width:1400
          // backgroundColor: '#6c8c5b',
        },
        title: {
          text: "Daily"
        },
        xAxis: {

        },
        yAxis: {  
          categories:[0,5,10,15,20,25,30,35,40,45,50],
          title:{
            text:"Degrees"
          }
        },
        colors: ["blue"],
        series: []
      }
    };
  },
  methods: {
    start () {
        this.$Progress.start()
    },
    finish () {
        this.$Progress.finish()
    },
    ...mapActions(["mutateData"]),
    loadData() {
      this.$Progress.start()
      axios
        .get(
          "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
            this.temp +
            "?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
        )
        .then(response => {
          this.mutateData(response.data);
          // console.log(response.data.DailyForecasts);
          this.val = response.data;
          var xvalues = [];
          var temp = [];
          // console.log(this.val[0].Date);
          this.val.DailyForecasts.forEach(i=>{
            // console.log(i);
            var t = i.Date;
            var z = t.split("T")
            var q = z[0].split("-");
            temp.push(i.Temperature.Maximum.Value);
            xvalues.push(q[2]);
            this.$Progress.finish()
          });
          console.log(xvalues);
          this.chartOptions.series=[
            {
              data:temp,
            }
          ]
          this.chartOptions.xAxis={
            categories:xvalues,
            title:{
              text:"Date"
            }
          }
        });
    }
  },
  created(){
    this.$Progress.start()
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style>
</style>