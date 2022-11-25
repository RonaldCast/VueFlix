<template>
  <div class="containerMovie">
    <div v-if="listMovie.length" class="containerMovie__list">
      <template v-for="movie in listMovie" :key="movie.id">
        <CardMovie
          :title="movie.title"
          :img="movie.images['Poster Art'].url"
          :program-type="movie.programType"
          :release-year="movie.releaseYear"
        />
      </template>
    </div>
    <div v-else>
      <NotFoundMovie />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import NotFoundMovie from "../containerMovie/NotFoundMovie.vue";
import CardMovie from "../containerMovie/CardMovie.vue";
const props = defineProps({
  listMovie: { type: Array, default: [] },
});
</script>
<style lang="scss" scoped>
.containerMovie {
  padding: 30px 0px;
  &__list {
    display: flex;
    gap:20px;
    flex-wrap: wrap;
    justify-content: center;

  }
}
</style>
