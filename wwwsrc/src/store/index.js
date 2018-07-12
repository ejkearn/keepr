import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

vue.use(vuex)

var baseUrl = '//localhost:5000'

var api = axios.create({
  baseURL: baseUrl + "/api",
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
    currentUser: {},
    keeps: {},
    vaults:{}
  },
  mutations: {
    setUser(state, user){
      state.currentUser = user
    },
    setKeeps(state, keeps){
      state.keeps = keeps
    },
    setVaults(state, vaults){
      state.vaults = vaults
    }
  },

  actions: {

      getVaults({dispatch, commit, state}){
        console.log(state.currentUser.userId)
        api.get('/vaults/author/'+ state.currentUser.userId)
        .then(res => {
          commit('setVaults', res.data)
        })
      },

      addNewVault({dispatch, commit, state}, newVault){
        newVault.UserId = state.currentUser.id
        newVault.Username = state.currentUser.username
        // console.log(state.currentUser)
        console.log(newVault)
        api.post('/vaults', newVault)
        .then(res => {
          dispatch('getAllVaults')
        })
      },

      // Keeps +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      getAllKeeps({dispatch, commit}){
      api.get('/keeps')
      .then(res => {
        commit('setKeeps', res.data)
      })
    },

    addNewKeep({dispatch, commit, state}, newKeep){
      newKeep.UserId = state.currentUser.id
      newKeep.Username = state.currentUser.username
      // console.log(state.currentUser)
      // console.log(newKeep)
      api.post('/keeps', newKeep)
      .then(res => {
        dispatch('getAllKeeps')
      })
    },
    //auth stuff ============================================================================
    login({dispatch, commit}, loginCred) {
      auth.post('/login', loginCred)
        .then(res => {
          console.log(res.data)
          commit('setUser', res.data)
        })
    },
    register({dispatch, commit}, newUser){
      auth.post('/register', newUser)
        .then(res =>{
          dispatch('login')
        })
      },
    authenticate({dispatch, commit}){
      auth.get('/authenticate')
      .then(res=>{
        commit('setUser', res.data)
      })
    }
    

    
  }
  })