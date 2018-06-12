import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "@/helpers/http-common";

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
      HTTP.get("/sample_data/darksky.json").then(function(response) {
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
    }
  }
});
