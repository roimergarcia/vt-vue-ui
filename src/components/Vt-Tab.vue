<script setup>
import { ref } from 'vue'

defineProps({
    title: {
      type: String,
      default: 'Tab'
    },
})

const selectTab = function(e){

/**
 * @type {HTMLElement} html element
 */
const targetTab = e.target;

//Only continue if current is not already selected
if(!targetTab.classList.contains('vt-tabs__tab') || targetTab.classList.contains('vt-tabs__tab--active')){
  return
}

//only continue if content tab is present
const targetIndex = [...targetTab.parentElement.children].indexOf(targetTab);
if (targetIndex < 0){
  return
}

for (const tab of document.querySelectorAll('.vt-tabs__tab--active')) {
  tab.classList.remove('vt-tabs__tab--active')
}
//shows current header
targetTab.classList.add('vt-tabs__tab--active')

//shows current content
const controlRoot = targetTab.closest('.vt-tabs');
controlRoot.querySelector('.vt-tabs__body--active').classList.remove('vt-tabs__body--active')
controlRoot.querySelector(`.vt-tabs__content :nth-child(${targetIndex+1})`).classList.add('vt-tabs__body--active')

}


</script>

<template>
    <slot class="vt-tabs__body vt-tabs__body--active"></slot>

</template>

<style scoped>   
</style>
