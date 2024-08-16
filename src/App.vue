<script setup>
import VtTabs from './components/VtTabs.vue';
import VtTab from './components/VtTab.vue';
import VtListItem from './components/VtListItem.js';
import VtDoubleList from './components/VtDoubleList.vue';
import VtMultiselect from './components/vtMultiselect.vue';
import vtAudioRecorder from './components/VtAudioRecorder.vue';
import VtTreeSelect from  './components/vtTreeSelect.vue';
 
const allItems=[
  new VtListItem('Fresh Apples', 'apple', false),
  new VtListItem('Bananas', 'banana', true),
  new VtListItem('Lemons', 'lemon', false),
  new VtListItem('Wacamole', 'advocado', false),
  new VtListItem('Strawberry Pie', 'strawberry', true),
  new VtListItem('Chocolate bar', 'choco-bar', true),
  new VtListItem('Chocolate Cake', 'choco-cake', false),
  new VtListItem('Strawberry Ice Cream', 'strawberry-ic', false),
  new VtListItem('Apple', 'fresh-apple', false),
  new VtListItem('Apple Pie', 'apple-pie', true),
]

const allMultiItems=[
  new VtListItem('Fresh Apples', 'apple', false),
  new VtListItem('Bananas', 'banana', true),
  new VtListItem('Lemons', 'lemon', false),
  new VtListItem('Wacamole', 'advocado', false),
  new VtListItem('Strawberry Pie', 'strawberry', true),
  new VtListItem('Chocolate bar', 'choco-bar', true),
  new VtListItem('Chocolate Cake', 'choco-cake', false),
  new VtListItem('Strawberry Ice Cream', 'strawberry-ic', false),
  new VtListItem('Apple', 'fresh-apple', false),
  new VtListItem('Apple Pie', 'apple-pie', true),
]
const allAudio = null;
const allTreeSelect = [
  { 
    selected: false, 
    title: 'Building A', 
    children: [
    { selected: false, title:'A-01' },
    { selected: false, title:'A-02' },
    { selected: false, title:'A-03' }
    ] 
  },
  { selected: false,
    title:'Building B',
    children: [
      { selected: true, title:'B-01' },
      { selected: true, title:'B-02' },
      { selected: false, title:'B-03' },
      { selected: false, title:'B-04' },
      { selected: true, title:'B-03' }
      ] 
   },
   { selected: false, title:'Common Basement' },
   { selected: true, title:'Green Areas' },
   { selected: true, title:'Parkin Lot' }
]
;

</script>

<template>
  
  <VtTabs style="height: 420px; width: auto;" :activeIndex="3">

    <VtTab title="Double List">

      <h2>vtDoubleList</h2>
      <VtDoubleList v-model="allItems" style="height: 120px;"></vtDoubleList>

    </VtTab>

    <VtTab title="Multi Select" >

      <h2>vtMultiselect</h2>
      <VtMultiselect v-model="allItems" style="width: 400px;"/>

    </VtTab>

    <VtTab title="Audio Recorder">
      <h2>vtAudioRecorder</h2>
      <vtAudioRecorder v-model="allAudio"></vtAudioRecorder>
    </VtTab>

    <VtTab title="Tree Select">
      <h2>vtTreeSelect</h2>
      <VtTreeSelect v-model="allTreeSelect"></VtTreeSelect>
    </VtTab>
  </VtTabs>

</template>

<style>

</style>
