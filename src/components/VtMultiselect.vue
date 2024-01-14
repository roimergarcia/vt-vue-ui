<script setup>
import { ref } from 'vue';
import ChebronDown from '~icons/mdi/chevron-down'
import ChebronUp from '~icons/mdi/chevron-up'
import DeleteItem from '~icons/mdi/close'

const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    }
})

const emit = defineEmits(['update:modelValue']);
const allItems = ref(props.modelValue);
const isOpen = ref(false);

</script>

<template>
    <div tabindex="0" class="vt-multiselect" @focus-out.self="()=>{isOpen=false; console.log('OK')}">
        <div tabindex="0" class="vt-multiselect__selected">
            <template 
                v-for="(item, index) in allItems">
            <span 
                v-show="item.selected" 
                class="vt-multiselect__item-selected"
                >
                <span class="vt-multiselect__item-text">{{ item.text }}</span>
                <DeleteItem class="vt-multiselect__unselect-item" @click="item.selected=false;"/>              
            </span>
            </template>
        </div>
        <span tabindex="0" 
            class="vt-multiselect__chevron"
            v-on:click="()=>{isOpen=!isOpen}" >
            <ChebronDown v-if="!isOpen" />  
            <ChebronUp v-if="isOpen" />
        </span>
        <div tabindex="0"  class="vt-multiselect__all"
            v-show="isOpen">
            <template 
                v-for="(item, index) in allItems">
            <span 
                :class="{'vt-multiselect__item-available--selected':item.selected}" 
                class="vt-multiselect__item-available"
                @click="()=>{item.selected = !item.selected; }"
                >{{ item.text }}</span>
            </template>
        </div>
    </div>
</template>

<style>
    .vt-multiselect {
        display: grid;
        grid-template-areas: "selected open" "all all";
        justify-items: stretch;
        position: relative;
        border: 1px solid var(--vt-border-color);
        border-radius: var(--vt-border-radius);
        line-height: 1.0;

        grid-template-rows: auto 1fr; 
        grid-template-columns: 1fr auto;
        &:focus-within{
            outline: 1px solid blue; outline-offset: 1px;
        }

        .vt-multiselect__selected{
            display: flex;
            gap: 0.2rem;
            grid-area: selected;
            flex: 1 1 auto;
            overflow: hidden;
            padding: 0.2rem;
        }

        .vt-multiselect__item-selected{
            display: inline-flex;
            position: relative;
            flex: 1 0 auto;
            align-items: center;
            justify-content: space-between;
            /* border: 1px solid var(--vt-accent-color); */
            border: 1px solid var(--vt-border-color);
            border-radius: var(--vt-border-radius);

            & .vt-multiselect__item-text{
                white-space: nowrap;
                height: 100%;
                padding: 0 0.2rem;
            }

            & .vt-multiselect__unselect-item{
                display: inline-block;
                flex: 0 0 18px;
                height: 100%;
                width: 18px;
                border-width: 1px;
                border-left-style: solid;
                border-color: var(--vt-border-color);
                border-radius: 0 var(--vt-border-radius) var(--vt-border-radius) 0;
                cursor: pointer;
                &:hover{
                    background-color: var(--vt-hover-bg-color);
                }
            }
        }

        .vt-multiselect__chevron {
            display: grid;
            align-content: center;
            justify-content: center;
            grid-area: open;
            font-size: 1.2em;
            flex: 0 0 24px;
            border-left: 1px solid var(--vt-border-color);
            border-radius: 0 var(--vt-border-radius) var(--vt-border-radius) 0;
            cursor: pointer;
            &:hover{
                background-color: var(--vt-hover-bg-color);
            }
        }

        .vt-multiselect__all {
            display: flex;
            gap: 0.2rem;
            flex-wrap: wrap;
            justify-items: start;
            grid-area: all;
            padding: 0.2em;
            border-top: 1px solid var(--vt-border-color);
            cursor: pointer;

            & .vt-multiselect__item-available{
                padding: 0.2em;
                border-width: 1px;
                border-style: solid;
                border-color: var(--vt-border-color);
                border-radius: var(--vt-border-radius);
                &:hover{
                    background-color: var(--vt-hover-bg-color);
                }
            }
            & .vt-multiselect__item-available--selected{
                border-color: var(--vt-accent-color);
                color: var(--vt-accent-color);
                text-shadow: 0 0 2px rgba(40,40,40,0.2);
            }
        }


    }
    
</style>