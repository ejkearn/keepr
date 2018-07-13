<template>
  <div class="">
    {{currentVault}}
  </div>
</template>

<script>
  export default {
    name: '',
    created(){
      // this.addView()
      // this.$store.dispatch("getVaultKeeps")
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
