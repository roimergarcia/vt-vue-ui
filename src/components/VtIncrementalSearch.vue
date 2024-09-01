<script setup>

import { ref } from 'vue'


const props = defineProps({
  searchId: {
    type: String,
    default: null
  },
  disabled: {
    type: String,
    default: null
  },
  resultFunction: {
    type: Function,
    default: null
  },
  modelValue: {
    type: String,
    default: ""
  }
})

const dataListId = crypto.randomUUID()


const emit = defineEmits(['update:modelValue'])

const notifyModelChange = function (newValue) {
  emit('update:modelValue', newValue);

  props.resultFunction(newValue).then((updatedList) => {
    //console.log({ updatedList })
    allValues.value = [...updatedList]
  })

}

const allValues = ref([])
</script>
<template>
  <div class="vt-search">
    <input type="text" :id="searchId" :disabled="disabled" autocomplete="off"
      @input="(e) => { notifyModelChange(e.target.value) }" :list="dataListId"
      @focus="(e) => { allValues.splice(0, allValues.length) }" />
    <datalist :id="dataListId">
      <template v-for=" (value, index) in allValues" :key="index">
        <option>{{ value }}</option>
      </template>
    </datalist>
  </div>
</template>
<style>
.vt-search {
  position: relative;
}
</style>