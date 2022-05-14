<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="
          selected = option;
          open = false;
          $emit('input', option);
        ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 173px;
  height: 36px;
  text-align: center;
  outline: none;
  line-height: 36px;
  border: 2px solid #333333;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
}

.custom-select .selected {
  background-color: white;
  color: #333333;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 16px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: black transparent transparent transparent;
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
</style>
