<script setup>
import VtTabs from './components/Vt-Tabs.vue';
import VtTab from './components/Vt-Tab.vue'
import VtDoubleList from './components/VtDoubleList.vue'

import vtListItem from './components/vtListItem'

const allItems=[
  new vtListItem('Fresh Apples', 'apple', false),
  new vtListItem('Bananas', 'banana', true),
  new vtListItem('Lemons', 'lemon', false),
  new vtListItem('Wacamole', 'advocado', false),
  new vtListItem('Strawberry Pie', 'strawberry', true),
  new vtListItem('Chocolate bar', 'choco-bar', true),
  new vtListItem('Chocolate Cake', 'choco-cake', false),
  new vtListItem('Strawberry Ice Cream', 'strawberry-ic', false),
  new vtListItem('Apple', 'fresh-apple', false),
  new vtListItem('Apple Pie', 'apple-pie', true),
]
</script>

<template>
  
  <VtTabs style="height: 420px; width: auto;" :activeIndex="0">

    <VtTab title="Double List">

      <h2>vtDoubleList</h2>
      <VtDoubleList v-model="allItems" style="height: 120px;"></vtDoubleList>

    </VtTab>

    <VtTab title="NO Activa" >Contenido 2: *segundo*</VtTab>
    <VtTab title="Otra">Contenido 3: <i>Última!</i></VtTab>
  </VtTabs>

</template>

<style>

</style>
