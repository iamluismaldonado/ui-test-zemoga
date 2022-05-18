<script setup>
import { ref, onMounted } from 'vue';

  const props = defineProps({
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  });

const selected = ref(props.default
        ? props.default
        : props.options.length > 0
        ? props.options[0]
        : null);
const open = ref(false) ;

const emit = defineEmits(["input"]);

onMounted(() => {
  emit("input", selected.value);
});
</script>

<template>
  <div class="custom-select" :tabindex="props.tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of props.options" :key="i" @click="
          selected = option;
          open = false;
          $emit('input', option);
        ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  text-align: center;
  outline: none;
  border: 2px solid #333333;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  border: 5px solid transparent;
  border-color: black transparent transparent transparent;
  right: 1em;
  width: 0;
  height: 0;
}

.custom-select .selected {
  background-color: white;
  color: #333333;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items {
  color: #333333;
  overflow: hidden;
  position: absolute;
  background-color: white;
  border-top: 2px solid #333333;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: black;
  padding-left: 1em;
  border-bottom: 2px solid #333333;
  border-left: 2px solid #333333;
  border-right: 2px solid #333333;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: whitesmoke;
}

.selectHide {
  display: none;
}

@media all and (min-width: 768px) {
  .custom-select {
    width: 131px;
    height: 28px;
    line-height: 28px;
    font-size: 10.5px;
  }
  .custom-select .selected:after {
    top: 12px;
  }
}

@media all and (min-width: 1100px) {
  .custom-select {
    width: 173px;
    height: 36px;
    line-height: 36px;
    font-size: 13.5px;
  }
  .custom-select .selected:after {
    top: 16px;
  }
}
</style>
