<template>
  <div class="">
    <NavBar></NavBar>
{{currentKeep}}
<div v-for="vault in vaults">

  <button @click="addToVault(vault)">
    add to Vault:  {{vault.description}}
  </button>
</div>
<button @click="deleteKeep">delete</button>
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
      this.addView()
      this.$store.dispatch("getVaults")
    },
    data() {
      return {
        editKeep:{}

      }
    },
    computed: {
      currentKeep(){
        return this.$store.state.currentKeep
      },
      vaults(){
        return this.$store.state.vaults
      }
    },
    methods: {
      addView(){
        this.$store.dispatch('addKeepView', this.currentKeep)
      },
      deleteKeep(){
        this.$store.dispatch('deleteKeep', this.currentKeep)
      },
      addToVault(vault){
        this.$store.dispatch('addToVault', vault)
      }
    }
  }

</script>

<style>


</style>
