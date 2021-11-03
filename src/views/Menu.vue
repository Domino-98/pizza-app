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
        @open-modal="openModal"
      ></app-product-item>
    </section>
    <AppPizzaMaker @open-modal="openModal" />
  </main>
  <transition name="modal-fade">
    <AddProductModal
      v-if="showModal"
      :pizza="pizza"
      @close-modal="closeModal"
    />
  </transition>
</template>

<script>
import AppProductItem from "../components/ProductItem.vue";
import AppPizzaMaker from "../components/PizzaMaker.vue";
import AddProductModal from "../components/AddProductModal.vue";

export default {
  name: "Menu",
  components: {
    AppProductItem,
    AppPizzaMaker,
    AddProductModal,
  },
  data() {
    return {
      showModal: false,
      pizza: {},
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
  methods: {
    openModal(openModal, pizza) {
      this.showModal = openModal;
      this.pizza = pizza;
    },
    closeModal(closeModal) {
      this.showModal = closeModal;
    },
  },
};
</script>

<style>
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
