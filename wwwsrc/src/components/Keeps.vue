<template>
  <div class="">
    <navBar></navBar>
    <form @submit.prevent="addNewKeep">
      <input type="text" v-model="newKeep.Description" placeholder="description">
      <input type="text" v-model="newKeep.Url" placeholder="Image URL">
      <button type="submit">submit</button>
    </form>
    <div v-for="keep in Keeps">
      {{keep}}
      <router-link :to="{name: 'KeepDetail'}">
        <button @click="setKeep(keep)">Details</button>

      </router-link>
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
