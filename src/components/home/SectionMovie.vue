<template>
  <div class="sectionMovie">
    <FilterMovie @send-data="filterMovie" />
    <ContainerMovie :list-movie="movies" />
  </div>
</template>
<script setup>
import FilterMovie from "../home/FilterMovie.vue";
import ContainerMovie from "../home/ContainerMovie.vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const filter = reactive({
  name: "",
  orderBy: "",
  typeFilm: "",
  year: null,
});

const movies = computed(() => {
  return store.state.movie.dataMovie.listMovies;
});

const filterMovie = (data) => {
  filter.name = data.name;
  filter.orderBy = data.orderBy;
  filter.typeFilm = data.typeFilm;
  filter.year = data.year;
};
</script>

<style lang="scss" scoped>
@import "../../assets/variable";
.sectionMovie {
  background: $vt-c-primary-black;
  padding: 20px 35px;
  color: #fff;
}
</style>
