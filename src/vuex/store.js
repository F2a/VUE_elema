import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // vuex 的数据变化不会触发组件的生命周期钩子
  count: 1,
  newsList: []
}
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  getLists(state, data){
    state.newsList = data;
  }
}
const actions = {
  getLists ({ commit }) {
    commit('getLists')
  }
}
const getters = {
  computed (state) {
    return '第' + state.count + '页'
  },

}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
})

export default store
