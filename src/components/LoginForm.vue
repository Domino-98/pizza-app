<template>
  <form class="mt-14 flex flex-col w-56 xs:w-72" @submit.prevent="submitForm">
    <div
      v-if="loginShowAlert"
      :class="loginAlertVariant"
      class="bg-green-500 text-white py-3 px-3 w-full mb-5"
    >
      <h5 class="text-base">{{ loginAlertMsg }}</h5>
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="email"
        v-model="email"
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
      <span v-if="v$.email.$error" class="text-sm text-red-500 mt-1 text-left">
        {{ v$.email.$errors[0].$message }}
      </span>
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="password"
        v-model="password"
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
      <span
        v-if="v$.password.$error"
        class="text-sm text-red-500 mt-1 text-left"
      >
        {{ v$.password.$errors[0].$message }}
      </span>
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
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
  name: "LoginForm",
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
      loginInSubmission: false,
      loginShowAlert: false,
      loginAlertVariant: "bg-green-500",
      loginAlertMsg: "Pomyślnie zalogowano!",
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Email jest wymagany", required),
        email: helpers.withMessage("Nieprawidłowy adres email", email),
      },
      password: {
        required: helpers.withMessage("Hasło jest wymagane", required),
      },
    };
  },
  methods: {
    // Async function
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.loginInSubmission = true;
        this.loginShowAlert = true;
        this.loginAlertVariant = "bg-blue-500";
        this.loginAlertMsg = "Proszę czekać. Trwa logowanie.";
        let user = {
          email: this.email,
          password: this.password,
        };
        console.log(user);
        // Try/catch, dispatch action to login user
        this.loginAlertVariant = "bg-green-500";
        this.loginAlertMsg = "Pomyślnie zalogowano!";
        window.location.reload();
      }
      //   else {
      //     this.loginAlertVariant = "bg-red-500";
      //     this.loginAlertMsg = "Wprowadź poprawne dane!";
      //     this.loginInSubmission = false;
      //   }
    },
  },
};
</script>
