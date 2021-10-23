<script>
import { mapState } from "vuex";
import backgroundUrl from "../assets/img/home-img.jpg";

export default {
  name: "Home",
  data() {
    return {
      backgroundUrl,
    };
  },
  computed: {
    ...mapState({
      name: (state) => state.auth.name,
    }),
  },
};
</script>

<template>
  <div
    class="bg-no-repeat bg-cover hero relative h-screen-nav"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  />

  <h1>HOME</h1>
  <p>{{ name }}</p>
</template>

<style></style>
