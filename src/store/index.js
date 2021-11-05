import { createStore } from "vuex";
import Cookies from "js-cookie";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import cart from "./modules/cart";

const store = createStore({
  modules: {
    auth,
    cart,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 7, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
      paths: ["cart"],
    }),
  ],
});

export default store;
