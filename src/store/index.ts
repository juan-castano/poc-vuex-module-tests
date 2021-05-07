import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './UserModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userModule: UserModule
  }
})

export default store;
