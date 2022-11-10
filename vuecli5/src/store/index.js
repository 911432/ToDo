import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    todoitems: {},
    filter: ''
  },
  mutations: {
    async deleteAll (state) {
      state.todoitems = {}
    },
    async addToDo (state, value) {
      const date = Date.now()
      Vue.set(state.todoitems, date, value)
    },
    async deleteToDo (state, todoitemkey) {
      Vue.delete(state.todoitems, todoitemkey)
    },
    async editToDo (state, todoItemobj) {
      Vue.set(state.todoitems, todoItemobj[0], todoItemobj[1])
    }
  },
  actions: {
    deleteAllAct (context, state) {
      context.commit('deleteAll', state)
    },
    addToDoAct (context, state, value) {
      context.commit('addToDo', state, value)
    },
    deleteToDoAct (context, state, todoItemkey) {
      context.commit('deleteToDo', state, todoItemkey)
    },
    editToDoAct (context, state, todoItemobj) {
      context.commit('editToDo', state, todoItemobj)
    }
  },
  getters: {
    viewToDo (state) {
      return state.todoitems
    },
    viewFilter (state) {
      return state.filter
    }
  },
  plugins: [vuexLocalStorage.plugin]
})
