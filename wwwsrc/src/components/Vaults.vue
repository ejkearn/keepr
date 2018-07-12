<template>
  <div class="Vaults">
      <form @submit.prevent="addNewVault">
          <input type="text" v-model="newVault.Description" placeholder="description">
          <button type="submit">submit</button>
        </form>
{{vaults}}
  </div>
</template>

<script>
  export default {
    name: 'Vaults',
    created(){
      this.$store.dispatch('getVaults')
    },
    data() {
      return {
        newVault:{
          Description:''
        }
      }
    },
    mounted(){
      
    },
    computed: {
      vaults(){
        return this.$store.state.vaults
      }
    },
    methods: {
      addNewVault(){
        this.$store.dispatch('addNewVault', this.newVault)
      }
    }
  }

</script>

<style>


</style>
