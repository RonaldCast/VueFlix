<template>
  <form class="loginForm">
    <div class="loginForm__logo">
      <Logo />
      <p>Enjoying What Watch</p>
    </div>
    <h1>Log in</h1>
    <div class="loginForm__buttonContainer">
      <el-button @click="goLogin"> Log in</el-button>
    </div>
  </form>
</template>
<script setup>
import Logo from "../common/Logo.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const goLogin = () => {
  loginWithRedirect({
    prompt: "login",
    appState: {
      target: "/home",
    },
  });
}

</script>
<style lang="scss" scoped>
@import "../../assets/variable";
.loginForm {
  padding: 20px;
  border-radius: 5px;
  background: $vt-c-primary-black;
  width: 100%;
  max-width: 400px;
  -webkit-box-shadow: 0px 0px 26px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 26px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 26px 2px rgba(0, 0, 0, 0.75);
  > h1 {
    font-size: 1.2rem;
    color: $vt-c-white;
  }
  &__logo {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid lighten($color: $vt-c-primary-black, $amount: 6);
    > p {
      font-size: 1.1rem;
      color: lighten($color: $vt-c-third-black, $amount: 4);
      margin-top: 13px;
      text-align: center;
    }
  }

  &__buttonContainer {
    margin-top: 20px;
    width: 100%;
    .el-button {
      width: 100%;
      background: $vt-c-second-red;
      border: 1px solid $vt-c-second-red;
      color: $vt-c-white;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: darken($color: $vt-c-second-red, $amount: 10);
        border: 1px solid darken($color: $vt-c-second-red, $amount: 10);
      }
    }
  }
}
</style>
