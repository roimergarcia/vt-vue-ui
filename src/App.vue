<script setup>
import VtTabs from './components/Vt-Tabs.vue';
import VtTab from './components/Vt-Tab.vue'

</script>

<template>
  
  <VtTabs style="height: 400px; width: 520px;">
    <VtTab title="OK" :active="true" >Contenido 1<br>Primero</VtTab>
    <VtTab title="NO Activa" >Contenido 2: *segundo*</VtTab>
    <VtTab title="Otra" >Contenido 3: <i>Última!</i></VtTab>
  </VtTabs>

</template>

<style>

</style>
