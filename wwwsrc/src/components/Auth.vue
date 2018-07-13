<template>
  <div class="Auth">
    <NavBar></NavBar>

   <form @submit.prevent="login">
     <input type="text" placeholder = "email" v-model ="logCreds.Email">
     <input type="password" placeholder= "password" v-model="logCreds.Password">
     
     <button>submit</button>
   </form>
   <form @submit.prevent="register">
    <input type="text" placeholder = "Email" v-model ="newUser.Email">
    <input type="text" placeholder = "Username" v-model ="newUser.Username">
    <input type="password" placeholder= "password" v-model="newUser.Password">
    <button>submit</button>
  </form>
  </div>
</template>

<script>
  import NavBar from './NavBar'
export default {
  name: 'HelloWorld',
  components: {
      NavBar,
    },
  mounted(){
    this.$store.dispatch('authenticate')
  },
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
    currentUser(){
      return this.$store.state.currentUser
    } 
    
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
