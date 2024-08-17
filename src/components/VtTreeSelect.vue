<script setup>
import { computed, reactive, ref } from 'vue'


const props = defineProps({
  modelValue: {
    type: Array,
    default: []
  },
  isRoot: {
    type: Boolean,
    default: true
  },
  isOpen: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue']);
const allItems = ref(props.modelValue);

const isRoot = props.isRoot;

const thisIsOpen = ref(props.isOpen);

</script>

<template>

  <ul :class='{ "vt-TreeSelect": isRoot }'>
    <template v-for="(item, index) in allItems" :key="index">

      <template v-if="item.children && item.children?.length > 0">
        <li
          :class='{ "vt-TreeSelect__item": true, "vt-TreeSelect__item--open": thisIsOpen, "vt-TreeSelect__item--closed": !thisIsOpen }'>

          <div>
            <span class='vt-TreeSelect__selector' @click.stop="(e) => {
              const parent = e.target.closest('.vt-TreeSelect__item');
              parent.classList.toggle('vt-TreeSelect__item--open')
              parent.classList.toggle('vt-TreeSelect__item--closed')
            }"></span>
            <label><input type="checkbox" v-model="item.selected" @change='(e) => {
              const thisItem = e.target;
              const isSelected = thisItem.checked;
              const allDescendants = thisItem.closest("li").querySelectorAll("ul > li input[type=\"checkbox\"]");

              for (const descendant of allDescendants) {
                if (descendant !== thisItem) {
                  descendant.checked = isSelected
                }
              }
            }' />{{ item.title }}</label>
          </div>

          <VtTreeSelect v-model="item.children" :isRoot="false"></VtTreeSelect>

        </li>
      </template>

      <template v-else>
        <li class="vt-TreeSelect__item">
          <label>
            <input type="checkbox" :cheched="item.selected" />{{ item.title }}
          </label>
        </li>
      </template>

    </template>
  </ul>

</template>

<style>
@import '../assets/global.css';

.vt-TreeSelect {
  padding-left: 0.2em;
}

.vt-TreeSelect__item {
  list-style-type: none;
}

li.vt-TreeSelect__item.vt-TreeSelect__item--closed>ul {
  display: none;
}

li.vt-TreeSelect__item.vt-TreeSelect__item--open>ul {
  display: block;
}

li.vt-TreeSelect__item>div>.vt-TreeSelect__selector {
  display: inline-block;

  &::before {
    display: inline-block;
    width: 20px;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }
}

li.vt-TreeSelect__item.vt-TreeSelect__item--closed>div>.vt-TreeSelect__selector::before {
  content: "▶";
}

li.vt-TreeSelect__item.vt-TreeSelect__item--open>div>.vt-TreeSelect__selector::before {
  content: "▼";
}
</style>
