<script setup>

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
  
<div class="vt-tabs" style="height: 500px; width: 740px;">
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
    <div class="vt-tabs__body vt-tabs__body--active">Contenido 1</div>
    <div class="vt-tabs__body">Contenido 2</div>
    <div class="vt-tabs__body">Contenido 3</div>
  </div>

</div>

</template>

<style>
  .vt-tabs{
    --border-color: #444;
    --border-radius: 4px;
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
    border-color: var(--border-color);
    border-style: solid solid solid solid;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    
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
      border: 1px solid var(--border-color);      
      border-radius: 0 0 var(--border-radius) var(--border-radius);
    }
    
    .vt-tabs__body{
      padding: 0.5em;
      display: none;
      &.vt-tabs__body--active{
        display: block;
      }
    }

</style>
