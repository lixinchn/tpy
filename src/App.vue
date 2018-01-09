<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
  /*background: #e6e6e6;*/
}

.row {
  height: 100%;
}

.col-left {
  background: #e4e9f2;
  height: 100%;
  padding: 30px 0 0 0;
}

.col-right {
  padding: 20px;
}
</style>
