<script setup>
import VtTabs from './components/VtTabs.vue';
import VtTab from './components/VtTab.vue';
import VtListItem from './components/VtListItem.js';
import VtDoubleList from './components/VtDoubleList.vue';
import VtMultiselect from './components/vtMultiselect.vue';
import vtAudioRecorder from './components/VtAudioRecorder.vue';

 
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

</script>

<template>
  
  <VtTabs style="height: 420px; width: auto;" :activeIndex="2">

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
  </VtTabs>

</template>

<style>

</style>
