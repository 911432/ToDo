<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoFilter></TodoFilter>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import todoheader from './components/ToDoHeader.vue'
import todofilter from './components/ToDoFilter.vue'
import todoinput from './components/ToDoInput.vue'
import todolist from './components/ToDoList.vue'
import todofooter from './components/ToDoFooter.vue'

export default {
  name: 'app',
  components: {
    TodoHeader: todoheader,
    TodoFilter: todofilter,
    TodoInput: todoinput,
    TodoList: todolist,
    TodoFooter: todofooter
  }
}
</script>

<style>
@import './assets/main.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 5rem;
}
</style>
