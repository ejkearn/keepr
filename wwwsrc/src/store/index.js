import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

vue.use(vuex)

var baseUrl = '//localhost:5000'

var api = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: baseUrl + "/account",
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    currentUser: {}
  },
  mutations: {
    setUser(state, user){
      state.currentUser = user
    }
  },

  actions: {
    login({dispatch, commit}, loginCred) {
      auth.post('/login', loginCred)
        .then(res => {
          commit('setUser', res.data)
        })
    },
    register({dispatch, commit}, newUser){
      auth.post('/register', newUser)
        .then(res =>{
          dispatch('login')
        })
      }
    

    
  }
  })