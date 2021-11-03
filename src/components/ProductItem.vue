<template>
  <div
    class="
      relative
      flex flex-col
      mx-5
      w-1/4
      bg-white
      pb-5
      rounded-md
      justify-between
      my-3
    "
  >
    <img
      alt="Pizza product"
      class="object-cover h-64 rounded-t-md"
      :src="'/src/assets/img/' + product.img"
    />
    <h2 class="text-2xl py-2">{{ product.name }}</h2>
    <p class="text-xs px-1">
      <span v-for="(topping, i) in product.toppings" :key="topping"
        >{{ topping
        }}<!-- eslint-disable-next-line vue/no-parsing-error -->{{
          i < product.toppings.length - 1 ? ", " : ""
        }}
      </span>
    </p>
    <p class="mt-2 text-lg">{{ product.priceS }} zł</p>
    <button
      class="
        mt-2
        px-5
        py-1
        self-center
        text-xl
        bg-transparent
        border-2 border-orange-500
        rounded-2xl
        hover:bg-orange-500 hover:text-white
        transition
      "
      @click="toggleSelection(product)"
    >
      Dodaj do koszyka
      <fa v-if="product.selectWindow" icon="caret-down" class="text-xl" />
      <fa v-else icon="caret-up" class="text-xl" />
    </button>
    <div
      v-if="product.selectWindow"
      class="absolute bottom-16 bg-white w-full shadow-xl"
    >
      <ul class="w-full">
        <li>
          <a
            class="
              flex
              justify-between
              py-2
              px-4
              hover:bg-orange-300
              transition
              cursor-pointer
            "
            @click="addToCart(product, product.priceS)"
          >
            25cm <span>{{ product.priceS }}zł</span>
          </a>
        </li>
        <li>
          <a
            class="
              flex
              justify-between
              py-2
              px-4
              hover:bg-orange-300
              transition
              cursor-pointer
            "
            @click="addToCart(product, product.priceM)"
          >
            32cm <span>{{ product.priceM }}zł</span>
          </a>
        </li>
        <li>
          <a
            class="
              flex
              justify-between
              py-2
              px-4
              hover:bg-orange-300
              transition
              cursor-pointer
            "
            @click="addToCart(product, product.priceL)"
          >
            45cm <span>{{ product.priceL }}zł</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ProductList",
  // eslint-disable-next-line vue/require-prop-types
  props: ["product"],
  emits: ["openModal"],
  data() {
    return {
      pizza: {
        name: null,
        img: null,
        size: null,
        price: null,
        amount: 1,
        toppings: [],
      },
    };
  },
  methods: {
    toggleSelection(product) {
      product.selectWindow = !product.selectWindow;
    },
    addToCart(product, price) {
      if (product.priceS === price) {
        this.pizza.size = "S";
      } else if (product.priceM === price) {
        this.pizza.size = "M";
      } else {
        this.pizza.size = "L";
      }
      this.pizza.name = product.name;
      this.pizza.img = product.img;
      this.pizza.price = price;
      this.pizza.toppings = product.toppings;
      this.toggleSelection(product);

      console.log(this.pizza);
      // Save pizza in Vuex
      this.addProduct(this.pizza);
      this.openModal();
    },
    openModal() {
      this.$emit("openModal", true, this.pizza);
    },
    ...mapMutations({
      addProduct: "addProduct",
    }),
  },
};
</script>

<style></style>
