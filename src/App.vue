<script setup>
import VtTabs from './components/VtTabs.vue';
import VtTab from './components/VtTab.vue';
import VtListItem from './components/VtListItem.js';
import VtDoubleList from './components/VtDoubleList.vue';
import VtMultiselect from './components/vtMultiselect.vue';
import vtAudioRecorder from './components/VtAudioRecorder.vue';
import VtTreeSelect from './components/vtTreeSelect.vue';
import VtIncrementalSearch from './components/VtIncrementalSearch.vue';
import { ref } from 'vue';

const allItems = [
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

const allMultiItems = [
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
      {
        selected: false, title: 'A-Tower East',
        children: [
          { selected: false, title: 'AE-01' },
          { selected: false, title: 'AE-02' },
          { selected: false, title: 'AE-03' }
        ]
      },
      {
        selected: false, title: 'A-Tower West',
        children: [
          { selected: false, title: 'AW-01' },
          { selected: false, title: 'AW-02' },
          { selected: false, title: 'AW-03' }
        ]
      },
      { selected: false, title: 'Cleaning Deposit A' }
    ]
  },
  {
    selected: false,
    title: 'Building B',
    children: [
      {
        selected: false, title: 'B-Tower North',
        children: [
          { selected: false, title: 'BN-01' },
          { selected: false, title: 'BN-02' },
          { selected: false, title: 'BN-03' },
          { selected: false, title: 'BN-04' }
        ]
      },
      {
        selected: false, title: 'B-Tower South',
        children: [
          { selected: false, title: 'BS-01' },
          { selected: false, title: 'BS-02' },
          { selected: false, title: 'BS-03' },
          { selected: false, title: 'BS-04' }
        ]
      },
      { selected: true, title: 'Cleaning Deposit B' },
      { selected: true, title: 'Parking Lot B' }
    ]
  },
  { selected: false, title: 'Common Basement' },
  { selected: true, title: 'Green Areas' },
  { selected: true, title: 'Parking Lot' }
]
  ;

//Incremental search:
const serverUrl = 'http://localhost:3500/'
const incrementalSearch__country = ref('')
const m = async (searchText) => {

  //API Url
  const url = new URL(serverUrl + 'coutries')
  const params = new URLSearchParams()
  params.append('q', searchText)
  url.search = params

  //data fetch
  const apiHeaders = Headers()
  apiHeaders.append('Content-Type', 'application/json"')

  const list = await fetch(url.toString(), {
    method: 'GET',
    headers: apiHeaders
  }).then((res) => {

    if (!Array.isArray(res)) {
      //There sas an error
      console.log({ error: res })
      return []
    }

    return res

  })
}

</script>

<template>

  <VtTabs style="height: 420px; width: auto;" :activeIndex="4">

    <VtTab title="Double List" v-if="false">
      <h2>vtDoubleList</h2>
      <VtDoubleList v-model="allItems" style="height: 120px;"></vtDoubleList>
    </VtTab>

    <VtTab title="Multi Select" v-if="false">
      <h2>vtMultiselect</h2>
      <VtMultiselect v-model="allItems" style="width: 400px;" />
    </VtTab>

    <VtTab title="Audio Recorder" v-if="false">
      <h2>vtAudioRecorder</h2>
      <vtAudioRecorder v-model="allAudio"></vtAudioRecorder>
    </VtTab>

    <VtTab title="Tree Select" v-if="false">
      <h2>vtTreeSelect</h2>
      <VtTreeSelect v-model="allTreeSelect"></VtTreeSelect>
    </VtTab>

    <VtTab title="Incremental Search" class="incremental-test">
      <h2>VtIncrementalSearch</h2>
      <label class="incremental__label" for="choose-country">Country: {{ incrementalSearch__country }}</label>
      <VtIncrementalSearch searchId="choose-country" v-model="incrementalSearch__country"></VtIncrementalSearch>
      <label for="choose-city">City:</label>
      <VtIncrementalSearch searchId="choose-city"></VtIncrementalSearch>
    </VtTab>

  </VtTabs>

</template>

<style>
.incremental-test {
  label {
    display: inline-block;
    padding: 1em 0 0.5em 0;
  }
}
</style>
