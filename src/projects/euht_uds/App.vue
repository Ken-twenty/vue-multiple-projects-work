<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/euht_bss'>euht_bss</router-link> |
      <router-link to='/euht_cms'>euht_cms</router-link> |
      <router-link to='/euht_css'>euht_css</router-link> |
      <router-link to='/euht_nms'>euht_nms</router-link> |
      <router-link to='/euht_ocs'>euht_ocs</router-link> |
      <router-link to='/euht_oms'>euht_oms</router-link> |
      <router-link to='/euht_rms'>euht_rms</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
