<template>
  <nav
    class="
      fixed
      w-full
      flex
      justify-between
      items-center
      h-20
      uppercase
      text-white
      bg-black bg-opacity-60
      z-10
    "
  >
    <h1 class="ml-10 text-4xl font-dancing-script">
      <a href="#" class="cursor-pointer">Pizza App</a>
    </h1>
    <ul class="flex items-center tracking-wide">
      <li class="mr-5">
        <router-link
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          to="/"
          >Strona główna</router-link
        >
      </li>
      <li class="mr-5" active-class="border-b-2 border-orange-500">
        <router-link
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          to="/menu"
          >Menu</router-link
        >
      </li>
      <li class="mr-5">
        <router-link
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          :to="{
            path: 'about',
            hash: '#about',
          }"
          >O nas</router-link
        >
      </li>
      <li class="mr-5">
        <router-link
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          to="/contact"
          >Kontakt</router-link
        >
      </li>
      <li class="mr-5">
        <a class="cursor-pointer hover:text-orange-500 transition" href="#"
          >Konto</a
        >
      </li>
      <li class="mr-10">
        <router-link
          active-class="text-orange-500"
          class="relative cursor-pointer hover:text-orange-500 transition"
          to="/cart"
          ><fa icon="shopping-cart" class="text-2xl" />
          <div
            class="
              absolute
              -right-3
              -bottom-3
              rounded-full
              bg-orange-500
              text-white
              w-5
              h-5
              text-xs
              flex
              items-center
              justify-center
            "
          >
            1
          </div></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style></style>
