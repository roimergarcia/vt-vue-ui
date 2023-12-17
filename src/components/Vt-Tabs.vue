<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
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

<div class="vt-tabs">
  <div class="vt-tabs__header" @click="selectTab">
    <div class="vt-tabs__tab vt-tabs__tab--active">
        Ficha 1
    </div>
    <div class="vt-tabs__tab">
        Ficha 2
    </div>
    <div class="vt-tabs__tab">
        Ficha 3
    </div>
  </div>
  <div class="vt-tabs__content">
    <slot name="tab-body" class="vt-tabs__body vt-tabs__body--active"></slot>
  </div>

</div>



<!-- EJEMPLO: 

  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  -->
</template>

<style scoped>
.vt-tabs{
  --vt-border-color-def: #aaa;
  --vt-border-radius-def: 4px;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
}
.vt-tabs__header{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 0 auto;
  background-color: #FFF;
}
.vt-tabs__content{
  flex: 1 1 100%;
}

/* HEADERS */
.vt-tabs__tab{
  display: inline-block;
  padding: 2px 0.5em;
  margin-right: 2px;
  border-width: 1px;
  border-color: var(--vt-border-color, var(--vt-border-color-def));
  border-style: solid solid solid solid;
  border-radius: var(--vt-border-radius, var(--vt-border-radius-def)) var(--vt-border-radius, var(--vt-border-radius-def)) 0 0;
  
  &.vt-tabs__tab--active{
    border-bottom-color: #FFF;
    z-index: 1;
  }

  &:hover {
    background-color: lightcoral;      
  }

}

  /* CONTENT */
  .vt-tabs__content{
    margin-top: -1px;
    border: 1px solid var(--vt-border-color, var(--vt-border-color-def));
    border-radius: 0 0 var(--vt-border-radius, var(--vt-border-radius-def)) var(--vt-border-radius, var(--vt-border-radius-def));
  }
  
  .vt-tabs__body{
    padding: 0.5em;
    display: none;
    &.vt-tabs__body--active{
      display: block;
    }
  }
</style>
