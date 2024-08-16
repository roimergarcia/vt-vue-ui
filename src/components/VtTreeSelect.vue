<script setup>
import { ref } from 'vue'


const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    },
    isRoot: {
      type: Boolean,
      default: true
    }
})

const emit = defineEmits(['update:modelValue']);
const allItems = ref(props.modelValue);

const isRoot = ref(props.isRoot)
const isOpen = ref(props.isRoot)
</script>

<template>

<ul :class='{"vt-TreeSelect": isRoot}'>
  <template v-for="(item, index) in allItems">

    <template v-if="!!item.children && item.children.length > 0">
      <li :class='{"vt-TreeSelect__item": true, "vt-TreeSelect__item--open": isOpen}'>
        <label><input type="checkbox" :cheched="item.selected" />{{item.title}} isRoot:{{isRoot}}</label>
        <VtTreeSelect v-model="item.children" :isRoot="false"></VtTreeSelect>
      </li>
    </template>

    <template v-else>
      <li><label><input type="checkbox" :cheched="item.selected" />{{item.title}}</label></li>
    </template>

  </template> 
</ul>

</template>

<style >
@import '../assets/global.css';

.vt-TreeSelect{
  
}
.vt-TreeSelect__item > ul{
  list-style-type: none;
}
.vt-TreeSelect__item.vt-TreeSelect__item--open > ul{
  list-style-type: initial;
}

</style>
