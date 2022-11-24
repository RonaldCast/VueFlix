<template>
  <NavBar />
  <main class="main">
    <BannerMovie 
    :picture="bannerMovie.images['Poster Art'].url"
    :title="bannerMovie.title"
    :description="bannerMovie.description"
    :program-type="bannerMovie.programType"
    :release-year="bannerMovie.releaseYear"
    />
  </main>
</template>

<script setup>
import NavBar from "../layout/NavBar.vue";
import BannerMovie from "../components/home/BannerMovie.vue";
import { computed, onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useStore } from "vuex";

const { user } = useAuth0();
const store = useStore();

onMounted(() => {
  store.commit("user/SET_USER_DATA", user);
});

let bannerMovie = computed(() => {
  return store.state.movie.bannerMovie
})

</script>

<style >
  .main {
    margin-top:80px
  }
</style>

