<template>
  <div id="app">
    <div class="container-flex p-3">
      <div class="item-flex" style="cursor: pointer;">Logo</div>
      <div class="item-flex" style="cursor: pointer; letter-spacing: 2px"><b>GUESS COLOR</b></div>
      <div class="item-flex" style="cursor: pointer;">Logout</div>
    </div>
    <router-view/>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
