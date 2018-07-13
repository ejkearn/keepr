<template>
  <div class="">
    {{currentVault}}
    <!-- {{keeps}} -->
    <div v-for="item in keeps">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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
