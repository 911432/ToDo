<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="todoing.deleteAll()"></span>
    <font-awesome-icon :icon="['far', 'trash-can']" size="2xl" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useToDoItemStore } from '@/stores/todoing'
export default defineComponent({
  name: 'TodoFooter',
  setup() {
    const todoing = useToDoItemStore()

    return {
      todoing
    }
  }
})
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #999999;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: black;
}
</style>
