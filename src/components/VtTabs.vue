<script setup>
import { ref } from 'vue'
import { useSlots } from 'vue'


const props = defineProps({
  activeIndex: {
    type: Number,
    default: 0
  },
})

let currentIndex = ref(props.activeIndex)//

const selectTab = function (index) {
  currentIndex.value = index;
}

</script>

<template>
  <div class="vt-tabs">
    <div class="vt-tabs__header">

      <template v-for="(tab, index) in $slots.default()" :key="index">

        <div v-if="!!tab.props" :tabindex="index"
          :class="['vt-tabs__tab', (currentIndex === index) ? 'vt-tabs__tab--active' : '']" :data-index="index"
          @click="() => { selectTab(index) }">{{ tab.props ? tab.props.title : '' }}
          {{ typeof tab }} </div>

      </template>

    </div>
    <div class="vt-tabs__content">

      <template v-for="(tab, index) in $slots.default()" :key="index">
        <component :is="tab" :active="currentIndex === index" :index="index"></component>
      </template>

    </div>

  </div>
</template>

<style>
@import '../assets/global.css';

.vt-tabs {
  display: flex;
  flex-direction: column;
}

.vt-tabs__header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 0 auto;
}

.vt-tabs__content {
  flex: 1 1 100%;
}

/* HEADERS */
.vt-tabs__tab {
  display: inline-block;
  padding: 2px 0.5em;
  margin-right: 2px;
  border-width: 1px;
  border-color: var(--vt-border-color);
  border-style: solid solid solid solid;
  border-radius: var(--vt-border-radius) var(--vt-border-radius) 0 0;
  background-color: var(--vt-bg-color);
  cursor: pointer;

  &.vt-tabs__tab--active {
    position: relative;
    border-bottom-color: var(--vt-bg-color);
    z-index: 1;
  }

  &.vt-tabs__tab--active::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 3px solid var(--vt-accent-color);
    border-radius: 4px 4px 0 0;
  }

  &:hover {
    color: var(--vt-hover-color);
    background-color: var(--vt-hover-bg-color);
  }

}

/* CONTENT */
.vt-tabs__content {
  margin-top: -1px;
  background-color: var(--vt-bg-color);
  border: 1px solid var(--vt-border-color);
  border-radius: 0 0 var(--vt-border-radius) var(--vt-border-radius);
}

.vt-tabs__body {
  padding: 0.5em;
  display: none;

  &.vt-tabs__body--active {
    display: block;
  }
}
</style>
