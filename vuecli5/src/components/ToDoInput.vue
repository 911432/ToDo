<template>
  <div class="inputBox shadow">
    <div class="inputBox">
      <textarea v-model="newTodoItem" placeholder="Type what you have to do"></textarea>
      <span class="addContainer" @click="pushTodo">
          <i class="addBtn fas fa-plus fa-2x" aria-hidden="true"> </i>
      </span>
    </div>

    <alertmodal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal=false">
            할 일을 입력하세요.
            <i class="closeModalBtn fas fa-times fa-2x" aria-hidden="true"></i>
        </span>
    </alertmodal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    ...mapActions({
      addToDo: 'addToDoAct'
    }),
    pushTodo () {
      if (this.newTodoItem !== '') {
        const value = this.newTodoItem && this.newTodoItem.trim()
        this.addToDo(value)
        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput () {
      this.newTodoItem = ''
    }
  },
  components: {
    alertmodal: AlertModal
  }
}
</script>

<style scoped>
.inputBox {
  height: 5rem;
}
textarea {
  border-radius: 0.5rem;
  line-height: 1rem;
  outline: none;
  font-size: 0.9rem;
  padding: 0.2rem;
  height: 4rem;
}
.addContainer {
  background: linear-gradient(to right, #6479FBdd, #8763FBdd);
  display: inline-block;
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  vertical-align: top;
}
.addBtn {
  color: white;
}
</style>
