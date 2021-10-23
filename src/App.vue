<script>
import AppNav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    AppNav,
  },
  data() {
    return {
      msg: "Pizza app",
    };
  },
};
</script>

<template>
  <AppNav />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
