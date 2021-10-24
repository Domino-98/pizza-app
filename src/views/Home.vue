<template>
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
      bg-blend-lighten
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
      <button
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
      >
        Sprawdź menu / Zamów online
      </button>
    </header>
  </div>
  <h1 class="text-4xl mt-14 uppercase">Najczęściej zamawiane</h1>
  <div class="flex justify-center items-center mt-10 mb-10 items-stretch">
    <app-product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></app-product-item>
  </div>
</template>

<script>
import AppProductItem from "../components/ProductItem.vue";

export default {
  name: "Home",
  components: {
    AppProductItem,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          img: "capricciosa.jpg",
          name: "Capricciosa",
          toppings: [
            "Sos pomidorowy",
            "Mozarella",
            "Szynka",
            "Pieczarki",
            "Karczochy",
          ],
          price: 28,
          priceMd: 34,
          priceLg: 40,
          selectWindow: false,
        },
        {
          id: 2,
          img: "margherita.jpg",
          name: "Margherita",
          toppings: ["Sos pomidorowy", "Mozarella", "Oliwa"],
          price: 20,
          priceMd: 26,
          priceLg: 32,
          selectWindow: false,
        },
        {
          id: 3,
          img: "neapolitan.jpg",
          name: "Neapolitańska",
          toppings: ["Sos pomidorowy", "Mozarella", "Pomidory", "Bazylia"],
          price: 26,
          priceMd: 32,
          priceLg: 38,
          selectWindow: false,
        },
      ],
    };
  },
};
</script>

<style></style>
