<script setup>
import { ref } from 'vue'

const thisTab = ref();
defineProps({
    title: {
      type: String,
      default: 'Tab'
    },
    active: {
      type: Boolean,
      default: false
    },
})

</script>

<template>
  <div :class="['vt-tabs__body', active ? 'vt-tabs__body--active': '']">
    <slot></slot>
  </div>
</template>

<style scoped>   
</style>
