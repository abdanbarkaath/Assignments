<template>
  <div id="back">
    <div class="signup">
      <form id="forms">
        <div id="sign-back">
          <img id="pen" src="https://img.icons8.com/ios/60/000000/edit.png" />
          <h2>Sign Up</h2>
          <p style="font-size:12px">Please fill in this form to create an account!</p>
        </div>
        <!-- <hr /> -->
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/pastel-glyph/25/000000/user-male--v1.png"> Signup as</label>
          <input
            type="name"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.name"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/ios-glyphs/20/000000/email.png"> Email</label>
          <input
            type="email"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/number-pad.png"> Phone Number</label>
          <input
            type="number"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.number"
            placeholder="Number"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/visible.png"> Password</label>
          <input
            type="password"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"> <img src="https://img.icons8.com/material-sharp/20/000000/visible.png"> Repeat Password</label>
          <input
            type="password"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.passwordagain"
            placeholder="Password"
            required
          />
        </div>

        <div class="form-group">
          <button id="sign-up" class="btn btn-primary btn-lg" :disabled="x==0" @click.prevent="add">
            <img src="https://img.icons8.com/ios/20/000000/edit.png" /> Sign Up
          </button>
        </div>
        <div class="hint-text">
          Already have an account?
          <a href @click.prevent="go">Login here</a>
        </div>
      </form>
    </div>

    <!-- <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div> -->
  </div>
</template>

<script>
import Vuerouter from "../router/index";
import axios from "axios";
export default {
  data() {
    return {
      x: 0,
      localUsers: {},
      check: {
        name: /^[A-Za-z.0-9]{3,30}$/,
        number: /^([0-9]{10})$/g,
        email: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/
      }
    };
  },
  methods: {
    enable() {
      if (
        this.localUsers.name &&
        this.localUsers.email &&
        this.localUsers.number &&
        this.localUsers.password &&
        this.localUsers.passwordagain
      ) {
        console.log(this.x);
        this.x = 1;
      } else {
        this.x = 0;
      }
    },
    go() {
      this.$router.push({ name: "login" });
    },
    add() {
      var i = 1;
      var serialize;
      var users = JSON.parse(localStorage.getItem("users")) || [];
      if (this.check.name.test(this.localUsers.name)) {
        console.log("correct name");
        i = 1;
        if (this.check.email.test(this.localUsers.email)) {
          console.log("correct email");
          i = 1;
          if (this.check.number.test(this.localUsers.number)) {
            console.log("correct number");
            i = 1;
            users.forEach(x => {
              if (
                x.name == this.localUsers.name ||
                x.email == this.localUsers.email
              ) {
                alert("user already exists");
                i = 0;
              } else {
              }
            });
            if (this.localUsers.password !== this.localUsers.passwordagain) {
              alert("Passwords dont match");
              i = 0;
            } else {
              if (i == 1) {
                users.push(this.localUsers);
                serialize = JSON.stringify(users);
                localStorage.setItem("users", serialize);
                this.$router.push({ name: "login" });
              }
            }
          } else {
            alert("wrong number");
            console.log(this.localUsers.number);
          }
        } else {
          alert("wrong email");
        }
      } else {
        alert("wrong user name");
      }
    },
    get() {
      // x = JSON.parse(x);
      var x = localStorage.getItem("users");
      console.log(x + "id");
    }
  },
  created() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cce7edd41e14cec15c5a85b3ea142c8"
      )
      .then(response => {
        this.val = response.data;
        // console.log(response.data);
      });
  }
};
</script>

<style lang="scss" scoped>
#back {
  background-image: url("data:image/jpeg;base64,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");
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  padding: 10px;
  height: 625px;
  #sign-back {
    text-align: left;
    height: 100px;
    margin-bottom: 10px;
    color: white;
    padding: 15px;
    background: red;
    #pen {
      padding-right: 10px;
      float: right;
    }
  }
  #lab {
    float: left;
    margin-bottom: 1px;
  }
  .signup {
    width: 400px;
    margin: 0 auto;
    background: white;
    #forms {
      width: 100%;
      height: 605px;
    }
    .form-group {
      padding: 0 10px 0 10px;
      margin-bottom: 15px;
      font-weight: 550;
    }
    a {
      color: #0275d8;
    }
    #sign-up {
      width: 99%;
      padding: 0px;
      font-size: 20px;
      margin-top: 15px;
      height: 35px;
    }
  }
}
</style>










// <div id="forms">
//       <form >
//         <div class="form-group">
//           <label for="email">Email address:</label>
//           <input type="email" required class="form-control" v-model="localUsers.name" />
//         </div>
//         <div class="form-group">
//           <label for="pwd">Password:</label>
//           <input type="password" required class="form-control" v-model="localUsers.password" />
//         </div>
//         <div class="form-group">
//           <label for="pwd">Number</label>
//           <input type="number" class="form-control" v-model="localUsers.phone" />
//         </div>
//         <button type="submit" class="btn btn-primary" @click="add">Submit</button>
//         <button type="submit" class="btn btn-primary" @click="get">Get Item</button>
//       </form>
//     </div>
