<template>
  <div class="">
    <form @submit.prevent="addNewKeep">
      <input type="text" v-model="newKeep.Description" placeholder="description">
      <input type="text" v-model="newKeep.Url" placeholder="Image URL">
      <button type="submit">submit</button>
    </form>
    <div v-for="keep in Keeps">
      {{keep}}
      <router-link :to="{name: 'KeepDetail'}">
        <button >Details</button>

      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Keeps',
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
      }
    }
  }

</script>

<style>


</style>
