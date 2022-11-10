const todoing = {
  state: {
    todoitems: {}
  },
  mutations: {
    async deleteAll (state) {
      state.todoitems = {}
    },
    async addToDo (state, value) {
      const date = Date.now()
      this.$set(state.todoing.todoitems, date, value)
    },
    async deleteToDo (state, todoitemkey) {
      console.log(todoitemkey)
      this.$delete(state.todoing.todoitems, todoitemkey)
    },
    async editToDo (state, todoItemobj) {
      this.$set(state.todoing.todoitems, todoItemobj[0], todoItemobj[1])
    }
  },
  actions: {
    deleteAllAct (context, state) {
      context.commit('todoing.deleteAll', state)
    },
    addToDoAct (context, state, value) {
      context.commit('todoing.addToDo', state, value)
    },
    deleteToDoAct (context, state, todoItemkey) {
      context.commit('todoing.deleteToDo', state, todoItemkey)
    },
    editToDoAct (context, state, todoItemobj) {
      context.commit('todoing.editToDo', state, todoItemobj)
    }
  },
  getters: {
    viewToDo (state) {
      return state.todoing.todoitems
    }
  }
}

export default { todoing }
