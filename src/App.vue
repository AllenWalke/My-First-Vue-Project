<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ totalPrice }}
    <apple></apple>
    <banana></banana>
  </div>
</template>
/*sad*/
<script>
import apple from './components/apple'
import banana from './components/banana'
export default {
  components:{apple,banana},
  computed:{
    totalPrice () {
      return this.$store.getters.getTotal
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
</style>
