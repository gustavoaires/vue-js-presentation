<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test'
import Users from './components/Users'

export default {
  name: 'app',
  components: {
    Test,
    Users
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
