<template>
  <div class="">
    <NavBar></NavBar>
    {{currentVault}}
    <!-- {{keeps}} -->
    <div v-for="item in keeps">
      {{item}}
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  export default {
    name: '',
    components: {
      NavBar,
    },
    created(){
      this.$store.dispatch("getVaultKeeps")
    },
    data() {
      return {

      }
    },
    computed: {
      currentVault(){
        return this.$store.state.currentVault
      },
      keeps(){
        return this.$store.state.keeps
      }
    },
    methods: {}
  }

</script>

<style>


</style>
