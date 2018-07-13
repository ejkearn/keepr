<template>
  <div class="Home">
    <NavBar></NavBar>
    <h1>Keepr</h1>
    <keeps></keeps>

  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Keeps from './Keeps'
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
      NavBar,
      Keeps,
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
