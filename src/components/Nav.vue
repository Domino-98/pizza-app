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
      bg-black bg-opacity-70
      z-10
    "
  >
    <h1 class="ml-10 text-4xl font-dancing-script">
      <a href="#" class="cursor-pointer">Pizza App</a>
    </h1>
    <ul
      class="
        tracking-wide
        fixed
        lg:flex
        lg:items-center
        lg:top-0
        lg:bg-transparent
        lg:w-auto
        lg:justify-end
        lg:pb-0
        lg:static
      "
      :class="
        openMenu
          ? 'block w-full text-center pb-6 top-20 bg-black bg-opacity-70'
          : 'hidden'
      "
    >
      <li class="py-1.5 lg:py-0 lg:mr-5">
        <router-link
          active-class="border-b-2 border-orange-500"
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          to="/"
          @click.prevent="openMenu = false"
          >Strona główna</router-link
        >
      </li>
      <li
        class="py-1.5 lg:py-0 lg:mr-5"
        active-class="border-b-2 border-orange-500"
      >
        <router-link
          active-class="border-b-2 border-orange-500"
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          :to="{
            path: 'menu',
            hash: '#menu',
          }"
          @click.prevent="openMenu = false"
          >Menu</router-link
        >
      </li>
      <li class="py-1.5 lg:py-0 lg:mr-5">
        <router-link
          active-class="border-b-2 border-orange-500"
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          :to="{
            path: 'about',
            hash: '#about',
          }"
          @click.prevent="openMenu = false"
          >O nas</router-link
        >
      </li>
      <li class="py-1.5 lg:py-0 lg:mr-5">
        <router-link
          active-class="border-b-2 border-orange-500"
          class="cursor-pointer pb-1 hover:text-orange-500 transition"
          :to="{
            path: 'contact',
            hash: '#contact',
          }"
          @click.prevent="openMenu = false"
          >Kontakt</router-link
        >
      </li>
      <li class="py-1.5 lg:py-0 lg:mr-5">
        <a
          class="cursor-pointer hover:text-orange-500 transition"
          href="#"
          @click.prevent="toggleAuthModal(), (openMenu = false)"
          >Konto</a
        >
      </li>
      <li class="py-1.5 lg:py-0 lg:mr-10">
        <router-link
          active-class="text-orange-500"
          class="relative cursor-pointer hover:text-orange-500 transition"
          :to="{
            path: 'cart',
            hash: '#cart',
          }"
          @click.prevent="openMenu = false"
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
            {{ getProductsAmount }}
          </div></router-link
        >
      </li>
    </ul>
    <!-- Hamburger icon -->
    <div class="justify-center mr-5 block lg:hidden">
      <div class="sm:max-w-xl">
        <nav x-data="{ openMenu: false }">
          <button
            class="
              text-gray-200
              w-10
              h-10
              relative
              focus:outline-none
              transform
              scale-150
            "
            @click="openMenu = !openMenu"
          >
            <span class="sr-only">Open main menu</span>
            <div
              class="
                block
                w-5
                absolute
                left-1/2
                top-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
              "
            >
              <span
                aria-hidden="true"
                class="
                  block
                  absolute
                  h-0.5
                  w-5
                  bg-current
                  transform
                  transition
                  duration-500
                  ease-in-out
                "
                :class="{
                  'rotate-45': openMenu,
                  ' -translate-y-1.5': !openMenu,
                }"
              ></span>
              <span
                aria-hidden="true"
                class="
                  block
                  absolute
                  h-0.5
                  w-5
                  bg-current
                  transform
                  transition
                  duration-500
                  ease-in-out
                "
                :class="{ 'opacity-0': openMenu }"
              ></span>
              <span
                aria-hidden="true"
                class="
                  block
                  absolute
                  h-0.5
                  w-5
                  bg-current
                  transform
                  transition
                  duration-500
                  ease-in-out
                "
                :class="{
                  '-rotate-45': openMenu,
                  ' translate-y-1.5': !openMenu,
                }"
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Nav",
  data() {
    return {
      openMenu: false,
    };
  },
  computed: {
    ...mapGetters(["getProductsAmount"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>
