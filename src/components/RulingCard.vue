<script setup>
import { ref } from "vue";
import { useSplitString, useBreakpoints } from "../helpers.js";

const props = defineProps({
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: Object,
});

const split = ref(props.picture.split(".")[0]);

function getPictureUrl() {
  return type.value === "lg"
    ? 'background: url("src/assets/img/' + split.value + "-small.png" + '")'
    : 'background: url("src/assets/img/' + split.value + "-tablet.png" + '")';
}

const { type } = useBreakpoints();
</script>

<template>
  <div class="ruling-card">
    <div class="ruling-card-image" :style="getPictureUrl()">
      <div class="row rectangle">
        <div class="row ruling-card-thumb">
          <img src="src/assets/img/thumbs-up.svg" alt="thumbs up" />
        </div>
        <div class=" column ruling-card-info">
          <span class="row name">{{ type === 'md' ? useSplitString(props.name, 21) : props.name }}</span>
          <span class="row description">{{ useSplitString(props.description, 75) }}</span>
        </div>
        <div class="column ruling-card-actions">
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
</template>
<style scoped>
@media all and (min-width: 768px) {
  .rectangle {
    width: 768px;
    height: 138px;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.0001) 10%,
      #888888 23.79%,
      #666666 50%,
      rgba(51, 51, 51, 0.6) 71.88%
    );
  }
  .thumbs-gauge {
    margin-top: -36px;
    height: 36px;
    width: 768px;
  }
  .thumbs-gauge--up {
    background-color: rgba(60, 187, 180, 0.6);
    margin-right: auto;
    width: 100%;
    align-items: center;
    display: flex;
  }
  .thumbs-gauge--up-icon {
    margin-left: 16px;
    margin-right: 8px;
    height: 15px;
    width: 15px;
  }

  .thumbs-gauge--down {
    background-color: rgba(249, 173, 29, 0.6);
    margin-left: auto;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: end;
  }

  .thumbs-gauge--down-icon {
    margin-right: 16px;
    margin-left: 8px;
    height: 15px;
    width: 15px;
  }
  .numbers {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    color: #ffffff;
  }
  .name {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height, or 175% */

    color: #ffffff;
  }

  .description {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-top: 16px;

    color: #ffffff;
  }
  .date {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    float: right;
    margin-right: 16px;
    margin-top: 8px;
    color: #ffffff;
  }
  .ruling-card-info {
    margin-left: 130px;
    margin-right: 0px;
  }
  .ruling-card-image {
    width: 200px;
    height: 138px;
  }
  .ruling-card-thumb {
    background: #fbbd4a;
    height: 30px;
    width: 40px;
    justify-content: center;
    align-items: center;
  }
  .thumbs-down {
    width: 30px;
    height: 30px;
    background: #fbbd4a;
    border: none;
    margin-right: 8px;
    margin-top: 4px;
  }

  .thumbs-up {
    width: 30px;
    height: 30px;
    background: rgba(60, 187, 180, 0.8);
    border: 2px solid #ffffff;
    margin-right: 8px;
    margin-top: 4px;
  }

  .vote-now-button {
    width: 107px;
    height: 38px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #ffffff;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
}

@media all and (min-width: 1100px) {
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
  .thumbs-gauge {
    margin-top: -54px;
    height: 54px;
    width: 1100px;
  }
  .thumbs-gauge--up {
    background-color: rgba(60, 187, 180, 0.6);
    margin-right: auto;
    width: 100%;
    align-items: center;
    display: flex;
  }
  .thumbs-gauge--up-icon {
    margin-left: 16px;
    margin-right: 8px;
    height: 22.5px;
    width: 22.5px;
  }

  .thumbs-gauge--down {
    background-color: rgba(249, 173, 29, 0.6);
    margin-left: auto;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: end;
  }

  .thumbs-gauge--down-icon {
    margin-right: 16px;
    margin-left: 8px;
    height: 22.5px;
    width: 22.5px;
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
  .name {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 63px;
    /* identical to box height, or 175% */

    color: #ffffff;
  }

  .description {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 0px;
    color: #ffffff;
  }
  .date {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    float: right;
    margin-right: 16px;
    margin-top: 8px;
    color: #ffffff;
  }
  .ruling-card-info {
    margin-left: 230px;
    margin-right: 0px;
  }
  .ruling-card-image {
    width: 267px;
    height: 170px;
  }
  .ruling-card-thumb {
    background: #fbbd4a;
    height: 45px;
    width: 45px;
    justify-content: center;
    align-items: center;
  }
  .thumbs-down {
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 45px;
    height: 45px;
    background: #fbbd4a;
    border: none;
    margin-right: 4px;
    margin-top: 0px;
  }

  .thumbs-up {
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 45px;
    height: 45px;
    background: rgba(60, 187, 180, 0.8);
    border: 2px solid #ffffff;
    margin-right: 4px;
    margin-top: 0px;
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
  .ruling-card-actions {
    width: 35%;
  }
}
.align {
  margin-top: 16px;
  margin-right: 16px;
  float: right;
}

.row {
  display: flex;
}

.column {
  display: block;
}
.ruling-card {
  margin-bottom: 16px;
}
</style>