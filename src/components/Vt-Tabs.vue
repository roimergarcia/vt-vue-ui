<script setup>
import { ref } from 'vue'


const props = defineProps({
  activeIndex: {
       type: Number,
       default: 0
     },
})

let currentIndex = ref(props.activeIndex)//

const selectTab = function(index){
  currentIndex.value = index;
}

</script>

<template>
<div class="vt-tabs">
  <div class="vt-tabs__header">
    
    <template 
      v-for="(tab, index) in $slots.default()" 
      :key="index">
      
      <div
        :class="['vt-tabs__tab', (currentIndex === index) ? 'vt-tabs__tab--active': '']"
        :data-index="index"
        @click="()=>{selectTab(index)}"
        >{{ tab.props.title }} </div>
      
    </template>

  </div>
  <div class="vt-tabs__content">

    <template v-for="(tab, index) in $slots.default()">
      <component :is="tab" :active="currentIndex === index" :index="index"></component>
    </template>

  </div>

</div>
</template>

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

<style >
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
  cursor: pointer;

  &.vt-tabs__tab--active{
    position: relative;
    border-bottom-color: #FFF;
    z-index: 1;
  }

  &.vt-tabs__tab--active::before{
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 3px solid #F80;
  }

  &:hover {
    background-color: #ddd;      
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
