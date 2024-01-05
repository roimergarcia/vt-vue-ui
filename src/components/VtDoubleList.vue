<script setup>
import { defineEmits, ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    }
})

const emit = defineEmits(['update:modelValue'])
const allItems = ref(props.modelValue)

const updateAll = function(asSelected){
    
    let notify = false
    allItems.value.forEach((element ) => { 
        
        if (element.selected !== asSelected){
            element.selected = asSelected
            notify = true
        }
    });

    if (notify) {
        emit('update:modelValue', allItems.value);
    }
    
}
</script>

<template>
<div class="vt-double-list">

    <div class="vt-double-list__available" >
        <template 
            v-for="item in allItems" 
            :key="item.modelValue">

        <div
            v-show="!item.selected"
            :data-value="item.value"
            @click="item.selected = true"
            >{{ item.text }}</div>

        </template>        
    </div>

    <div class="vt-double-list__actions">
        <button 
            class="vt-double-list__add-all" 
            title="Add all"
            @click="updateAll(true)"
            >&Rarr;</button>
        <button 
            class="vt-double-list__remove-all" 
            title="Remove all"
            @click="updateAll(false)"
            >&Larr;</button> 
    </div>
    
    <div class="vt-double-list__selected" >
        <template 
            v-for="item in allItems" 
            :key="item.modelValue">

        <div
            v-show="item.selected"
            :data-value="item.value"
            @click="item.selected = false"
            >{{ item.text }}</div>

        </template>        
    </div>

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
    border: 1px solid var(--vt-border-color);
    overflow-y: auto;
    & > div {
        cursor: pointer;
        padding: 0 0.2em;
        &:hover {
            background-color: var(--vt-hover-bg-color);
        }
    }
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