<template>
  <div class="sectionMovie">
    <FilterMovie @send-data="filterMovie" />
    <ContainerMovie :list-movie="listMovieFilter" />
  </div>
</template>
<script setup>
import FilterMovie from "../home/FilterMovie.vue";
import ContainerMovie from "../home/ContainerMovie.vue";

import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const listMovieFilter = ref([]);

onMounted(() => {
  listMovieFilter.value = store.state.movie.listMovie;
});

const filterMovie = (filter) => {
  console.log(filter);
};
</script>

<style lang="scss" scoped>
@import "../../assets/variable";
.sectionMovie {
  background: $vt-c-primary-black;
  padding: 20px 35px;
}
</style>
