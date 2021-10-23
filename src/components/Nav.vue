<script>
export default {
  name: "Nav",
};
</script>

<template>
  <nav
    class="w-full flex justify-between items-center bg-yellow-50 h-20 uppercase"
  >
    <h1 class="ml-10 text-3xl">
      Pizza App
    </h1>
    <ul class="flex tracking-wide">
      <li class="mr-5 border-b-2 border-orange-500">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="home"
        >Strona główna</a>
      </li>
      <li class="mr-5">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="about"
        >O nas</a>
      </li>
      <li class="mr-5">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="menu"
        >Menu</a>
      </li>
      <li class="mr-5">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="contact"
        >Kontakt</a>
      </li>
      <li class="mr-10">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="account"
        >Konto</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

h1 {
  font-family: "Dancing Script", cursive;
}
</style>
