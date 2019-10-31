import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {},
    modules: {},
    actions: {
      async nuxtServerInit({ commit }, { req, store, route }) {}
    },
    mutations: {}
  });
};

export default createStore;
