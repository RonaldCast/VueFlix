<template>
  <section class="filterMovie">
    <div class="filterMovie__control">
      <label>Search</label>
      <el-input placeholder="Search by name" v-model="filter.name"></el-input>
    </div>
    <div>
      <label>Type Film</label>
      <div>
        <el-select v-model="filter.typeFilm" placeholder="Select">
          <el-option
            v-for="film in typeFilms"
            :key="film.value"
            :label="film.name"
            :value="film.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <label>Sort By</label>
      <div>
        <el-select v-model="filter.orderBy" placeholder="Select">
          <el-option
            v-for="film in typeSort"
            :key="film.value"
            :label="film.name"
            :value="film.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <span class="demonstration">Year</span>
      <div>
        <el-date-picker
          v-model="filter.year"
          type="year"
          placeholder="Select Year"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <div>
        <el-button
          class="filterMovie__button"
          type="danger"
          @click="clearFilter"
          >Clear Filter</el-button
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, watch, defineEmits } from "vue";
import { typeFilms, typeSort } from "../../utils/constants/index";

const emits = defineEmits(["sendData"]);
const filter = reactive({
  name: "",
  orderBy: "",
  typeFilm: "",
  year: null,
});

const clearFilter = () => {
  filter.name = "";
  filter.orderBy = "";
  filter.typeFilm = "";
  filter.year = null;
};

watch(filter, () => {
  emits("sendData", filter);
});
</script>

<style lang="scss" scoped>
@import "../../assets/variable";
.filterMovie {
  background: lighten($color: $vt-c-primary-black, $amount: 4);
  padding: 30px;
  color: $vt-c-white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 33px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -8px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 7px;
  > div:last-child {
    width: 100%;
    display: flex;
    align-items: flex-end;
    > div {
      width: 100%;
    }
  }
  &__button {
    width: 100%;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr repeat(2, 1fr);
  }

  > div:nth-child(4) {
    @media (max-width: 1000px) {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }

  > div:nth-child(5) {
    @media (max-width: 1000px) {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
