<template>
  <div
    class="
      relative
      flex flex-col
      mx-5
      w-1/5
      bg-white
      pb-5
      rounded-md
      justify-between
    "
  >
    <img
      alt=""
      class="object-cover h-64 rounded-t-md"
      :src="'/src/assets/img/' + product.img"
    />
    <h2 class="text-2xl py-2">{{ product.name }}</h2>
    <p class="text-xs">
      <span v-for="topping in product.toppings" :key="topping"
        >{{ topping }},
      </span>
    </p>
    <p class="mt-2 text-lg">{{ product.price }} zł</p>
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
      @click="openSelection(product)"
    >
      Dodaj do koszyka
      <fa v-if="product.selectWindow" icon="caret-up" class="text-xl" />
      <fa v-else icon="caret-down" class="text-xl" />
    </button>
    <div
      v-if="product.selectWindow"
      class="absolute -bottom-32 bg-white w-full shadow-xl"
    >
      <ul class="w-full">
        <li>
          <a
            href="#"
            class="
              flex
              justify-between
              py-2
              px-4
              hover:bg-orange-300
              transition
            "
          >
            25cm <span>{{ product.price }}zł</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              justify-between
              py-2
              px-4
              hover:bg-orange-300
              transition
            "
          >
            32cm <span>{{ product.priceMd }}zł</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              justify-between
              py-2
              px-4
              hover:bg-orange-300
              transition
            "
          >
            45cm <span>{{ product.priceLg }}zł</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  // eslint-disable-next-line vue/require-prop-types
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    openSelection(product) {
      product.selectWindow = !product.selectWindow;
    },
  },
};
</script>

<style></style>
