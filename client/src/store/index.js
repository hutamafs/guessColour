import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import router from '../router'
export default new Vuex.Store({
  state: {
    match:false,
    user:null,
    life:5,
    skor:0,
    colours : [],
    kunci: null,
    clue: {}

  },
  mutations: {
    GENERATE_COLOUR (state) {
      state.colours = []
      let num = 0
      let id = 1
      while (num < 6) {
        let red = Math.floor(Math.random() * 255) + 1
        let green = Math.floor(Math.random() * 255) + 1
        let blue = Math.floor(Math.random() * 255) + 1
        let colour = { id, red, green, blue }
        state.colours.push(colour)
        num++
        id++
      }
      state.kunci = Math.floor(Math.random() * state.colours.length)
      state.clue = state.colours[state.kunci]
    },
    CHANGE_USER_ANSWER(state,payload) {
      state.user = payload
    },
    DECREASE_LIFE(state) {
      state.life--
    },
    CHANGE_SCORE(state,payload) {
      state.skor += payload
    },
    RESET(state) {
      state.life = 5;
      state.skor = 0
    },
  },
  actions: {
    chosen({commit,state},payload) {
      commit('CHANGE_USER_ANSWER',payload)
      if(state.kunci != state.user) {
        commit('DECREASE_LIFE')
      } else {
        commit('CHANGE_SCORE',10)
      }
      
      if(state.life == 0) {
        router.push({name:'GameOver'})
      }

      commit('GENERATE_COLOUR')     
    },
  },
  sockets:{

  },
  modules: {
  }
})
