import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    match:false,
    user:null,
    answer:null,
    life:5,
    skor:0
  },
  mutations: {
    chosen(state,payload) {
      state.user = payload
      if(state.answer != state.user) {
        state.life--
        console.log(state.life,'life')
        console.log(state.skor,'skor')
        console.log(state.user,'user')
      } else {
        state.skor+=10
      }
    },
    key(state,payload) {
      state.answer = payload
      console.log(state.answer,'answer')
    }
  },
  actions: {

  },
  modules: {
  }
})
