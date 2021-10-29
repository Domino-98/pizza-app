<template>
  <AppNav />

  <div
    class="
      bg-header-img bg-no-repeat bg-cover
      hero
      bg-opacity-40
      relative
      h-screen
      flex
      items-center
      justify-center
    "
  >
    <div
      class="
        bg-blend-overlay
        absolute
        top-0
        bottom-0
        w-full
        h-full
        bg-black
        opacity-50
      "
    ></div>
    <header class="absolute">
      <h1 class="text-4xl uppercase mb-12 bold tracking-wider text-white">
        Najlepsza pizza w mieście
      </h1>
      <router-link
        class="
          uppercase
          border-4 border-orange-500
          text-white text-3xl
          px-5
          py-3
          rounded-xl
          bg-orange-500
          hover:bg-orange-400 hover:border-orange-400
          transition
        "
        :to="{
          path: 'menu',
          hash: '#menu',
        }"
      >
        Sprawdź menu / Zamów online
      </router-link>
    </header>
  </div>
</template>

<script>
import AppNav from "./Nav.vue";

export default {
  name: "Header",
  components: {
    AppNav,
  },
};
</script>

<style>
.bg-header-img {
  clip-path: polygon(100% 0, 100% 85%, 50% 97.5%, 0 85%, 0 0);
}
</style>
