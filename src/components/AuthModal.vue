<template>
  <transition name="modal-fade">
    <div
      v-show="authModalShow"
      class="
        z-10
        fixed
        inset-0
        bg-black bg-opacity-50
        flex
        justify-center
        items-center
        overflow-y-scroll
      "
      @click.self="toggleAuthModal"
    >
      <div class="relative bg-white px-12 pb-6 rounded-md mt-10">
        <button
          class="
            absolute
            text-xl
            right-0
            -top-8
            text-white
            hover:text-orange-500
          "
          @click.prevent="toggleAuthModal"
        >
          &#10006;
        </button>
        <div
          class="
            flex
            bg-orange-500
            text-white
            absolute
            left-0
            right-0
            -top-8
            mx-auto
            w-80
            shadow-lg
            rounded-md
            overflow-hidden
          "
        >
          <a
            href="#"
            class="
              block
              w-full
              py-5
              px-5
              hover:bg-orange-200 hover:text-black
              transition
            "
            :class="{ 'bg-orange-200 text-black': tab === 'login' }"
            @click.prevent="showForm('login')"
          >
            <fa
              class="mr-1"
              :icon="['fa', 'user']"
              :class="{ 'text-black': tab === 'login' }"
            />
            Logowanie</a
          >
          <a
            href="#"
            class="
              block
              w-full
              py-5
              px-5
              hover:bg-orange-200 hover:text-black
              transition
            "
            :class="{ 'bg-orange-200 text-black': tab === 'register' }"
            @click.prevent="showForm('register')"
          >
            <fa
              class="mr-1"
              :icon="['fa', 'user-plus']"
              :class="{ 'text-black': tab === 'register' }"
            />Rejestracja</a
          >
        </div>
        <!-- Login Form -->
        <AppLoginForm v-if="tab === 'login'" />
        <!-- Register Form -->
        <AppRegisterForm v-else />
      </div>
    </div>
  </transition>
</template>

<script>
import AppLoginForm from "./LoginForm.vue";
import AppRegisterForm from "./RegisterForm.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "AuthModal",
  components: {
    AppLoginForm,
    AppRegisterForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
  computed: {
    ...mapState({
      authModalShow: (state) => state.auth.authModalShow,
    }),
  },
  methods: {
    showForm(form) {
      this.tab = form;
    },
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>
