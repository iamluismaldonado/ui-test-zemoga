<script setup>
import { ref, computed } from "vue";
import { useSplitString, useDateToToday, useCapitalize } from "../helpers.js";
const props = defineProps({
  id: Number,
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  percentagePositiveVotes: Number,
  percentageNegativeVotes: Number,
  votes: Object,
});

const thumbsUpButton = ref(false);
const thumbsDownButton = ref(false);
const voteTextButton = ref("Vote Now");
const enableToVote = ref(true);
const voteMessage = ref("Thank you for your vote!");
const buttonPressed = ref("border: 2px solid #ffffff");

const voteNowDisabled = computed(() => {
  return thumbsUpButton.value || thumbsDownButton.value;
});

const dateAndCategoryInfo = computed(() => {
  return (
    useDateToToday(props.lastUpdated) + " in " + useCapitalize(props.category)
  );
});

const widthForThumbsUp = computed(() => {
  return "width:" + props.percentagePositiveVotes + "%;";
});

const widthForThumbsDown = computed(() => {
  return "width:" + props.percentageNegativeVotes + "%;";
});

const winingThumbs = computed(() => {
  return props.percentagePositiveVotes >= props.percentageNegativeVotes
    ? "background: rgba(60, 187, 180, 0.8);"
    : "background: #FBBD4A;";
});
const backgroundImage = computed(() => {
  return (
    'background: url("/src/assets/img/' +
    props.picture +
    '"); no-repeat; background-size: 100%;'
  );
});

const emit = defineEmits(["voteNow"]);

function thumbsUp() {
  thumbsUpButton.value = true;
  thumbsDownButton.value = false;
}

function thumbsDown() {
  thumbsDownButton.value = true;
  thumbsUpButton.value = false;
}
function voteNow() {
  emit(
    "voteNow",
    thumbsUpButton.value
      ? { id: props.id, thumbs: "up" }
      : { id: props.id, thumbs: "down" }
  );
  voteTextButton.value = "Vote Again";
  enableToVote.value = false;
}
function voteAgain() {
  enableToVote.value = true;
  voteTextButton.value = "Vote Now";
  thumbsDownButton.value = false;
  thumbsUpButton.value = false;
}
</script>

<template>
  <div class="square-ruling-card row" :style="backgroundImage">
    <div class="row ruling-card-thumb" :style="winingThumbs">
      <img :src="props.percentagePositiveVotes >= props.percentageNegativeVotes ? '/src/assets/img/thumbs-up.svg' 
          : '/src/assets/img/thumbs-down.svg'" />
    </div>
    <div class="column rectangle">
      <div class="column square-ruling-card-info">
        <div class="row name">
          {{ useSplitString(props.name, 22) }}
        </div>
        <div class="row description">
          {{ useSplitString(props.description, 63) }}
        </div>
        <div class="row date">
          {{ enableToVote ? dateAndCategoryInfo :  voteMessage}}
        </div>
        <div class="row square-ruling-card-actions">
          <div class="row" :style="!enableToVote ? 'visibility: hidden;' : ''">
            <div class="column">
              <button class="thumbs-up" :style="thumbsUpButton ? buttonPressed: ''" @click="thumbsUp()">
                <img src="/src/assets/img/thumbs-up.svg" alt="thumbs up">
              </button>
            </div>
            <div class="column">
              <button class="thumbs-down" :style="thumbsDownButton ? buttonPressed: ''" @click="thumbsDown()">
                <img src="/src/assets/img/thumbs-down.svg" alt="thumbs down">
              </button>
            </div>
          </div>
          <div class="column">
            <button :disabled="!voteNowDisabled" class="vote-now"
                    @click="enableToVote ? voteNow() : voteAgain()">{{ voteTextButton }}</button>
          </div>
        </div>
      </div>
      <div class=" row thumbs-gauge">
        <div class="row thumbs-gauge--up" :style="widthForThumbsUp">
          <img class="thumbs-gauge--up-icon" src="/src/assets/img/thumbs-up.svg">
          <span class="numbers">{{ percentagePositiveVotes }}%</span>
        </div>
        <div class="row thumbs-gauge--down" :style="widthForThumbsDown">
          <span class="numbers">{{ percentageNegativeVotes }}%</span>
          <img class="thumbs-gauge--down-icon" src="/src/assets/img/thumbs-down.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media all and (max-width: 767px) {
  .square-ruling-card {
    height: 300px;
    width: 300px;
    position: relative;
    white-space: normal;
  }
  .thumbs-gauge {
    height: 36px;
    width: 300px;
    bottom: 0;
    position: absolute;
  }
  .square-ruling-card-actions {
    justify-content: end;
  }
  .name {
    height: 74px;
    bottom: 170px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: flex-end;

    color: #ffffff;
  }
  .rectangle {
    position: absolute;
    bottom: 0;
    width: 300px;
    height: 80%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  .square-ruling-card-info {
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 4px;
  }
  .ruling-card-thumb {
    background: #fbbd4a;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 57%;
    z-index: 1;
  }
  .description {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    margin-top: 8px;
  }
  .date {
    height: 17px;
    right: 36px;
    bottom: 98px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    justify-content: right;

    color: #ffffff;
    margin-top: 8px;
    margin-bottom: 8px;
  }
}

@media all and (min-width: 768px) {
  .square-ruling-card {
    height: 372px;
    width: 372px;
    position: relative;
  }
  .thumbs-gauge {
    height: 36px;
    width: 100%;
    bottom: 0;
    position: absolute;
  }

  .square-ruling-card-actions {
    justify-content: right;
    margin-top: 16px;
  }

  .name {
    height: 74px;
    bottom: 170px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: flex-end;

    color: #ffffff;
  }
  .rectangle {
    position: absolute;
    bottom: 0;
    height: 70%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  .square-ruling-card-info {
    padding-left: 10%;
    padding-right: 10%;
  }
  .ruling-card-thumb {
    background: #fbbd4a;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 50%;
    z-index: 1;
  }
  .description {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
  .date {
    height: 17px;
    right: 36px;
    bottom: 98px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    justify-content: right;

    color: #ffffff;
    margin-top: 16px;
  }
}

@media all and (min-width: 1100px) {
  .square-ruling-card {
    height: 348px;
    width: 348px;
    position: relative;
  }

  .thumbs-gauge {
    height: 36px;
    width: 100%;
    bottom: 0;
    position: absolute;
  }

  .square-ruling-card-actions {
    justify-content: right;
    margin-top: 16px;
  }

  .name {
    height: 74px;
    bottom: 170px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: flex-end;

    color: #ffffff;
  }
  .rectangle {
    position: absolute;
    bottom: 0;
    height: 70%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  .square-ruling-card-info {
    padding-left: 10%;
    padding-right: 10%;
  }
  .ruling-card-thumb {
    background: #fbbd4a;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 50%;
    z-index: 1;
  }
  .description {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
  .date {
    height: 17px;
    right: 36px;
    bottom: 98px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    justify-content: right;

    color: #ffffff;
    margin-top: 16px;
  }
}
.thumbs-gauge--up-icon {
  margin-left: 16px;
  margin-right: 8px;
}

.thumbs-gauge--down-icon {
  float: right;
  margin-right: 16px;
  margin-left: 8px;
}
.numbers {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}
.thumbs-gauge--up {
  background-color: rgba(60, 187, 180, 0.6);
  margin-right: auto;
  align-items: center;
  display: flex;
}

.thumbs-gauge--down {
  background-color: rgba(249, 173, 29, 0.6);
  margin-left: auto;
  align-items: center;
  justify-content: end;
}
.vote-now {
  width: 107px;
  height: 38px;
  left: 4.3%;
  right: 4.3%;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
  box-sizing: border-box;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  cursor: pointer;
}

.thumbs-up {
  height: 30px;
  width: 30px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: rgba(60, 187, 180, 0.8);
  margin-right: 8px;
  margin-top: 4px;
  border: 2px solid #ffffff;
  cursor: pointer;
  border: none;
}
.thumbs-down {
  height: 30px;
  width: 30px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #fbbd4a;
  margin-right: 8px;
  margin-top: 4px;
  border: none;
  cursor: pointer;
  border: none;
}
</style>