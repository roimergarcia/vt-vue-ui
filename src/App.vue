<script setup>
import VtTabs from './components/VtTabs.vue';
import VtTab from './components/VtTab.vue';
import VtListItem from './components/VtListItem.js';
import VtDoubleList from './components/VtDoubleList.vue';
import VtMultiselect from './components/vtMultiselect.vue';

 
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
</script>

<template>
  
  <VtTabs style="height: 420px; width: auto;" :activeIndex="1">

    <VtTab title="Double List">

      <h2>vtDoubleList</h2>
      <VtDoubleList v-model="allItems" style="height: 120px;"></vtDoubleList>

    </VtTab>

    <VtTab title="Multi Select" >

      <h2>vtMultiselect</h2>
      <VtMultiselect v-model="allItems" style="width: 300px;"/>

    </VtTab>

    <VtTab title="Otra">Contenido 3: <i>Última!</i></VtTab>
  </VtTabs>

</template>

<style>

</style>
