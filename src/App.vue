<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  //example for using vuex
  // import productModule from 'store/products'

  export default {
    name: 'app',
    created() {
      // this.$store.dispatch(productModule.types.FETCH)
      // this.$store.commit(productModule.types.UPDATE)
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
</style>
