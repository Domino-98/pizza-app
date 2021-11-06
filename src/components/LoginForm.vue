<template>
  <form class="mt-14 flex flex-col w-60" @submit.prevent>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="email"
        type="email"
        name="email"
        class="
          peer
          border-b-2 border-gray-300
          bg-transparent
          mt-2
          outline-none
          focus:border-orange-400
          placeholder-transparent
          py-1
          w-full
          transition
        "
        placeholder="Email"
      />
      <label
        for="email"
        class="
          absolute
          -top-2
          pointer-events-none
          select-none
          text-gray-600 text-sm
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:top-3
          peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-sm
          transition-all
        "
        >Email</label
      >
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="password"
        type="password"
        name="password"
        class="
          peer
          border-b-2 border-gray-300
          bg-transparent
          mt-2
          outline-none
          focus:border-orange-400
          placeholder-transparent
          transition
          py-1
          w-full
        "
        placeholder="Hasło"
      />
      <label
        for="password"
        class="
          absolute
          -top-2
          pointer-events-none
          select-none
          text-gray-600 text-sm
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:top-3
          peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-sm
          transition-all
        "
        >Hasło</label
      >
    </div>
    <button
      class="
        px-5
        py-2
        text-white
        bg-orange-500
        rounded
        hover:bg-orange-400
        transition
      "
    >
      Zaloguj się
    </button>
    <a href="#" class="mt-3 text-sm">Zapomniałeś hasła?</a>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>
