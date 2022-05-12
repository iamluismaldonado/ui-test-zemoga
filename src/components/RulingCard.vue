<script setup>
const props = defineProps({
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: Object,
});
</script>

<template>
  <div class="ruling-card rectangle row" style="">
    <div class="column ruling-card-image" style="">
      <img :src="props.picture" />
    </div>
    <div class="column">
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
</template>

<style>
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
  width: 1100px;
  height: 170px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: url("src/assets/img/Rectangle.png");
  margin-bottom: 16px;
}

.rectangle {
  left: 4.15%;
  right: 80.4%;
  top: 100%;
  bottom: -620.21%;

  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.0001) 0%,
    #888888 19.79%,
    #666666 50%,
    rgba(51, 51, 51, 0.6) 71.88%
  );
}

.ruling-card-image {
  width: 267px;
  height: 170px;
  left: 0%;
  right: 75.73%;
  top: 0%;
  bottom: 0%;
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
</style>