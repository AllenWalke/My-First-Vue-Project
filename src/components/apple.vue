<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">addOne</button>
    <button @click="minus">addOne</button>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'i am apple',
        price:5
      }
    },
    methods:{
      add () {
        this.$store.dispatch('increase',this.price)
      },
      minus () {
        this.$store.dispatch('decrease',this.price)
      }
    }
  }
</script>

<style scoped>


</style>
