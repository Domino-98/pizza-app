<template>
  <main class="container mx-auto mt-8">
    <div class="flex items-center">
      <img
        src="../assets/img/home-img.jpg"
        class="home-img w-1/2"
        alt="Pizza z pieca"
      />
      <div
        class="
          bg-white
          home-text
          self-stretch
          flex flex-col
          items-center
          justify-center
          px-8
        "
      >
        <h2 class="text-4xl uppercase font-dancing-script mb-5">
          Pizza prosto z pieca!
        </h2>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          quisquam harum unde autem ab porro doloribus vel odio. Laborum
          nesciunt commodi, asperiores assumenda incidunt necessitatibus
          dignissimos reiciendis aspernatur quas.
        </p>
      </div>
    </div>
    <h1 class="text-4xl mt-20 uppercase">Najczęściej zamawiane</h1>
    <div class="flex justify-center mt-10 mb-10 items-stretch">
      <app-product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></app-product-item>
    </div>
  </main>
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

<style>
.home-img {
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
}
.home-text {
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
}
</style>
