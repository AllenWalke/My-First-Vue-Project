<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>
    <button @click="clickMe">sadasd</button>

  </div>

</template>
<script>
export default {
  name:'hello',
  data () {
    return {
      msg:'i am apple'
    }
  },
  methods: {
    clickMe () {
      console.log(this.$route.params)
    }

  }
}
</script>

<style scoped>

</style>
