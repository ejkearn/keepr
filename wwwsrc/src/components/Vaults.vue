<template>
  <div class="Vaults">
    <navBar></navBar>
    <div v-if="!currentUser.id">
        <h2>Please Log in to continue</h2>
      </div>
    <div v-if="currentUser.id">
      <form @submit.prevent="addNewVault">
          <input type="text" v-model="newVault.Description" placeholder="description">
          <button type="submit">submit</button>
        </form>
        <div v-for="vault in vaults">
          
          <router-link :to="{name: 'VaultDetail'}">
              <button @click="setVault(vault)">{{vault.description}}</button>
      
            </router-link>
        </div>
</div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  export default {
    name: 'Vaults',
    components: {
      NavBar,
    },
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
      },
      currentUser(){
        return this.$store.state.currentUser
      }
    },
    methods: {
      addNewVault(){
        this.$store.dispatch('addNewVault', this.newVault)
      },
      setVault(vault){
        this.$store.dispatch('setVault', vault)
      }
    }
  }

</script>

<style>


</style>
