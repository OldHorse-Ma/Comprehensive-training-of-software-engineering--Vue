import { createStore } from 'vuex'
import Cookies from 'js-cookie'

export default createStore({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      Cookies.set('token', token)
    },
    resetToken (state) {
      state.token = ''
      Cookies.remove('token')
    }
  },
  actions: {
  },
  modules: {
  }
})
