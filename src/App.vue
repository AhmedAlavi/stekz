<template>
  <div id="app">
    <!-- <MainLayout /> -->
    <router-view />
  </div>
</template>

<script>
// import MainLayout from './views/Main.vue'

export default {
  name: 'App',
  components: {
    // MainLayout
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #d1d7db;
  height:100vh;
  background: linear-gradient(
    to top,
    #e3e2de 0%,
    #e3e2de 86%,
    #00a884 86%,
    #00a884 100%
  );
}
</style>
