<template>
  <div class="hello">
   <form @submit.prevent="login">
     <input type="text" placeholder = "email" v-model ="logCreds.Email">
     <input type="password" v-model="logCreds.Password">
     <button>submit</button>
   </form>
   <form @submit.prevent="register">
    <input type="text" placeholder = "Email" v-model ="newUser.Email">
    <input type="text" placeholder = "Username" v-model ="newUser.Username">
    <input type="password" v-model="newUser.Password">
    <button>submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      logCreds: {
        Email:'',
        Password:''
      },
      newUser:{
        Email:'',
        Password:'',
        Username:''
      }
    }
  },
  computed: {

    },
    methods: {
      login(){
        this.$store.dispatch('login', this.logCreds)
      },
      register(){
        this.$store.dispatch('register', this.newUser)
      },


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
