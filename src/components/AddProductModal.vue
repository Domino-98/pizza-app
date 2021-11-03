<template>
  <div
    class="
      fixed
      inset-0
      bg-gray-500 bg-opacity-50
      flex
      justify-center
      items-center
    "
  >
    <div class="bg-white rounded-lg">
      <div class="w-96 border-t-8 rounded-lg">
        <div class="w-full pt-5 px-4 flex flex-col items-center">
          <h4 class="text-xl">Pomyślnie dodano do koszyka</h4>
          <img
            :src="'/src/assets/img/' + pizza.img"
            class="w-36 mt-5 mb-3 rounded-lg"
          />
          <div class="flex flex-col items-center">
            <h5 class="text-l font-bold">{{ pizza.name }}</h5>
            <ul class="flex flex-wrap flex-row w-9/12 justify-center">
              <li v-for="(topping, i) in pizza.toppings" :key="topping">
                {{ topping }}
                <!-- eslint-disable-next-line vue/no-parsing-error -->
                {{ i < pizza.toppings.length - 1 ? ", " : "" }}&nbsp;
              </li>
            </ul>

            <p><span class="font-bold">Rozmiar: </span>{{ pizza.size }}</p>
            <p class="text-xl">{{ pizza.price }}zł</p>
            <p>x{{ pizza.amount }}</p>
          </div>
        </div>
      </div>

      <div class="p-4 flex space-x-4">
        <button
          href="#"
          class="
            w-1/2
            px-4
            py-3
            text-center
            bg-gray-100
            text-gray-500
            hover:bg-gray-200 hover:text-black
            font-bold
            rounded-lg
            text-sm
            transition
          "
          @click="closeModal"
        >
          Kontynuuj zakupy
        </button>
        <router-link
          :to="{
            path: 'cart',
            hash: '#cart',
          }"
          href="#"
          class="
            w-1/2
            px-4
            py-3
            bg-orange-500
            hover:bg-orange-400
            text-white text-center
            rounded-lg
            font-bold
            text-sm
            transition
          "
          >Przejdź do koszyka</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProductModal",
  props: {
    pizza: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style></style>
