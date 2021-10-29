<template>
  <main class="container mx-auto px-10 mt-16">
    <h1 id="menu" class="text-4xl mb-8 border-b-2 border-orange-500 inline">
      MENU
    </h1>
    <section class="flex justify-center mt-10 items-stretch flex-wrap mb-16">
      <app-product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></app-product-item>
    </section>

    <AppPizzaMaker />
  </main>
</template>

<script>
import AppProductItem from "../components/ProductItem.vue";
import AppPizzaMaker from "../components/PizzaMaker.vue";

export default {
  name: "Menu",
  components: {
    AppProductItem,
    AppPizzaMaker,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          img: "pizza-capricciosa.jpg",
          name: "Capricciosa",
          toppings: [
            "Sos pomidorowy",
            "Mozarella",
            "Szynka",
            "Pieczarki",
            "Karczochy",
          ],
          priceS: 24,
          priceM: 33,
          priceL: 42,
          selectWindow: false,
        },
        {
          id: 2,
          img: "pizza-margherita.jpg",
          name: "Margherita",
          toppings: ["Sos pomidorowy", "Mozarella", "Oliwa"],
          priceS: 19,
          priceM: 26,
          priceL: 33,
          selectWindow: false,
        },
        {
          id: 3,
          img: "pizza-neapolitan.jpg",
          name: "Neapolitańska",
          toppings: ["Sos pomidorowy", "Mozarella", "Pomidory", "Bazylia"],
          priceS: 21,
          priceM: 28,
          priceL: 36,
          selectWindow: false,
        },
        {
          id: 4,
          img: "pizza-hawaii.jpg",
          name: "Hawajska",
          toppings: [
            "Sos pomidorowy",
            "Mozarella",
            "Ananas",
            "Oregano",
            "Szynka",
          ],
          priceS: 24,
          priceM: 33,
          priceL: 42,
          selectWindow: false,
        },
        {
          id: 5,
          img: "pizza-vege.jpg",
          name: "Wegetariańska",
          toppings: [
            "Sos pomidorowy",
            "Mozarella",
            "Pomidory",
            "Bazylia",
            "Brokuł",
            "Czosnek",
            "Czerwona cebula",
            "Papryka",
          ],
          priceS: 27,
          priceM: 37,
          priceL: 48,
          selectWindow: false,
        },
        {
          id: 6,
          img: "pizza-chicken.jpg",
          name: "Z kurczakiem",
          toppings: [
            "Sos pomidorowy",
            "Mozarella",
            "Pomidory",
            "Kurczak",
            "Brokuł",
          ],
          priceS: 24,
          priceM: 33,
          priceL: 42,
          selectWindow: false,
        },
      ],
    };
  },
};
</script>

<style></style>
