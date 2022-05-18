<script setup>
import { ref, computed } from "vue";
import { useBreakpoints } from "../helpers.js";
import { useMainStore } from "../store.js";
import RulingCard from "@/components/RulingCard.vue";
import SquareRulingCard from "@/components/SquareRulingCard.vue";
import CustomSelect from "@/components/CustomSelect.vue";

var selected = ref("List");
const main = useMainStore();
const { type } = useBreakpoints();

const people = computed(() => {
  return main.getAllPeople;
});

const percentageVotesList = computed(() => {
  return main.getPetcentageVotes;
});

function changeView(option) {
  selected.value = option;
}

function voteNow(vote) {
  main.addVote(vote);
}
</script>

<template>
  <main role="main">
    <div class="ruling">
      <span class="ruling-title">Previous Rulings</span>
      <CustomSelect class="select-ruling" :options="['List', 'Grid']" :default="'List'" @input="(option) => changeView(option)" />
    </div>
    <div v-if="selected === 'List' && type !== 'xs'">
      <ul>
        <li v-for="(p, index) in people" :key="p.name">
          <RulingCard :id="index" :name="p.name" :picture="p.picture" :description="p.description" :category="p.category"
                      :lastUpdated="p.lastUpdated"
                      :percentagePositiveVotes="percentageVotesList.percentagePositiveVotesList[index]"
                      :percentageNegativeVotes="percentageVotesList.percentageNegativeVotesList[index]"
                      @voteNow="(vote) => voteNow(vote)">
          </RulingCard>
        </li>
      </ul>
    </div>
    <div class="grid" v-else>
      <div class="horizontal-scroll" v-for="(p, index) in people" :key="p.name">
        <SquareRulingCard :id="index" :name="p.name" :picture="p.picture" :description="p.description" :category="p.category"
                          :lastUpdated="p.lastUpdated"
                          :percentagePositiveVotes="percentageVotesList.percentagePositiveVotesList[index]"
                          :percentageNegativeVotes="percentageVotesList.percentageNegativeVotesList[index]"
                          @voteNow="(vote) => voteNow(vote)">
        </SquareRulingCard>
      </div>
    </div>
  </main>
</template>

<style>
.ruling {
  margin-bottom: 32px;
}
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
  .horizontal-scroll {
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
    grid-template-columns: 385px 384px;
    row-gap: 21px;
    column-gap: 10px;
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
    row-gap: 27px;
    column-gap: 0px;
  }
}
</style>