<template>
  <main class="container mx-auto mt-16">
    <section class="flex justify-center items-center flex-col">
      <h1
        id="contact"
        class="text-3xl lg:text-4xl mb-8 border-b-2 border-orange-500"
      >
        KONTAKT
      </h1>
      <div class="flex flex-col md:flex-row">
        <div class="m-5 md:mr-8 lg:mr-16 self-center mb-10 md:mb-0">
          <ul class="flex flex-col items-start">
            <li class="my-2 text-base lg:text-xl text-left">
              <fa
                :icon="['fa', 'map-marker-alt']"
                class="text-2xl lg:text-3xl mr-3 text-gray-700"
              ></fa
              >Rzeszów, ul. słoneczna 5
            </li>
            <li class="my-2 text-base lg:text-xl text-left">
              <fa
                :icon="['fa', 'phone']"
                class="text-2xl lg:text-3xl mr-3 text-gray-700"
              ></fa
              >555-555-555
            </li>
            <li class="my-2 text-base lg:text-xl text-left">
              <fa
                :icon="['fa', 'envelope']"
                class="text-2xl lg:text-3xl mr-3 text-gray-700"
              ></fa
              >pizza-app@example.com
            </li>
          </ul>
          <fa :icon="['fa', 'clock']" class="mt-10 text-2xl text-gray-700"></fa>
          <h3 class="text-base lg:text-2xl uppercase mb-2">Godziny otwarcia</h3>
          <ul>
            <li>Pon-Wt: 8:00 - 22:00</li>
            <li>Sobota, Niedziela: 11:00 - 22:00</li>
          </ul>
        </div>
        <form
          action=""
          class="
            w-80
            lg:w-96
            flex flex-col
            lg:m-5
            md:ml-5
            lg:ml-16
            px-10
            py-7
            bg-gray-50
            shadow-lg
          "
        >
          <h2 class="text-xl lg:text-2xl uppercase">Skontaktuj się z nami</h2>
          <input
            id="name"
            type="text"
            name="name"
            class="my-3 py-1 px-2 border-2 focus:border-orange-400 outline-none"
            placeholder="Nazwa"
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            class="my-3 py-1 px-2 border-2 focus:border-orange-400 outline-none"
            placeholder="Email"
            required
          />

          <textarea
            id="message"
            name="message"
            cols="30"
            rows="5"
            class="my-3 py-1 px-2 border-2 focus:border-orange-400 outline-none"
            placeholder="Wiadomość"
            required
          ></textarea>

          <button
            type="submit"
            class="
              mt-3
              text-xl
              py-1
              bg-orange-400
              hover:bg-orange-500
              text-white
              transition
            "
          >
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Contact",
};
</script>
