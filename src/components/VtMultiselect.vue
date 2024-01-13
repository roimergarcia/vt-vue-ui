<script setup>
import { ref } from 'vue';
import ChebronDown from '~icons/mdi/chevron-down'
import ChebronUp from '~icons/mdi/chevron-up'

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
    <div class="vt-multiselect" >
        <div tabindex="0" class="vt-multiselect__selected">
            <template 
                v-for="(item, index) in allItems">
            <span v-show="item.selected"
                class="vt-multiselect__item-selected"
                >{{ item.value }}</span>
            </template>
        </div>
        <span class="vt-multiselect__chevron">
            <ChebronDown  v-if="!isOpen" />  
            <ChebronUp v-if="isOpen" />
        </span>
    </div>
</template>

<style>
    .vt-multiselect {
        display: flex;
        justify-items: stretch;
        position: relative;
        border: 1px solid var(--vt-border-color);
        border-radius: var(--vt-border-radius);
        &:focus-within{
            outline: 1px solid blue; outline-offset: 1px;
        }

        .vt-multiselect__selected{
            display: flex;
            gap: 0.2rem;
            flex: 1 1 auto;
            overflow: hidden;
            padding: 0.2rem;
        }
        .vt-multiselect__item-selected{
            display: inline-block;
            flex: 1 0 auto;
            padding: 0 0.2rem;
            border: 1px solid var(--vt-accent-color);
            border-radius: var(--vt-border-radius);
            height: 1.5em;
        }

        .vt-multiselect__chevron {
            display: grid;
            align-content: center;
            justify-content: center;
            font-size: 1.2em;
            flex: 0 0 24px;
            border-left: 1px solid var(--vt-border-color);
            border-radius: 0 var(--vt-border-radius)  var(--vt-border-radius) 0;
            cursor: pointer;
            &:hover{
                background-color: var(--vt-hover-bg-color);
            }  
        }

    }
    
</style>