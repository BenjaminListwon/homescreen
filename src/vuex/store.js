import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherData: {},
    weatherDataLoaded: false
  },
  mutations: {
    SET_WEATHER_DATA(state, payload) {
      state.weatherData = payload;
    },
    SET_WEATHER_DATA_LOADED(state, payload) {
      state.weatherDataLoaded = payload;
    }
  },
  actions: {
    loadWeatherData({ commit }) {
      axios
        .get(process.env.VUE_APP_HOMESCREEN_SERVER_URL + "/data")
        .then(function(response) {
          commit("SET_WEATHER_DATA", response.data);
          commit("SET_WEATHER_DATA_LOADED", true);
        });
    }
  },
  getters: {
    getCurrentTemperature: state => {
      return state.weatherDataLoaded
        ? Math.round(state.weatherData.currently.temperature)
        : "";
    },
    getCurrentHumidity: state => {
      return state.weatherDataLoaded
        ? Math.round(state.weatherData.currently.humidity * 100)
        : "";
    },
    getCurrentPressure: state => {
      return state.weatherDataLoaded
        ? Math.round(state.weatherData.currently.pressure)
        : "";
    },
    getCurrentIcon: state => {
      return state.weatherDataLoaded ? state.weatherData.currently.icon : "";
    },
    getLastFetchDate: state => {
      return state.weatherDataLoaded ? state.weatherData.lastFetch : "";
    }
  }
});
