<template>
  <footer class="w-full bg-gray-700 text-white px-20 pt-16 pb-12 mt-20">
    <div class="flex justify-between items-center">
      <div class="flex-auto">
        <h1 class="text-4xl font-dancing-script">PIZZA APP</h1>
        <p class="mt-5">Copyright &copy; by Dominik Buczek</p>
      </div>
      <div class="flex-auto">
        <h2 class="text-xl mb-3 uppercase">Kontakt</h2>
        <ul>
          <li>Rzeszów, ul. słoneczna 5</li>
          <li>555-555-555</li>
          <li>pizza-app@example.com</li>
        </ul>
        <ul class="flex justify-center mt-3">
          <li class="mx-2">
            <a href="#"
              ><fa
                :icon="['fab', 'facebook']"
                class="text-3xl hover:text-orange-400"
            /></a>
          </li>
          <li class="mx-2">
            <a href="#"
              ><fa
                :icon="['fab', 'instagram']"
                class="text-3xl hover:text-orange-400"
            /></a>
          </li>
        </ul>
      </div>
      <div class="flex-auto">
        <form action="" class="flex flex-col items-center">
          <label for="newsletter" class="text-lg uppercase"
            >Subskrybuj nasz newsletter</label
          >
          <input
            id="newsletter"
            class="mt-3 py-1 px-2 text-black w-1/2"
            type="email"
            name="newsletter"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            class="
              bg-orange-400
              hover:bg-orange-500
              transition
              text-white
              w-1/2
              py-1
              mt-3
            "
          >
            Subskrybuj
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
