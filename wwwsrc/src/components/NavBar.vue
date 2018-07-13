<template>
  <div class="">
<div class="row">
  <div class="col">
      <router-link :to="{name:'Home'}">
    Home
    </router-link>
  </div>
  <div class="col">
      <router-link :to="{name:'Vaults'}">
    vaults
    </router-link>
  </div>
  <div class="col">
      <router-link :to="{name:'MyKeeps'}">
    My keeps
    </router-link>
  </div>
  <div class="col">
    <div v-if="!User.id">
      <router-link :to="{name:'Auth'}">
    login
    </router-link>
    </div>
    <div v-if="User.id">

      Welcome: {{User.username}}
      <button @click="logout">Logout</button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
  // import Home from './Home'
  // import Vaults from './Vaults'
  // import Keeps from './Keeps'
  // import Auth from './Auth'
  export default {
    name: 'NavBar',
    created(){
    this.$store.dispatch('authenticate')
  },
    data() {
      return {

      }
    },
    computed: {
      User(){
        return this.$store.state.currentUser
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout')
      }
    }
  }

</script>

<style>


</style>
