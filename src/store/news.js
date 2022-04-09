import axios from "axios";

const state = () => ({
  listNews: [],
  infoError: "",
  search: "",
});
const mutations = {
  setListNews(state, param) {
    state.listNews = param;
  },
  setInfoError(state, param) {
    state.infoError = param;
  },
  setSearchNews(state, param) {
    state.search = param;
  },
};
const actions = {
  fetchNewsBusiness(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        console.log("respone", response.data);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
  fetchNewsEntertainment(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },

  fetchNewsHealth(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },

  fetchNewsSports(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
  fetchNewsTechnology(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
  fetchNewsScience(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
};
export default {
  state,
  mutations,
  actions,
};
