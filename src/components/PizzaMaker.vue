<template>
  <h2 class="text-3xl inline uppercase">Skomponuj własną pizze!</h2>
  <form
    class="bg-white max-w-lg py-5 mx-auto mt-8 rounded-xl shadow-xl"
    @submit.prevent="addToCart"
  >
    <h3 class="text-2xl uppercase">Rozmiar pizzy</h3>
    <div class="flex justify-center mt-2 w-full">
      <div class="flex items-center px-2">
        <input
          id="size-s"
          v-model="pizza.size"
          value="S"
          type="radio"
          name="size"
          class="mr-1 h-4 w-4 hidden"
          @change="updateTotalPrice('S')"
        />

        <label for="size-s" class="flex items-center cursor-pointer text-l">
          <span
            class="
              w-6
              h-6
              inline-block
              mr-2
              rounded-full
              border border-gray-300
              flex-no-shrink
            "
          ></span>
          Mała (25 cm)</label
        >
      </div>

      <div class="flex items-center px-2">
        <input
          id="size-m"
          v-model="pizza.size"
          value="M"
          type="radio"
          name="size"
          class="mr-1 h-4 w-4 hidden"
          @change="updateTotalPrice('M')"
        />

        <label for="size-m" class="flex items-center cursor-pointer text-l">
          <span
            class="
              w-6
              h-6
              inline-block
              mr-2
              rounded-full
              border border-gray-300
              flex-no-shrink
            "
          ></span>
          Średnia (32 cm)</label
        >
      </div>

      <div class="flex items-center px-2">
        <input
          id="size-l"
          v-model="pizza.size"
          value="L"
          type="radio"
          name="size"
          class="mr-1 h-4 w-4 hidden"
          @change="updateTotalPrice('L')"
        />

        <label for="size-l" class="flex items-center cursor-pointer text-l">
          <span
            class="
              w-6
              h-6
              inline-block
              mr-2
              rounded-full
              border border-gray-300
              flex-no-shrink
            "
          ></span>
          Duża (45 cm)</label
        >
      </div>
    </div>
    <h4 class="text-xl uppercase mt-5">Składniki</h4>
    <div v-if="pizza.size === 'S'" class="w-56 mx-auto">
      <div
        v-for="topping in toppings"
        :key="topping.name"
        class="mt-1 flex justify-between"
      >
        <div class="flex items-center">
          <label class="inline-flex items-center" :for="topping.name">
            <input
              :id="topping.name"
              v-model="pizza.toppings"
              type="checkbox"
              name="ingredients"
              :value="topping.name"
              class="form-checkbox h-5 w-5 text-orange-400 rounded-md"
              WW
              @change="updatePriceArray($event, topping.price)"
            /><span class="ml-2 text-gray-700">{{ topping.name }}</span>
          </label>
        </div>
        <span class="text-md">{{ topping.price }}zł</span>
      </div>
    </div>
    <div v-else-if="pizza.size === 'M'" class="w-56 mx-auto">
      <div
        v-for="topping in toppings"
        :key="topping.name"
        class="mt-1 flex justify-between"
      >
        <div class="flex items-center">
          <label class="inline-flex items-center" :for="topping.name">
            <input
              :id="topping.name"
              v-model="pizza.toppings"
              type="checkbox"
              name="ingredients"
              :value="topping.name"
              class="form-checkbox h-5 w-5 text-orange-400 rounded-md"
              @change="updatePriceArray($event, topping.price)"
            /><span class="ml-2 text-gray-700">{{ topping.name }}</span>
          </label>
        </div>
        <span class="text-md">{{ topping.price * 1.5 }}zł</span>
      </div>
    </div>
    <div v-else-if="pizza.size === 'L'" class="w-56 mx-auto">
      <div
        v-for="topping in toppings"
        :key="topping.name"
        class="mt-1 flex justify-between"
      >
        <div class="flex items-center">
          <label class="inline-flex items-center" :for="topping.name">
            <input
              :id="topping.name"
              v-model="pizza.toppings"
              type="checkbox"
              name="ingredients"
              :value="topping.name"
              class="form-checkbox h-5 w-5 text-orange-400 rounded-md"
              @change="updatePriceArray($event, topping.price)"
            />
            <span class="ml-2 text-gray-700">{{ topping.name }}</span>
          </label>
        </div>
        <span class="text-md">{{ topping.price * 2 }}zł</span>
      </div>
    </div>
    <div class="custom-number-input h-10 w-32 mx-auto mb-10 mt-3">
      <label
        for="custom-input-number"
        class="w-full text-black text-sm font-semibold uppercase"
        >Ilość
      </label>
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
          @click.prevent="decrement"
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          v-model="pizza.amount"
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
          @click.prevent="increment"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
    <div class="mt-5">
      <h5 class="text-l">
        Podstawa każdej pizzy: <span class="font-semibold"></span>Sos
        pomidorowy, Mozarella
      </h5>
      <h5 class="text-l">Ketchup + Sos czosnkowy GRATIS</h5>
      <h3 class="text-2xl mt-3">{{ totalPrice }}zł</h3>
    </div>
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
      type="submit"
    >
      Dodaj do koszyka
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PizzaMaker",
  emits: ["openModal"],
  data() {
    return {
      pizzaPrice: 0,
      totalPrice: 0,
      priceArray: [],
      pizza: {
        name: "Własna",
        img: "pizza.jpg",
        size: "S",
        price: 18,
        amount: 1,
        toppings: ["Sos pomidorowy", "Mozarella"],
      },
      toppings: [
        {
          name: "Kurczak",
          price: 3,
        },
        {
          name: "Szynka",
          price: 3,
        },
        {
          name: "Tuńczyk",
          price: 3,
        },
        {
          name: "Pomidory",
          price: 1.5,
        },
        {
          name: "Brokuł",
          price: 1.5,
        },
        {
          name: "Pieczarki",
          price: 1.5,
        },
        {
          name: "Karczochy",
          price: 1.5,
        },
        {
          name: "Ananas",
          price: 1.5,
        },
        {
          name: "Oregano",
          price: 1.5,
        },
        {
          name: "Bazylia",
          price: 1.5,
        },
        {
          name: "Czerwona cebula",
          price: 1.5,
        },
        {
          name: "Czosnek",
          price: 1.5,
        },
        {
          name: "Papryka",
          price: 1.5,
        },
        {
          name: "Oliwa",
          price: 1.5,
        },
      ],
    };
  },
  mounted() {
    this.updateTotalPrice();
  },
  methods: {
    updateTotalPrice() {
      if (this.pizza.size === "S") {
        this.pizza.price = 18;
        this.totalPrice = this.priceArray.reduce((a, b) => a + b, 0);
        this.totalPrice += this.pizza.price;
      } else if (this.pizza.size === "M") {
        this.pizza.price = 24;
        let priceArrayM = this.priceArray.map((price) => {
          return price * 1.5;
        });
        this.totalPrice = priceArrayM.reduce((a, b) => a + b, 0);
        this.totalPrice += this.pizza.price;
      } else {
        this.pizza.price = 30;
        let priceArrayL = this.priceArray.map((price) => {
          return price * 2;
        });
        this.totalPrice = priceArrayL.reduce((a, b) => a + b, 0);
        this.totalPrice += this.pizza.price;
      }

      this.pizzaPrice = this.totalPrice;
      this.totalPrice = this.pizzaPrice * this.pizza.amount;
    },
    updatePriceArray(event, price) {
      let index = this.priceArray.indexOf(price);
      event.target.checked
        ? this.priceArray.push(price)
        : this.priceArray.splice(index, 1);

      this.updateTotalPrice();
    },
    addToCart() {
      this.pizza.price = this.totalPrice;
      console.log(this.pizza);
      // Save pizza in Vuex
      this.addProduct(this.pizza);
      this.openModal();
    },
    openModal() {
      this.$emit("openModal", true, this.pizza);
    },
    decrement() {
      this.pizza.amount > 1 ? this.pizza.amount-- : false;
      this.totalPrice = this.pizzaPrice * this.pizza.amount;
    },
    increment() {
      this.pizza.amount < 6 ? this.pizza.amount++ : false;
      this.totalPrice = this.pizzaPrice * this.pizza.amount;
    },
    ...mapMutations({
      addProduct: "addProduct",
    }),
  },
};
</script>

<style>
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: orange;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #ff9100;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>
