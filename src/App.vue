<template>
  <div id="app">
    <v-header />
    <router-view/>
    <v-home />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  export default {
    name: 'App',
    data() {

    },
    components: {
      'v-header': Header,
      'v-home': Home,
    }
  }
</script>

<style style="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
