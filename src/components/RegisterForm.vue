<template>
  <form class="mt-14 flex flex-col w-56 xs:w-72" @submit.prevent="submitForm">
    <div
      v-if="regShowAlert"
      :class="regAlertVariant"
      class="bg-green-500 text-white py-3 px-3 w-full mb-5"
    >
      <h5 class="text-base">{{ regAlertMsg }}</h5>
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="name"
        v-model="name"
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
      <span v-if="v$.name.$error" class="text-sm text-red-500 mt-1 text-left">
        {{ v$.name.$errors[0].$message }}
      </span>
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
        v-model="password.password"
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
        v-if="v$.password.password.$error"
        class="text-sm text-red-500 mt-1 text-left"
      >
        {{ v$.password.password.$errors[0].$message }}
      </span>
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="confirm_password"
        v-model="password.confirm"
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
      <span
        v-if="v$.password.confirm.$error"
        class="text-sm text-red-500 mt-1 text-left"
      >
        {{ v$.password.confirm.$errors[0].$message }}
      </span>
    </div>
    <div class="relative flex flex-col place-items-start mb-5">
      <input
        id="phone"
        v-model="phone"
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
      <span v-if="v$.phone.$error" class="text-sm text-red-500 mt-1 text-left">
        {{ v$.phone.$errors[0].$message }}
      </span>
    </div>
    <div class="mb-3">
      <input
        id="tos"
        v-model="tos"
        type="checkbox"
        name="tos"
        class="mb-0.5 mr-1 form-checkbox h-4 w-4 text-orange-400 rounded-md"
      />
      <label for="tos" class="text-xs"
        >Zgadzam się z
        <a href="#" class="text-orange-500">Warunkami użytkowania</a> i
        <a href="#" class="text-orange-500">Polityką prywatności</a></label
      >
      <p v-if="v$.tos.$error" class="text-sm text-red-500 mt-1 text-left">
        Musisz zaakceptować warunki użytkowania i politykę prywatności
      </p>
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
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import {
  hasNumber,
  hasLowerCaseLetter,
  hasCapitalCaseLetter,
  hasSpecialCharacter,
} from "../validators/password";

export default {
  name: "RegisterForm",
  data() {
    return {
      v$: useValidate(),
      name: "",
      email: "",
      password: {
        password: "",
        confirm: "",
      },
      phone: "",
      tos: false,
      regInSubmission: false,
      regShowAlert: false,
      regAlertVariant: "bg-green-500",
      regAlertMsg: "Pomyślnie zarejestrowano!",
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("Nazwa nie może być pusta", required),
        minLength: helpers.withMessage(
          "Nazwa musi zawierać minimum 3 znaki",
          minLength(3)
        ),
        maxLength: helpers.withMessage(
          "Nazwa może zawierać maksimum 15 znaków",
          maxLength(15)
        ),
      },
      email: {
        required: helpers.withMessage("Email jest wymagany", required),
        email: helpers.withMessage("Nieprawidłowy adres email", email),
      },
      password: {
        password: {
          required: helpers.withMessage("Hasło jest wymagane", required),
          minLength: helpers.withMessage(
            "Hasło musi zawierać minimum 6 znaków",
            minLength(6)
          ),
          hasNumber: helpers.withMessage(
            "Hasło musi zawierać cyfrę",
            hasNumber
          ),
          hasLowerCaseLetter: helpers.withMessage(
            "Hasło musi zawierać conajmniej jedną małą literę",
            hasLowerCaseLetter
          ),
          hasCapitalCaseLetter: helpers.withMessage(
            "Hasło musi zawierać conajmniej jedną wielką literę",
            hasCapitalCaseLetter
          ),
          hasSpecialCharacter: helpers.withMessage(
            "Hasło musi zawierać conajmniej jeden znak specjalny",
            hasSpecialCharacter
          ),
        },
        confirm: {
          required: helpers.withMessage(
            "Potwierdzenie hasła jest wymagane",
            required
          ),
          sameAs: helpers.withMessage(
            "Oba hasła muszą być takie same",
            sameAs(this.password.password)
          ),
        },
      },
      phone: {
        required: helpers.withMessage("Numer telefonu jest wymagany", required),
      },
      tos: {
        checked(val) {
          return val;
        },
      },
    };
  },
  methods: {
    // Async function
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.regInSubmission = true;
        this.regShowAlert = true;
        this.regAlertVariant = "bg-blue-500";
        this.regAlertMsg = "Proszę czekać. Trwa tworzenie konta.";
        let user = {
          name: this.name,
          email: this.email,
          password: this.password.password,
          phone: this.phone,
        };
        console.log(user);
        // Try/catch, dispatch action to register user
        this.regAlertVariant = "bg-green-500";
        this.regAlertMsg = "Pomyślnie zarejestrowano!";
        window.location.reload();
      }
      //   else {
      //     this.regAlertVariant = "bg-red-500";
      //     this.regAlertMsg = "Wprowadź poprawne dane!";
      //     this.regInSubmission = false;
      //   }
    },
  },
};
</script>
