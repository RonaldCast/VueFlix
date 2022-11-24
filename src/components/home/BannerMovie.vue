<template>
  <div class="bannerMovie">
    <div class="bannerMovie__img">
      <img :src="picture" />
    </div>
    <div class="bannerMovie__info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="tag-group">
        <el-tag class="tag" type="danger" effect="dark"
          >{{ programType }}
        </el-tag>
        <el-tag class="tag" type="warning" effect="dark"
          >{{ releaseYear }}
        </el-tag>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  picture: String,
  title: String,
  description: String,
  programType: String,
  releaseYear: Number,
});
</script>
<style lang="scss" scoped>
.bannerMovie {
  height: 80vh;
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(24, 24, 24, 0.548);
      top: 0;
      left: 0;
     
    }
  }

  &__info {
    padding: 20px;
    position: absolute;
    bottom: 150px;
    left: 80px;
    max-width: 700px;
    color: white;
    > h1 {
      margin-bottom: 24px;
    }
    > p {
      font-size: 1.1rem;
    }
    > div {
      margin-top: 20px;
      display: flex;
      gap: 10px;
    }
  }
}
</style>
