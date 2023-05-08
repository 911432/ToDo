import { defineStore } from 'pinia'
import { createGlobalState, useLocalStorage } from '@vueuse/core'
import { toHandlers } from 'vue'

export const useToDoItemStore = defineStore('todoitems', {
  state: () => ({
    todoitems: useLocalStorage('todoItems', {})
  }),
  getters: {},
  actions: {
    addTodo(todoitemvalue) {
      var date = Date.now()
      this.todoitems[date] = todoitemvalue
    },
    deleteTodo(todoitemkey) {
      console.log(this.todoitems[todoitemkey])
      delete this.todoitems[todoitemkey]

    },
    deleteAll() {
      this.todoitems = {}
    },
    editTodo(todoItemobj) {
      this.todoitems[todoItemobj[0]] = todoItemobj[1]
    }
  }
})
