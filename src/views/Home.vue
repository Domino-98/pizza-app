<template>
  <main class="container mx-auto mt-8">
    <section class="flex items-center">
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
    </section>
    <h1 class="text-4xl mt-20 uppercase">Najczęściej zamawiane</h1>
    <section class="flex justify-center mt-10 items-stretch">
      <app-product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @open-modal="openModal"
      ></app-product-item>
    </section>
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
import AddProductModal from "../components/AddProductModal.vue";

export default {
  name: "Home",
  components: {
    AppProductItem,
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
          priceS: 28,
          priceM: 34,
          priceL: 40,
          selectWindow: false,
        },
        {
          id: 2,
          img: "pizza-margherita.jpg",
          name: "Margherita",
          toppings: ["Sos pomidorowy", "Mozarella", "Oliwa"],
          priceS: 20,
          priceM: 26,
          priceL: 32,
          selectWindow: false,
        },
        {
          id: 3,
          img: "pizza-neapolitan.jpg",
          name: "Neapolitańska",
          toppings: ["Sos pomidorowy", "Mozarella", "Pomidory", "Bazylia"],
          priceS: 26,
          priceM: 32,
          priceL: 38,
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
.home-img {
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
}
.home-text {
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
}
</style>
