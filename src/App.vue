<script setup>
import VtTabs from './components/Vt-Tabs.vue';


</script>

<template>
  
  <VtTabs style="height: 400px; width: 520px;">
    <template #tab-body>Contenido 1<br>Primero</template>
    <template #tab-body>Contenido 2<br><br>Segundo</template>
    <template #tab-body>Contenido 3<br><br><br>Tercero</template>
  </VtTabs>
  
</template>

<style>

</style>
