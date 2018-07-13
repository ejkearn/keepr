<template>
  <div class="">
    <NavBar></NavBar>

            <img class="card-img-top" :src="currentKeep.url">

              <h5>{{currentKeep.description}}</h5>
              <p>Views: {{currentKeep.views}} Saves: {{currentKeep.saves}}</p>
<div v-for="vault in vaults">

  <button @click="addToVault(vault)">
    add to Vault:  {{vault.description}}
  </button>
</div>

<button v-if="currentKeep.userId == currentUser.id" @click="deleteKeep">delete</button>
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
      },
      currentUser(){
        return this.$store.state.currentUser
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
