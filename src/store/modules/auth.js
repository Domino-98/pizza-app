export default {
  state: {
    authModalShow: false,
  },
  getters: {},
  mutations: {
    toggleAuthModal(state) {
      state.authModalShow = !state.authModalShow;
    },
  },
  actions: {},
};
