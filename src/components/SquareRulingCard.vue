<script setup>
import { computed } from "vue";
import { cutString } from "../helpers.js";
const props = defineProps({
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: Object,
});
const backgroundImage = computed(() => {
  return 'background: url("src/assets/img/' + props.picture + '")';
});
</script>

<template>
  <div class="square-ruling-card row" :style="backgroundImage">
    <div class="row ruling-card-thumb">
      <img src=" src/assets/img/thumbs-up.svg" alt="thumbs up" />
    </div>
    <div class="column rectangle">
      <div class="column square-ruling-card-info">
        <div class="row name">
          {{ cutString(props.name, 22) }}
        </div>
        <div class="row description">
          {{ cutString(props.description, 63) }}
        </div>
        <div class="row date">
          1 month ago in Entertainment
        </div>
        <div class="row square-ruling-card-actions">
          <div class="column">
            <button class="thumbs-up">
              <img src="src/assets/img/thumbs-up.svg" alt="thumbs up">
            </button>
          </div>
          <div class="column">
            <button class="thumbs-down">
              <img src="src/assets/img/thumbs-down.svg" alt="thumbs down">
            </button>
          </div>
          <div class="column">
            <button class="vote-now">Vote Now</button>
          </div>
        </div>
      </div>
      <div class=" row thumbs-gauge">
        <div class="row thumbs-gauge--up">
          <img class="thumbs-gauge--up-icon" src=" src/assets/img/thumbs-up.svg">
          <span class="numbers">25.5%</span>
        </div>
        <div class="row thumbs-gauge--down">
          <span class="numbers">74.5%</span>
          <img class="thumbs-gauge--down-icon" src="src/assets/img/thumbs-down.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbs-gauge--up-icon {
  margin-left: 16px;
  margin-right: 8px;
}

.thumbs-gauge--down-icon {
  float: right;
  margin-right: 16px;
  margin-left: 8px;
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
.numbers {
  width: 51px;
  height: 22px;
  left: 33px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
}
.thumbs-gauge--up {
  background-color: rgba(60, 187, 180, 0.6);
  margin-right: auto;
  width: 100%;
  align-items: center;
  display: flex;
}

.thumbs-gauge--down {
  background-color: rgba(249, 173, 29, 0.6);
  margin-left: auto;
  width: 100%;
  align-items: center;
  justify-content: end;
}
.row {
  display: flex;
}

.column {
  display: block;
}
.square-ruling-card {
  height: 348px;
  width: 348px;
  margin-bottom: 27px;
  position: relative;
}

.thumbs-gauge {
  height: 36px;
  width: 100%;
  bottom: 0;
  position: absolute;
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
}

.date {
  width: 279px;
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

.description {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #ffffff;
}

.square-ruling-card-info {
  padding-left: 10%;
  padding-right: 10%;
}

.square-ruling-card-actions {
  justify-content: right;
  margin-top: 16px;
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
</style>