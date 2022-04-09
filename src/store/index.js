import Vue from "vue";
import Vuex from "vuex";
import news from "./news";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["news"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    news: {
      namespaced: true,
      ...news,
    },
  },
});
