<template>
  <main>
   Home
   {{user}}
  </main>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

 const {  user } = useAuth0();
</script>
