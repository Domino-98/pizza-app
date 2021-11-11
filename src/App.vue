<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import AuthModal from "./components/AuthModal.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AuthModal,
  },
  data() {
    return {
      msg: "Pizza app",
    };
  },
};
</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
  <AuthModal />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

body {
  background-color: #ebebeb;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
