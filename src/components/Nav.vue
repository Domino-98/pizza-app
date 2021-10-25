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
      <a href="/">Pizza App</a>
    </h1>
    <ul class="flex items-center tracking-wide">
      <li class="mr-5 border-b-2 border-orange-500">
        <a class="cursor-pointer hover:text-orange-500 transition" href="/"
          >Strona główna</a
        >
      </li>
      <li class="mr-5">
        <a class="cursor-pointer hover:text-orange-500 transition" href="menu"
          >Menu</a
        >
      </li>
      <li class="mr-5">
        <a class="cursor-pointer hover:text-orange-500 transition" href="about"
          >O nas</a
        >
      </li>
      <li class="mr-5">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="contact"
          >Kontakt</a
        >
      </li>
      <li class="mr-5">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="account"
          >Konto</a
        >
      </li>
      <li class="mr-10">
        <a
          class="relative cursor-pointer hover:text-orange-500 transition"
          href="basket"
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
          </div></a
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
