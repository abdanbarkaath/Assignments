<template>
  <div>
    <div id="main-back">
      <div id="inside-back">
        <h1><span>
          <img src="https://img.icons8.com/plasticine/100/000000/windy-weather.png" />
        </span>Weather Api</h1>
        <input id="getin" type="text" v-model="time" />
      </div>
      <button class="btn btn-danger sub" @click="sendData">
        <router-link to="/weather?mode=day" />Get Temperatures
      </button>
      <br />
      <button class="btn btn-success day" v-if="check" @click="goDay">Daily</button>
      <button class="btn btn-success hour" v-if="check" @click="goHourly">Hourly</button>
      <router-view />
      <vue-progress-bar></vue-progress-bar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueRouter from "../router/index";
import { Chart } from "highcharts-vue";
import axios from "axios";
import VueProgressBar from "vue-progressbar";

export default {
  computed: {
    ...mapGetters(["city"]),
    ...mapGetters(["temp"])
  },

  data() {
    return {
      check: false,
      time: null,
      loading: false,
      val: null
    };
  },
  methods: {
    ...mapActions(["mutateMethod"]),
    ...mapActions(["mutateCity"]),
    loadKey() {
      axios
        .get(
          "http://dataservice.accuweather.com/locations/v1/cities/IN/search?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&q=" +
            this.city +
            "&offset=1"
        )
        .then(response => {
          console.log(response.data[0].Key);
          this.val = response.data[0].Key;
          this.mutateCity(this.val);
          console.log(this.temp);
          this.loading = true;
          this.check = true;
          this.$router.push({ name: "day" });
        });
    },
    goHourly() {
      this.$router.push({ name: "hour" });
    },
    goDay() {
      this.$router.push({ name: "day" });
    },
    sendData() {
      this.mutateMethod(this.time);
      console.log(this.city);
      this.loadKey();
    }
  }
};
</script>

<style lang="scss" scoped>
#main-back {
  padding-top: 20px;
  height: 687px;
  background-image: url("https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  #inside-back{
    h1{
      height: 70px;
      margin-right: 15px;
    }
  }
  #getin {
    border-radius: 5px;
    height: 35px;
    width: 300px;
    box-shadow: 0;
  }
  .sub {
    margin-top: 5px;
    width: 300px;
    // height: 33px;
    // margin-left: 5px;
  }
  .day {
    margin: 10px 5px 25px 0px;
    width: 145px;
  }
  .hour {
    margin: 10px 0px 25px 5px;    
    width: 145px;
  }
}

</style>