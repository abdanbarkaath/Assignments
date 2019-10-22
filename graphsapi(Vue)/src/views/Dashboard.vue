<template>
  <div id="app">
    <nav class="navbar navbar-expand sticky-top topnav">
      <a class="navbar-brand" routerLink="mobiles">
        <img src="https://img.icons8.com/cotton/25/000000/shopping.png" />
        <span>Graph</span>
      </a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav pt-1">
          <li class="nav-item">
            <div class="dropdown" id="drp-down">
              <a
                class="btn btn btn-outline-success dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Options</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="items">
                <a class="dropdown-item">
                  <router-link to="/weather">Weather</router-link>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="sidenav">
      <a href>About</a>
      <a href>Services</a>
      <a href>Clients</a>
      <a href>Contact</a>
    </div>
    <div id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-lg-12 col1">
            <div class="card extend extend1">
              <div class="card-body">
                <highcharts :options="chart3Options"></highcharts>
              </div>
            </div>
            <hr />
          </div>
          <div class="col-sm-12 col-lg-6 col2">
            <div class="card extend extend2">
              <div class="card-body">
                <highcharts :options="chart1Options"></highcharts>
              </div>
              <hr />
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 col3">
            <div class="card extend extend3">
              <div class="card-body">
                <highcharts :options="chart2Options"></highcharts>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-12 col4">
            <div class="card extend extend4">
              <div class="card-body">
                <highcharts :options="chart4Options"></highcharts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRouter from "../router/index";
import { Chart } from "highcharts-vue";
// import MapChart from '.M/apChart'
export default {
  data() {
    return {
      chart1Options: {
        chart: {
          type: "pie",
          height: 40,
          width: 20
        },
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: "Pie Chart"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            }
          }
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 61.41,
                sliced: true,
                selected: true
              },
              {
                name: "Internet Explorer",
                y: 11.84
              },
              {
                name: "Firefox",
                y: 10.85
              },
              {
                name: "Edge",
                y: 4.67
              },
              {
                name: "Safari",
                y: 4.18
              },
              {
                name: "Sogou Explorer",
                y: 1.64
              },
              {
                name: "Opera",
                y: 1.6
              },
              {
                name: "QQ",
                y: 1.2
              },
              {
                name: "Other",
                y: 2.61
              }
            ]
          }
        ]
      },
      chart2Options: {
        title: {
          text: "Bar Chart"
        },
        xAxis: {
          categories: ["Ronaldo", "Rooney", "Lingaard", "Messi"]
        },
        yAxis: {
          categories: [
            "not famous",
            "known",
            "famous",
            "very Famous",
            "world wide famous",
            "the best"
          ],
          title: {
            text: "Likeness"
          }
        },
        chart: {
          type: "bar",
          height: 400
        },
        colors: ["#6bff9f"],
        series: [
          {
            data: [5, 3, 1, 4] // sample data
          }
        ]
      },
      chart3Options: {
        chart: {
          type: "column",
          width: 1200,
          height: 350
        },
        title: {
          text: "Column Chart"
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: "Rainfall (mm)"
          }
        },
        colors: ["#000b73"],

        series: [
          {
            data: [
              49.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ] // sample data
          }
        ]
      },
      chart4Options: {
        chart: {
          type: "area",
          width: 1200,
          height:350
        },

        title: {
          text: "Area Chart"
        },
        xAxis: {
          categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        },
        yAxis: {
          //   categories: [10,20,30,40,50,60],
          title: {
            text: "Temperature in Degree"
          }
        },

        series: [
          {
            data: [11, 36, 40, 20, 36, 28, 10, 20] // sample data
          }
        ]
      }
    };
  },
  components: {
    highcharts: Chart
  }
};
</script>

<style lang="scss">
.extend {
  width: 35rem;
  height: 500px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 100px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  margin-top: 58px;
}
/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 550;
  color: #818181;
  display: block;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}
#main {
  margin-left: 100px;
  background: #f0f1f7;
}
@media screen and (max-width: 496px) {
  .extend {
    width: 18rem;
  }
  .sidenav {
    width: 100px;
  }
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
  #main {
    margin-left: 100px;
  }
}
@media screen and (max-width: 966px) {
  .sidenav {
    width: 100px;
  }
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
  #main {
    margin-left: 100px;
  }
}
// NAVBAR ========================================
.topnav {
  position: sticky;
  background: black;
  color: white;
  padding-right: 40px;
}
span {
  color: white;
}
#cart {
  padding-left: 5px;
  display: inline;
}

//cars
.col1 {
  padding: 50px;
  .extend1 {
    width: 100%;
    height: 380px;
    margin: 1px;
    border: 0px;
  }
}

.col2 {
  border-right: 1px solid #d9dade;
  padding-left: 50px;
  margin-bottom: 50px;
  .extend2 {
    width: 100%;
    height: 500px;
    margin: 1px;
    border: 0px;
  }
}
.col3 {
  padding-right: 50px;
  margin-bottom: 50px;
  .extend3 {
    width: 35rem;
    height: 500px;
    margin: 1px;
    border: 0px;
  }
}
.col4 {
  padding: 0 50px 50px 50px;
  .extend4 {
    width: 100%;
    height: 380px;
    margin: 1px;
    border: 0px;
  }
}
.card-header {
  font-family: cursive;
  background: gainsboro;
  font-size: 26px;
  padding: 0px;
}
</style>