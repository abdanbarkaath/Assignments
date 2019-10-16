<template>
  <div id="app">
    <nav class="navbar navbar-expand sticky-top topnav">
      <a class="navbar-brand" routerLink="mobiles">
        <img src="https://img.icons8.com/cotton/25/000000/shopping.png" />
        <span>Company</span>
      </a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav pt-1">
          <li class="nav-item">
            <div class="dropdown" id="drp-down">
              <a class="btn btn btn-outline-success dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Catogories</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="items">
                <a class="dropdown-item">
                  <router-link to="/">Employees</router-link>
                </a>
                <a class="dropdown-item">
                  <router-link to="/about">About</router-link>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
      <div class="sidenav">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Clients</a>
        <a href="">Contact</a>
      </div>
      <div id="main">
      <router-view />
      </div>
  </div>
</template>

<style lang="scss">
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
  width: 300px; /* Set the width of the sidebar */
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
  font-size: 25px;
  color: #818181;
  display: block;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}
#main{
  margin-left: 350px;
}
@media screen and (max-width: 496px) {
  .sidenav{width: 100px}
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
  #main{margin-left: 120px}
}
@media screen and (max-width: 966px) {
  .sidenav{width: 100px}
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
  #main{margin-left: 120px}
}
// NAVBAR ======================================== 
.topnav{
    position: sticky;
    background: black;
    color: white;
    padding-right: 40px;
}
span{
    color: white;
    
}
#cart{
    padding-left: 5px;
    display: inline;
}
</style>
