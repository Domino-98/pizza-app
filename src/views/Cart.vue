<template>
  <main class="container mx-auto px-10 mt-16">
    <section class="flex justify-center items-center flex-col">
      <h1 id="cart" class="text-4xl mb-8 border-b-2 border-orange-500">
        KOSZYK
      </h1>

      <div class="w-full max-w-screen-lg flex shadow-lg">
        <div class="bg-white w-2/3 px-8 py-8">
          <h3 class="text-2xl text-left block border-b-2 border-gray-300 pb-2">
            Produkty
          </h3>

          <div class="grid grid-cols-4 mt-2">
            <h4 class="text-xl">Produkt</h4>

            <h4 class="text-xl">Ilość</h4>

            <h4 class="text-xl">Cena</h4>

            <h4 class="text-xl">Suma</h4>
          </div>

          <h4
            v-if="products.length === 0"
            class="text-xl text-orange-500 animate-bounce mt-5"
          >
            Brak produktów w koszyku
          </h4>

          <div
            v-for="product in products"
            :key="product.name"
            class="grid grid-cols-4 content-center mt-2"
          >
            <div class="relative text-l group">
              <img
                :src="'/src/assets/img/' + product.img"
                class="mt-5 mb-3 w-1/2 mx-auto rounded-lg"
              />
              <h5 class="text-l">{{ product.name }}</h5>
              <h5 class="text-l">
                {{ product.size }} ({{
                  product.size === "S"
                    ? "25cm"
                    : product.size === "M"
                    ? "32cm"
                    : "45cm"
                }})
              </h5>
              <ul
                class="
                  absolute
                  bg-gray-200
                  rounded-lg
                  z-10
                  mx-auto
                  top-0
                  left-0
                  right-0
                  w-9/12
                  p-3
                  text-xs
                  opacity-0
                  group-hover:opacity-100
                  shadow-lg
                  transition
                "
              >
                <li v-for="topping in product.toppings" :key="topping">
                  {{ topping }}
                </li>
              </ul>
              <button
                class="
                  absolute
                  text-xl
                  right-0
                  top-5
                  text-gray-700
                  hover:text-red-600
                "
                title="Usuń produkt"
                @click="removeProduct(product)"
              >
                &#10006;
              </button>
            </div>

            <div class="custom-number-input h-10 w-20 place-self-center">
              <div
                class="
                  flex flex-row
                  h-10
                  w-full
                  rounded-lg
                  relative
                  bg-transparent
                  mt-1
                "
              >
                <button
                  id="decrementBtn"
                  class="
                    bg-gray-200
                    text-gray-600
                    hover:text-gray-700 hover:bg-gray-300
                    h-full
                    w-20
                    rounded-l
                    cursor-pointer
                    outline-none
                  "
                  @click.prevent="decrement(product)"
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  v-model="product.amount"
                  type="number"
                  min="1"
                  max="6"
                  required
                  class="
                    outline-none
                    focus:outline-none
                    text-center
                    w-full
                    bg-gray-200
                    font-semibold
                    text-md
                    hover:text-black
                    focus:text-black
                    md:text-basecursor-default
                    flex
                    items-center
                    text-gray-700
                    ==
                  "
                  name="custom-input-number"
                />
                <button
                  id="incrementBtn"
                  class="
                    bg-gray-200
                    text-gray-600
                    hover:text-gray-700 hover:bg-gray-300
                    h-full
                    w-20
                    rounded-r
                    cursor-pointer
                  "
                  @click.prevent="increment(product)"
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>

            <div class="text-l place-self-center">{{ product.price }}zł</div>

            <div class="text-l place-self-center">
              {{ getProductTotalPrice(product) }}zł
            </div>
          </div>
        </div>
        <div class="bg-gray-100 w-1/3 px-8 py-8 flex flex-col justify-between">
          <h3 class="text-2xl block border-b-2 border-gray-300 pb-2">
            Podsumowanie
          </h3>
          <h4 class="text-xl mt-2 mb-2">
            Cena całkowita: <span class="font-bold">{{ getTotalPrice }}zł</span>
          </h4>
          <div v-if="products.length > 0" class="flex flex-col items-center">
            <label class="text-xl" for="coupon">Kod rabatowy</label>
            <input
              id="coupon"
              type="text"
              class="mt-1 px-2 py-1 w-32 border-2 border-gray-300 rounded-lg"
            />
            <button
              class="
                mb-5
                mt-2
                hover:bg-gray-300 hover:text-black
                py-1
                px-3
                bg-gray-400
                text-white
                transition
              "
            >
              Zatwierdź kod
            </button>

            <button
              class="
                text-white text-xl
                bg-orange-500
                hover:bg-orange-400
                transition
                py-1
                px-3
              "
              type="button"
            >
              Przejdź do płatności
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    products() {
      return this.$store.state.cart.products;
    },

    ...mapGetters(["getTotalPrice"]),
  },
  methods: {
    decrement(product) {
      product.amount > 1 ? product.amount-- : false;
    },
    increment(product) {
      product.amount < 6 ? product.amount++ : false;
    },
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
    getProductTotalPrice(product) {
      return product.price * product.amount;
    },
  },
};
</script>
