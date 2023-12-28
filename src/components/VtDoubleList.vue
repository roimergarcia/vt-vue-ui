<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const listSize = 16;
const props = defineProps({
    modelValue: {
        type: Object,
        default: []
    }
})

const allItems = ref(props.modelValue, [])
const emit = defineEmits(['update:modelValue'])

const addAll = function(){
    console.log({allItems})
    let notify = false
    allItems.value.forEach((element ) => { 
        
        if (!element.select){
            element.select = true
            notify = true
        }
    });

    if (notify) {
        emit('update:modelValue')
    }
    
}

const removeAll = function(){
    let notify = false
    allItems.value.forEach(element => {
        if (element.select){
            element.select = false
            notify = true
        }
    });

    if (notify) {
        emit('update:modelValue')
    }
    
}

</script>

<template>
<div class="vt-double-list">

    <select class="vt-double-list__available" :size="listSize">
        <template 
            v-for="item in allItems" 
            :key="item.modelValue">

        <option 
            v-show="!item.selected"
            :value="item.value"
            @click="item.selected = true"
        >{{ item.text }}
        </option>

        </template>
    </select>

    <div class="vt-double-list__actions">
        <button 
            class="vt-double-list__add-all" 
            title="Add all"
            @click="addAll()"
            >&Rarr;</button>
        <!-- <button class="vt-double-list__add" title="Add">&rarr;</button> -->
        <button class="vt-double-list__remove" title="Remove">&larr;</button>
        <!-- <button class="vt-double-list__remove-all" title="Remove all">&Larr;</button> -->
    </div>
    
    <select class="vt-double-list__selected" :size="listSize">
        <template 
            v-for="item in allItems" 
            :key="item.modelValue">

        <option 
            v-show="item.selected"
            :value="item.value"
            @click="item.selected = false"
        >{{ item.text }}
        </option>

        </template>
    </select>

</div>
</template>

<style>

.vt-double-list{
    display: flex;
    justify-items: stretch;
    gap: 1em;
    width: 400px;
}
.vt-double-list .vt-double-list__available,
.vt-double-list .vt-double-list__selected {
    flex: 1 1 100%;
}
.vt-double-list__actions{
    display: flex;
    gap: 4px;
    min-height: 120px;
    flex-direction: column;
    justify-content: center;
    & button{
        flex: 1 1 100%;
        font-weight: bold;
        font-family: math;
        cursor: pointer;
    }
}

</style>