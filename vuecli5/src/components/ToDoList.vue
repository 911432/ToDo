<template>
  <section>
      <TransitionGroup class="list" name="list" tag="div">
        <div v-for="(todoItemValue ,todoItemKey) of todolist" :key="todoItemKey" class=" item shadow">
          <textarea v-if=todolist[todoItemKey].includes(filter) v-model="todolist[todoItemKey]" @input="updateOneItem([todoItemKey,todolist[todoItemKey]])"/>
          <span v-if=todolist[todoItemKey].includes(filter) class="removeBtn" type="button" @click="removeOneItem(todoItemKey)">
            <i class="far fa-trash-alt fa-2x" aria-hidden="true"></i>
          </span>
        </div>
      </TransitionGroup>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      updateOneItem: 'editToDoAct',
      removeOneItem: 'deleteToDoAct'
    })
  },
  computed: {
    ...mapGetters({
      todolist: 'viewToDo',
      filter: 'viewFilter'
    })
  }
}
</script>

<style scoped>
.list {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
}

.item {
  float:left;
  display: flex;
  min-height: 4rem;
  height: 5rem;
  line-height: 1rem;
}
textarea {
  border-radius: 0.5rem;
  line-height: 1rem;
  outline: none;
  font-size: 0.9rem;
  padding: 0.2rem;
  height: 4rem;
}

.removeBtn {
  background: radial-gradient(#1155dd99, #dddd2277, #999999ee);
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #de4343;
  vertical-align: top;
}
.list-item {
  display :inline-black;
  margin-right: 1rem;
}
.list-move {
  transition: transform 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
