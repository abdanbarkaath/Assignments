<template>
  <div>
    <div id="main-back">
      <h1>Weather Api</h1>
      <input id="getin" type="text" v-model="time" />
      <button class="btn btn-outline-primary sub" @click="sendData">
        <router-link to="/weather?mode=day" />Get Temperatures
      </button>
      <br />
      <button class="btn btn-primary day" @click="goDay">Daily</button>
      <button class="btn btn-primary hour" @click="goHourly">Hourly</button>
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
import VueProgressBar from 'vue-progressbar'

export default {
  computed: {
    ...mapGetters(["city"]),
    ...mapGetters(["temp"])
  },

  data() {
    return {
      time: null,
      loading:false,
      val: null
    };
  },
  methods: {
    ...mapActions(["mutateMethod"]),
    ...mapActions(["mutateCity"]),
    loadKey() {
      // this.$Progress.start()
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
          this.$router.push({ name: "day" });
          // this.$Progress.finish();
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
  padding-top: 50px;
  height: 625px;
  background: lightblue;
  #getin {
    border-radius: 5px;
    height: 35px;
    box-shadow: 0;
  }
  .sub {
    margin-left: 5px;
  }
  .day {
    margin: 10px;
  }
  .hour {
    margin: 10px;
  }
}

//loader
// @import 'https://fonts.googleapis.com/css?family=Raleway';

.preloader {
  width: 100%;
  height: 100vh;
  background: #3498db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Raleway", sans-serif;
  position: relative;
  &__status {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__status-text {
    font-size: 40px;
    font-family: "Raleway", sans-serif;
    margin-bottom: 20px;
  }
  &__status-loader {
    width: 100%;
    height: 3px;
  }
  &__status-bar {
    background: white;
    height: 100%;
  }
}
.frontpage {
  height: 100vh;
  background: #34495e;
}
.frontpage__title {
  color: white;
}
</style>