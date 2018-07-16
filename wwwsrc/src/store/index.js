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
    currentKeep: {},
    vaults: {},
    currentVault: {}
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setKeep(state, keep) {
      state.currentKeep = keep
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setVault(state, vault) {
      state.currentVault = vault
    },

  },

  actions: {
    // Vault Keep Reverence+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    addToVault({dispatch, commit, state}, vault){
      var newvk = {}
      newvk.userId = state.currentUser.id
      newvk.keepId = state.currentKeep.id
      newvk.vaultId = vault.id
      console.log(newvk)
      api.post('/vaultkeeps', newvk)
      .then(res=>{
        console.log(res)
        var newKeep = state.currentKeep
        newKeep.saves = state.currentKeep.saves+1
        dispatch('editKeep', newKeep)
      })
    },

    getVaultKeeps({dispatch, commit, state}){
      api.get('/vaultkeeps/vault/' + state.currentVault.id)
      .then(res=>{
        console.log(res)
        dispatch('getKeepsFromVault', res.data)
      })
    },

    // Vaults +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    getVaults({ dispatch, commit, state }) {
      api.get('/vaults/author/' + state.currentUser.id)
        .then(res => {
          commit('setVaults', res.data)
        })
    },

    setVault({commit}, vault){
      commit("setVault", vault)
    },

    addNewVault({ dispatch, commit, state }, newVault) {
      newVault.UserId = state.currentUser.id
      newVault.Username = state.currentUser.username
      // console.log(state.currentUser)
      console.log(newVault)
      api.post('/vaults', newVault)
        .then(res => {
          
          state.currentVault = res.data
          router.push({name: "VaultDetail"})
        })
    },
    deleteVault({dispatch, commit}, vault){
      api.delete('/vaults/' + vault.id)
      .then(res=>{
        commit('setVault', {})
        dispatch("getVaults")
        router.push({name: 'Vaults'})
      })
    },

    // Keeps +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    setKeep({commit}, keep){
      commit("setKeep", keep)
    },

    addKeepView({dispatch, state}, keep){
      
      // var keepAdd = {}
      // keepAdd.id =state.currentKeep.id 
      // keepAdd.views = state.currentKeep.views +1
    keep.views ++
    keep.Views = keep.views
      dispatch('editKeep', keep)
    },

    getAllKeeps({ dispatch, commit }) {
      api.get('/keeps')
        .then(res => {
          commit('setKeeps', res.data)
        })
    },
    getKeepsUserId({ dispatch, commit, state }) {
      api.get('/keeps/author/' + state.currentUser.id)
        .then(res => {
          commit("setKeeps", res.data)
        })
    },

    getKeepId({ dispatch, commit, state }) {
      api.get('/keeps/' + state.currentKeep.Id)
        .then(res => {
          commit("", res.data)
        })
    },


    getKeepsFromVault({dispatch, commit, state}, keeps){
      state.keeps = []
      var newKeeps = []
      for (let index = 0; index < keeps.length; index++) {
        const currId = keeps[index].keepId;
        api.get('/keeps/'+ currId)
        .then(res =>{
          newKeeps.push(res.data)
        })

        commit('setKeeps', newKeeps)
        
      }
    },

    addNewKeep({ dispatch, commit, state }, newKeep) {
      newKeep.UserId = state.currentUser.id
      newKeep.Username = state.currentUser.username
      // console.log(state.currentUser)
      // console.log(newKeep)
      api.post('/keeps', newKeep)
        .then(res => {
          state.currentKeep = res.data
          router.push({name: "KeepDetail"})
          
        })
    },

    editKeep({ dispatch, commit }, keep) {
      console.log(keep)
      api.put('/keeps/' + keep.id, keep)
      .then(res=>{
        console.log(res)
      })
    },

    deleteKeep({dispatch, commit}, keep){
      api.delete('/keeps/' + keep.id)
      .then(res=>{
router.push({name: 'Keeps'})
      })
    },
    //auth stuff ============================================================================
    login({ dispatch, commit }, loginCred) {
      auth.post('/login', loginCred)
        .then(res => {
          console.log(res.data)
          commit('setUser', res.data)
        })
    },
    register({ dispatch, commit }, newUser) {
      auth.post('/register', newUser)
        .then(res => {
          dispatch('login')
        })
    },
    authenticate({ dispatch, commit }) {
      auth.get('/authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
    },
    logout({dispatch, commit,state}){
      auth.delete('/'+state.currentUser.id)
      .then(res =>{
        console.log(res)
      })
    }



  }
})