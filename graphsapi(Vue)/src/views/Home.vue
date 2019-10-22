<template>
  <div>
    <div id="back">
      <div id="home">
        <h1>Please Select An Option</h1>
        <button id="btn1" class="btn btn-outline-light" @click="signup">Signup</button>
        <button id="btn1" class="btn btn-outline-light" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueRouter from "../router/index";

export default {
  name: "home",
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    signup() {
      this.$router.push({ name: "signup" });
    }
  }
};
</script>
 
<style lang="scss" scoped>
#back {
  padding-top: 200px;
  height: 625px;
  background: #3598dc;
  color: white;
  text-align: center;
  #home {
    width: 450px;
    background: #3598dc;
    margin: 0 auto;
    height: 200px;
    #btn1 {
      margin: 10px;
    }
  }
}
</style>