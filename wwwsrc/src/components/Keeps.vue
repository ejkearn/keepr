<template>
  <div class="">

    <div v-for="keep in Keeps">
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
    name: 'Keeps',
    components: {
      NavBar,
    },
    created(){
      this.$store.dispatch('getAllKeeps')
    },
    data() {
      return {
        newKeep: {
          Description: "",
          Url: "",
        }
      }
    },
    computed: {
      Keeps(){
      return this.$store.state.keeps
    }
    },
    methods: {
      addNewKeep(){
        this.$store.dispatch('addNewKeep', this.newKeep)
      },
      setKeep(keep){
        this.$store.dispatch('setKeep', keep)
      }
    }
  }

</script>

<style>


</style>
