<template>
  <div>
    <div class="container">
      <highcharts :options="chartOptions"></highcharts>
       <div class="my-5">
        <div class="alert alert-info">Loading...</div>
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </div>
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
    ...mapGetters(["datas"])
  },
  data() {
    return {
      val: null,
      x1: this.datas,
      chartOptions: {
        chart: {
          type: "column",
          loading:false,
        },
        title: {
          text: "Hourly"
        },
        xAxis: {
          // categories: ["abdan", "basil"],
          crosshair: true
        },
        yAxis: {
         
        },
        colors: ["black"],

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
          "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" +
            this.temp +
            "?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
        )
        .then(response => {
          this.mutateData(response.data);
          this.val = response.data;
          console.log(this.val[0]);
          const temp = [];
          const xvalue = [];
          this.val.forEach(i => {
            var t = i.DateTime;
            var z = t.split("T")
            var q = z[1].split("+");
            temp.push(i.Temperature.Value);
            xvalue.push(q[0]);
            this.loading = true;
            this.$Progress.finish();
          });
          this.chartOptions.series = [
            {
              data:temp
            }
          ];
          this.chartOptions.xAxis={
            title:{
              text:"Time"
            },
            categories:xvalue,
          }
          this.chartOptions.yAxis={
            title:{
              text:"degrees"
            }
          }
        });
    }
  },
  // created(){
  //   this.$Progress.start()
  // },
  mounted() {
    // this.$Progress.finish()
    this.loadData();
  }
};
</script>

<style>
</style>