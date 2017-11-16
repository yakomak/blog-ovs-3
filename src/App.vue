<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul class="nav navbar-nav">
      <li class="nav" ><router-link to="/news">Новости </router-link></li>
      <li class="nav" ><router-link to="/handbook">Справочник</router-link></li>
      <li class="nav" ><router-link to="/newcomers">Новичкам</router-link></li>
    </ul>
    <hr style="width:371px"> <!-- =============================================================== -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      postes: 'postes'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  text-align: right;
  display:inline-block;
}

li {
  text-align: left;
}
</style>
