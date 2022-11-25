<template>
  <div class="cardMovie">
    <img :src="img" :alt="title" @error="replaceImage" />
    <div class="cardMovie__info">
      <p>{{ title }}</p>
      <div>
        <el-tag type="danger" effect="dark">{{ programType }} </el-tag>
        <el-tag type="warning" effect="dark">{{ releaseYear }} </el-tag>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import imgNotFound from "../../assets/img/notFound.svg";
const props = defineProps({
  title: String,
  img: String,
  programType: String,
  releaseYear: Number,
});

const replaceImage = (event) => {
  event.target.src = imgNotFound;
};
</script>

<style lang="scss" scoped>
.cardMovie {
  width: 250px;
  height: 350px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 33px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -8px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  &__info {
    position: absolute;
    background: rgba(19, 18, 18, 0.651);
    bottom: 0;
    width: 100%;
    padding: 10px;
    transition: all 0.5s ease-in-out;

    > p {
      margin-bottom: 10px;
    }
    > div{
        display: flex;
        gap:10px
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
  }

  &:hover{
    img{
        transform: scale(2);
    }
    >.cardMovie__info{
        transform: translateY(100px);
    }
  }
}
</style>
