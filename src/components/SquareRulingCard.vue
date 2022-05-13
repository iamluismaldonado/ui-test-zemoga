<script setup>
import { computed } from "vue";
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

function cutString(name, number) {
  if (name.length > number) {
    return name.substring(number, length) + "...";
  }
  return name;
}
</script>

<template>
  <div class="square-ruling-card" :style="backgroundImage">
    <div class="rectangle" style="">
      <div class="column" style="padding-left: 10%; padding-right: 10%">
        <div class="row name" style="">
          {{ cutString(props.name, 22) }}
        </div>
        <div class="row description">
          {{ cutString(props.description, 63) }}
        </div>
        <div class="row date">
          1 month ago in Entertainment
        </div>
        <div class="row" style="justify-content: right;">
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
    </div>
    <div class=" row thumbs-gauge" style="height: 36px;">
      <div class="column thumbs-gauge--up">
        <img src=" src/assets/img/thumbs-up.svg" style="margin-left: 16px;">
        <span class="numbers">25.5%</span>
      </div>
      <div class="column thumbs-gauge--down">
        <img src="src/assets/img/thumbs-down.svg" style="float: right; margin-right: 16px;">
        <span class="numbers" style="float: right;">74.5%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

.thumbs-gauge--down {
  background-color: rgba(249, 173, 29, 0.6);
  margin-left: auto;
  width: 100%;
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
}
.thumbs-down {
  height: 30px;
  width: 30px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #fbbd4a;
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

.rectangle {
  padding-top: 147px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}
</style>