<template>
  <section class="navbar">
    <div>
      <Logo />
    </div>
    <div class="navbar__info"> 
        <img :src="picture"/>
        <p>{{name}}</p>
        <div>
            <el-button @click="handleLogout">Log Out</el-button>
        </div>
    </div>
  </section>
</template>
<script setup>
import Logo from "../components/common/Logo.vue";
import {useStore} from "vuex";
import {computed, onMounted} from 'vue';
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();
const store = useStore(); 

let name = computed(() => {
    return store.state.user.user.name
})
let picture = computed(() => {
    return store.state.user.user.picture
})

const handleLogout = () =>
  logout({
    returnTo: window.location.origin,
  });


</script>
<style lang="scss" scoped>
@import "../assets/variable";
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  position: fixed;
  top:0;
  width: 100%;
  z-index: 100;

  background: $vt-c-primary-black;
  -webkit-box-shadow: 0px 8px 28px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 8px 28px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 8px 28px -8px rgba(0, 0, 0, 0.75);

  &__info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
    P {
        color:$vt-c-white
    }
    img{
        width: 45px;
        border-radius: 100%;
        border: 2px solid $vt-c-second-red;
    }
  }
}


</style>
