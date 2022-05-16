<script setup>
import { ref } from "vue";
import data from "../assets/data.json";
import RulingCard from "@/components/RulingCard.vue";
import SquareRulingCard from "@/components/SquareRulingCard.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import { useBreakpoints } from "../helpers.js";

var selected = ref("List");
const people = ref(data.data);

function changeView(option) {
  selected.value = option;
}

const { width, type } = useBreakpoints();
</script>

<template>
  <main role="main">
    <div style="margin-bottom: 32px;">
      <span class="ruling-title">Previous Rulings</span>
      <span>{{ type }}</span>
      <span>{{ width }}</span>
      <CustomSelect class="select-ruling" :options="['List', 'Grid']" :default="'List'" @input="(option) => changeView(option)" />
    </div>
    <div class="list" v-if="selected === 'List' && type !== 'xs'">
      <ul>
        <li v-for="p in people" :key="p.name">
          <RulingCard :name="p.name" :picture="p.picture" :description="p.description"></RulingCard>
        </li>
      </ul>
    </div>
    <div class="grid" v-else>
      <div class="test" v-for="p in people" :key="p.name">
        <SquareRulingCard :name="p.name" :picture="p.picture" :description="p.description">
        </SquareRulingCard>
      </div>
    </div>
  </main>
</template>

<style>
.ruling-title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  color: #464646;
}

@media all and (max-width: 767px) {
  .ruling-title {
    font-size: 24px;
    line-height: 29px;
  }
  .select-ruling {
    display: none;
  }
  .grid {
    overflow: auto;
    white-space: nowrap;
  }
  .test {
    display: inline-block;
    margin-right: 12px;
  }
}

@media all and (min-width: 768px) {
  .ruling-title {
    font-size: 24px;
    line-height: 29px;
  }
  .select-ruling {
    float: right;
    display: inline;
  }
  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
  }
}

@media all and (min-width: 1100px) {
  .ruling-title {
    font-size: 45px;
    line-height: 54px;
  }
  .select-ruling {
    margin-top: 10px;
    float: right;
    display: inline;
  }
  .grid {
    display: grid;
    grid-template-columns: 375px 375px 348px;
  }
}
</style>