<script setup>
import VtTabs from './components/Vt-Tabs.vue';
import VtTab from './components/Vt-Tab.vue'
import VtDoubleList from './components/VtDoubleList.vue'


//vtDoubleList: 
class vtDoubleListItem {
    constructor ( text, value, selected){
        return { text, value, selected }
    }
}
const allItems=[
  new vtDoubleListItem('Fresh Apples', 'apple', false),
  new vtDoubleListItem('Bananas', 'banana', true),
  new vtDoubleListItem('Lemons', 'lemon', false),
  new vtDoubleListItem('Wacamole', 'advocado', false),
  new vtDoubleListItem('Strawberry Pie', 'strawberry', true),
]
</script>

<template>
  
  <VtTabs style="height: 600px; width: auto;" :activeIndex="0">

    <VtTab title="Double List">

      <h2>vtDoubleList</h2>
      <VtDoubleList v-model="allItems"></vtDoubleList>

    </VtTab>

    <VtTab title="NO Activa" >Contenido 2: *segundo*</VtTab>
    <VtTab title="Otra">Contenido 3: <i>Última!</i></VtTab>
  </VtTabs>

</template>

<style>

</style>
