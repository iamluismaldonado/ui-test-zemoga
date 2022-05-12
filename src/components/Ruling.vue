<script setup>
import { ref } from "vue";
import data from "../assets/data.json";

const selected = ref("");
const people = ref(data.data);
</script>

<template>
  <main role="main">
    <span class="ruling-title">Previous Rulings</span>
    <select class="select-ruling" v-model="selected">
      <option disabled value="List">List</option>
      <option>List</option>
      <option>Grid</option>
    </select>
    <ul>
      <li v-for="p in people" :key="p.name">
        {{ p.name }}
      </li>
    </ul>
  </main>
</template>

<style>
.ruling-title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 45px;
  line-height: 54px;
  color: #464646;
}

.select-ruling {
  width: 173px;
  height: 36px;
  border: 2px solid #333333;

  margin-top: 10px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 100%;
  text-align: center;
  color: #333333;
  float: right;
}
</style>