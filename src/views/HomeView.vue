<template>
  <main>
   <NavBar/>


  </main>
</template>

<script setup>
// import { useAuth0 } from "@auth0/auth0-vue";
import {computed, onMounted} from 'vue';
import NavBar from "../layout/NavBar.vue"
import { useAuth0 } from "@auth0/auth0-vue";
import {useStore} from "vuex";

 const {  user } = useAuth0();
 const store = useStore();

onMounted(() => {
    store.commit("user/SET_USER_DATA",user)
})

</script>
