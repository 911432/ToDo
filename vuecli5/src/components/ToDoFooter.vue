<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearAll">Clear All</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      clearAll: 'deleteAllAct'
    })
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  clear:both;
}
.clearAllBtn {
  color: #e20303;
  display: black;
}
</style>
