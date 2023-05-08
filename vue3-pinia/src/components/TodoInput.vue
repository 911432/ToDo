<template>
  <div class="inputBox shadow">
    <textarea v-model="newTodoItem" placeholder="Type what you have to do"></textarea>
    <span type="button" @click="pushTodo()">
    <font-awesome-icon :icon="['far', 'square-plus']" size="2xl"/>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header><h3>경고</h3></template>
      <template v-slot:footer
        ><h3>할 일을 입력하세요.</h3>
        <!-- <input class="addContainer" type="button" value="확인" @click="showModal = false" /> -->
        <span type="button" @click="showModal = false">
          <font-awesome-icon :icon="['fas', 'circle-check']" size="2xl" />
        </span>
      </template>

      <!-- <font-awesome-icon :icon="['far', 'circle-xmark']" aira-hidden="true" /> -->
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Model.vue'
import { defineComponent } from 'vue'
import { useToDoItemStore } from '@/stores/todoing'

export default defineComponent({
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  setup() {
    let todoing = useToDoItemStore()

    return {
      todoing
    }
  },
  methods: {
    pushTodo() {
      if (this.newTodoItem !== '') {
        const value = this.newTodoItem && this.newTodoItem.trim()
        this.todoing.addTodo(value)
        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = ''
    }
  },
  components: {
    Modal: Modal
  }
})
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: #999999;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  background: linear-gradient(to right, #6479fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
