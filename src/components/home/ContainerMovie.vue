<template>
  <div class="containerMovie">
    <div v-if="listMovie.length">
      {{ listMovie }}
    </div>
    <div v-else>
      <NotFoundMovie/>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import NotFoundMovie from "../containerMovie/NotFoundMovie.vue";
const props = defineProps({
  listMovie: { type: Array, default: [] },
});
</script>
<style scoped>
.containerMovie {
  padding: 30px 0px;
}
</style>
