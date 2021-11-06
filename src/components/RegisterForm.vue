<template>
  <form class="mt-14 flex flex-col w-60" @submit.prevent>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="name"
        type="text"
        name="name"
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
        placeholder="Nazwa"
      />
      <label
        for="name"
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
        >Nazwa</label
      >
    </div>
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
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="confirm_password"
        type="password"
        name="confirm_password"
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
        placeholder="POtwierdź hasło"
      />
      <label
        for="confirm_password"
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
        >Potwierdź hasło</label
      >
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="phone"
        type="number"
        name="phone"
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
        placeholder="Numer telefonu"
      />
      <label
        for="phone"
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
        >Numer telefonu</label
      >
    </div>
    <div class="mb-3">
      <input
        id="tos"
        type="checkbox"
        name="tos"
        class="mb-0.5 mr-1 form-checkbox h-4 w-4 text-orange-400 rounded-md"
      />
      <label for="tos" class="text-xs"
        >Zgadzam się z
        <a href="#" class="text-orange-500">Warunkami użytkowania</a> i
        <a href="#" class="text-orange-500">Polityką prywatności</a></label
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
      Zarejestruj się
    </button>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>
