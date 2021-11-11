<template>
  <main class="container mx-auto mt-4 md:mt-8">
    <section class="flex flex-col xs:flex-row items-center mx-5 md:mx-10">
      <img
        src="../assets/img/home-img.jpg"
        class="home-img h-72 xs:h-80 lg:h-96 w-9/12 xs:w-1/2"
        alt="Pizza z pieca"
      />
      <div
        class="
          bg-white
          home-text
          -mt-16
          xs:mt-0
          py-20
          xs:h-auto
          w-9/12
          xs:self-stretch
          flex flex-col
          items-center
          justify-center
          px-8
          flex-1
        "
      >
        <h2 class="text-3xl lg:text-4xl uppercase font-dancing-script md:mb-3">
          Pizza prosto z pieca!
        </h2>
        <p class="hidden md:block text-l lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
            class="hidden lg:block"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            unde.</span
          >
        </p>
      </div>
    </section>
    <h1 class="text-2xl md:text-3xl lg:text-4xl mt-10 sm:mt-20 uppercase">
      Najczęściej zamawiane
    </h1>
    <section
      class="
        flex flex-col
        items-center
        sm:flex-row
        justify-center
        mt-5
        sm:mt-10 sm:items-stretch
      "
    >
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
  clip-path: polygon(0 0, 50% 15%, 100% 0, 100% 85%, 50% 100%, 0 85%);
}

@media (min-width: 500px) {
  .home-img {
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  }
}
@media (min-width: 1024px) {
  .home-img {
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
  }
}

.home-text {
  clip-path: polygon(0 0, 50% 15%, 100% 0, 100% 85%, 50% 100%, 0 85%);
}
@media (min-width: 500px) {
  .home-text {
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  }
}
@media (min-width: 1024px) {
  .home-text {
    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%);
  }
}
</style>
