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
          msg: 'i am banana',
          price:15
        }
      },
      methods:{
        add () {
          this.$store.commit('increment',this.price)
        },
        minus () {
          this.$store.commit('decrement',this.price)
        }
      }
    }
  </script>

  <style scoped>


  </style>
