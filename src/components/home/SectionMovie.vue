<template>
  <div class="sectionMovie">
    <div class="sectionMovie__filter">

      <FilterMovie @send-data="filterMovie" />
    </div>
    <ContainerMovie class="sectionMovie__movies" :list-movie="movies" />
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
  return store.state.movie.dataMovie.listMovies
    .filter((x) => {
      return (
        x.title.toUpperCase().includes(filter.name?.toUpperCase()) &&
        (filter.typeFilm ? x.programType == filter.typeFilm : true) &&
        (filter.year ? x.releaseYear == filter.year?.getFullYear() : true)
      );
    })
    .sort((a, b) => {
      if (filter.orderBy) {
        if (isNaN(a[filter.orderBy])) {
          return a[filter.orderBy].toUpperCase() <
            b[filter.orderBy].toUpperCase()
            ? -1
            : 1;
        }
        return a[filter.orderBy] - b[filter.orderBy];
      }
      return 0;
    });
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
  position: relative;

  &__filter{
    position: absolute;
    top:-60px; 
    left:35px;
    right: 35px;
    
  }
  &__movies{
    margin-top:50px; 
    @media (max-width: 1000px) {
      margin-top:110px; 
  }
    
  }
}
</style>
