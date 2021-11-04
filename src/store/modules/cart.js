export default {
  state: {
    products: [],
  },
  getters: {
    getProductsAmount(state) {
      return state.products
        .map((product) => product.amount)
        .reduce((prev, next) => prev + next, 0);
    },
    getTotalPrice(state) {
      return state.products.reduce(
        (acc, val) => acc + val.amount * val.price,
        0
      );
    },
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push({
        ...payload,
      });
      console.log(state.products);
    },
    removeProduct(state, payload) {
      console.log(state.products);
      let index = state.products.indexOf(payload);
      state.products.splice(index, 1);
    },
  },
  actions: {
    addProduct({ commit }, payload) {
      commit("addProduct", payload);
    },
    removeProduct({ commit }, payload) {
      commit("removeProduct", payload);
    },
  },
};
