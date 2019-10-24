<template>
  <div id="app">
    <nav class="navbar navbar-expand sticky-top topnav">
      <a class="navbar-brand" routerLink="mobiles">
        <img src="https://img.icons8.com/dusk/40/000000/combo-chart.png">
        <span> GraphApi</span>
      </a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav pt-1">
          <li>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control ml-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
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
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="items" style="min-width:100px">
          <a class="dropdown-item" style="width:80px">
            <router-link to="/weather" style="width:80px">Weather</router-link>
          </a>
        </div>
      </div>
    </nav>
    <div class="sidenav">
      <a href><img src="https://img.icons8.com/officel/40/000000/home.png"></a>
      <router-link to="/weather"><img src="https://img.icons8.com/dusk/40/000000/cloud.png"></router-link>
      <a href><img src="https://img.icons8.com/dusk/40/000000/innovation.png"></a>
      <a href><img src="https://img.icons8.com/dusk/40/000000/contacts.png"></a>
    </div>
    <div id="main">
      <div class="container-fluid">
        <div id="info">
          <h3>Dashboard</h3>
          <button class="btn btn-outline-primary"><img src="https://img.icons8.com/nolan/26/000000/positive-dynamic.png"></button>
          <button class="btn btn-outline-primary"><img src="https://img.icons8.com/color/26/000000/combo-chart.png"></button>
        </div>
        <div class="row">
          <div class="col-sm-12 col-lg-6 col1">
            <div class="card extend extend1">
              <div class="card-body body1">
                <highcharts :options="chart3Options"></highcharts>
              </div>
            </div>
            <hr />
          </div>
          <div class="col-sm-12 col-lg-6 col2">
            <div class="card extend extend2">
              <div class="card-body body2">
                <highcharts :options="chart5Options"></highcharts>
              </div>
            </div>
            <hr />
          </div>
          <div class="col-sm-12 col-lg-3 col3">
            <div class="card extend extend3">
              <div class="card-body body3">
                <highcharts :options="chart1Options"></highcharts>
              </div>
              <hr />
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 col4">
            <div class="card extend extend4">
              <div class="card-body body4">
                <highcharts :options="chart2Options"></highcharts>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 col5">
            <div class="card extend extend5">
              <div class="card-body body5">
                <highcharts :options="chart2Options"></highcharts>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 col6">
            <div class="card extend extend6">
              <div class="card-body body6">
                <highcharts :options="chart1Options"></highcharts>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-12 col7">
            <div class="card extend extend7">
              <div class="card-body body7">
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
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          height: 200,
          width: 300
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
          // categories: [
          //   "not famous",
          //   "known",
          //   "famous",
          //   "very Famous",
          //   "world wide famous",
          //   "the best"
          // ],
          title: {
            text: "Likeness"
          }
        },
        chart: {
          type: "bar",
          width: 300,
          height: 280
        },
        colors: ["#6bff9f", "red", "blue"],
        series: [
          {
            data: [5, 3, 1, 4] // sample data
          },
          {
            data: [2, 4, 3, 1] // sample data
          }
          // {
          //   data: [3, 5, 4, 2] // sample data
          // }
        ]
      },
      chart3Options: {
        chart: {
          type: "column",
          width: 580,
          height: 250
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
        colors: ["#000b73", "#ff3838"],

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
          },
          {
            data: [
              80.9,
              40.5,
              96.4,
              189.2,
              204.0,
              116.0,
              145.6,
              118.5,
              236.4,
              184.1,
              75.6,
              28.4
            ] // sample data
          }
        ]
      },
      chart4Options: {
        chart: {
          type: "area",
          width: 1200,
          height: 350
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
        colors: ["#deffb0", "#ffb0ea"],

        series: [
          {
            data: [11, 36, 40, 20, 36, 28, 10, 20] // sample data
          },
          {
            data: [40, 25, 45, 18, 12, 30, 40, 23] // sample data
          }
        ]
      },
      chart5Options: {
        chart: {
          type: "area",
          width: 580,
          height: 250
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
        colors: ["#deffb0", "#ffb0ea"],

        series: [
          {
            data: [11, 40, 40, 2, 36, 28, 10, 20] // sample data
          },
          {
            data: [40, 25, 2, 40, 12, 30, 40, 23] // sample data
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
#items{
  width: 80px;
}
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
  width: 70px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #7952b3; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}
/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 1px;
  text-decoration: none;
  margin-top: 40px;
  font-size: 15px;
  font-weight: 550;
  color: white;
  display: block;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}
#main {
  margin-left: 70px;
  background: #f0f1f7;
}
@media screen and (max-width: 496px) {
  .extend {
    width: 18rem;
  }
  .sidenav {
    width: 70px;
  }
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
  #main {
    margin-left: 70px;
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
    margin-left: 70px;
  }
}
// NAVBAR ========================================

.topnav {
  span{
    color: #7952b3;
  }
  position: sticky;
  background: black;
  color: white;
  padding-right: 40px;
  padding-left: 25px;
  margin-left: 70px;
  background: white;
}
span {
  color: black;
}
#cart {
  padding-left: 5px;
  display: inline;
}

//cards
#info {
  margin-bottom: 0px;
  margin: 0 5px 0 5px;
  padding: 5px;
  // background: ;
  text-align: right;
  button{
    height: 30px;
    width: 30px;
    padding: 0;
    margin-right: 2px;
  }
  h3 {
    display: inline;
    float: left;
    color: #7952b3;
    margin-bottom: 0;
  }
}
.col1 {
  padding: 5px 10px 0px 20px;
  .extend1 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body1 {
      padding: 20px 0 20px 0;
    }
  }
}

.col2 {
  padding: 5px 20px 0px 10px;
  .extend2 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body2 {
      padding: 20px 0 20px 0;
    }
  }
}
.col3 {
  padding: 5px 10px 0px 20px;
  .extend3 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body3 {
      padding: 20px 0 20px 0;
    }
  }
}
.col4 {
  padding: 5px 10px 0px 10px;
  .extend4 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body4 {
      overflow: hidden;
      padding: 20px 0 20px 0;
    }
  }
}
.col5 {
  padding: 5px 10px 0px 10px;
  .extend5 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body5 {
      // padding: 20px 5 20px 0px;
      overflow: hidden;
    }
  }
}
.col6 {
  padding: 5px 20px 0px 10px;
  .extend6 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body6 {
      // padding: 20px 0 20px 50px;
      overflow: hidden;
    }
  }
}
.col7 {
  padding: 5px 20px 0px 20px;
  margin-top: 10px;
  .extend7 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body7 {
      padding: 20px 0 20px 0;
    }
  }
}
.card-header {
  font-family: cursive;
  background: gainsboro;
  font-size: 26px;
  padding: 0px;
}
</style>