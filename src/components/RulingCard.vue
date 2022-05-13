<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: Object,
});

const split = ref(props.picture.split(".")[0]);
const finalUrl = ref("-small.png");

const pictureUrl = computed(() => {
  return (
    'background: url("src/assets/img/' + split.value + finalUrl.value + '")'
  );
});
</script>

<template>
  <div class="ruling-card">
    <div class="ruling-card-image" :style="pictureUrl">
      <div class="row rectangle">
        <div class="column" style="margin-left: 267px;">
          <span class="row name">{{ props.name }}</span>
          <span class="row description">{{ props.description }}</span>
        </div>
        <div class="column">
          <span class="row date">1 month ago in Entertainment</span>
          <div class="row align">
            <button class="thumbs-up">
              <img src="src/assets/img/thumbs-up.svg" alt="thumbs up" />
            </button>
            <button class="thumbs-down">
              <img src="src/assets/img/thumbs-down.svg" alt="thumbs up" />
            </button>
            <button class="vote-now-button">Vote Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class=" row thumbs-gauge" style="height: 54px;">
      <div class="column thumbs-gauge--up">
        <img src=" src/assets/img/thumbs-up.svg" style="margin-left: 16px; height: 22.5px; width: 22.5px;">
        <span class="numbers">25.5%</span>
      </div>
      <div class="column thumbs-gauge--down">
        <img src="src/assets/img/thumbs-down.svg"
             style="float: right; margin-right: 16px; margin-left: 16px; height: 22.5px; width: 22.5px">
        <span class="numbers" style="float: right;">74.5%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.align {
  margin-top: 32px;
  margin-right: 16px;
}

.row {
  display: flex;
}

.column {
  display: block;
}

.date {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  color: #ffffff;
}

.thumbs-down {
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 45px;
  height: 45px;

  background: #fbbd4a;
}

.thumbs-up {
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 45px;
  height: 45px;
  background: rgba(60, 187, 180, 0.8);
}

.vote-now-button {
  width: 135px;
  height: 45px;
  box-sizing: border-box;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
}
.ruling-card {
  margin-bottom: 16px;
}

.rectangle {
  width: 1100px;
  height: 170px;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.0001) 10%,
    #888888 23.79%,
    #666666 50%,
    rgba(51, 51, 51, 0.6) 71.88%
  );
}

.ruling-card-image {
  width: 267px;
  height: 170px;
}

.gradient {
  width: 200px;
  height: 50px;
  background-image: linear-gradient(to right, blue, lightblue);
  background-attachment: fixed;
}

.name {
  height: 63px;
  left: 23.55%;
  right: 33.27%;
  top: 0px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 63px;
  /* identical to box height, or 175% */

  color: #ffffff;
}

.description {
  left: 0%;
  right: 1.39%;
  top: 0%;
  bottom: -22.22%;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}

.thumbs-gauge {
  margin-top: -54px;
}

.thumbs-gauge--up {
  background-color: rgba(60, 187, 180, 0.6);
  margin-right: auto;
  width: 100%;
}

.thumbs-gauge--down {
  background-color: rgba(249, 173, 29, 0.6);
  margin-left: auto;
  width: 100%;
}

.numbers {
  width: 76px;
  height: 32px;
  left: 49.5px;
  top: calc(50% - 32px / 2);

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 32px;

  color: #ffffff;
}
</style>