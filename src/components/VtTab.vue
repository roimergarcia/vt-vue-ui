<script setup>
import { ref } from 'vue'

defineProps({
    title: {
      type: String,
      default: 'Tab'
    },
    active: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    },
})

</script>
 
<template>

  <div 
    :class="['vt-tabs__body', active ? 'vt-tabs__body--active': '']" 
    :data-index="index">
    <slot></slot>
  </div>

</template>

<style scoped>   
</style>
