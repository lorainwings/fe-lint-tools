<template>
  <div class="header">{{ count }}</div>
  <button @click="increment()"></button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<style lang="scss" scoped>
.header {
  border: 1px solid #ddd;
}
</style>
