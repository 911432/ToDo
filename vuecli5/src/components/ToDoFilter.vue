<template>
    <div class="findBox">
      <textarea class="filter" v-model="filter" placeholder="Find something to do."></textarea>
    </div>
</template>
<script>

export default {
  computed: {
    filter: {
      get () {
        return this.$store.getters.viewFilter
      },
      set (value) {
        return this.$store.dispatch('editFilterAct', value)
      }
    }
  }
}
</script>
<style>
.filter {
  border-radius: 0.5rem;
  line-height: 1rem;
  outline: none;
  font-size: 0.9rem;
  padding: 0.2rem;
  height: 2rem;
  width : 16rem
}
</style>
