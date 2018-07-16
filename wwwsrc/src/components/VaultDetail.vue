<template>
  <div class="">
    <NavBar></NavBar>
    <h1>
      {{currentVault.description}}
    </h1>
    <button class="btn-danger" @click="deleteVault">
      Delete
    </button>
    <!-- {{keeps}} -->
    <div v-for="keep in keeps">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="keep.url">
            <div class="card-body">
              <h5 class="card-title">{{keep.description}}</h5>
              <p class="card-text">Views: {{keep.views}} Saves: {{keep.saves}}</p>
              <router-link :to="{name: 'KeepDetail'}">
              <a href="#" class="btn btn-primary"@click="setKeep(keep)">Details</a>
            </router-link>
            </div>
          </div>
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
    methods: {
      deleteVault(){
        this.$store.dispatch('deleteVault', this.currentVault)
      },
    }
  }

</script>

<style>


</style>
