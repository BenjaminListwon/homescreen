import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import request from "request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherData: {},
    weatherDataLoaded: false,
    weatherDataLastFetch: null
  },
  mutations: {
    SET_WEATHER_DATA(state, payload) {
      state.weatherData = payload;
    },
    SET_WEATHER_DATA_LOADED(state, payload) {
      state.weatherDataLoaded = payload;
    },
    SET_WEATHER_DATA_LAST_FETCH(state, payload) {
      state.weatherDataLastFetch = payload;
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
    getCurrentWind: state => {
      return state.weatherDataLoaded
        ? {
            speed: state.weatherData.currently.windSpeed,
            deg: state.weatherData.currently.windBearing,
            gust: state.weatherData.currently.windGust
          }
        : {
            speed: 0,
            deg: 0,
            gust: 0
          };
    },
    getCurrentIcon: state => {
      return state.weatherDataLoaded ? state.weatherData.currently.icon : "";
    },
    getLastFetchDate: state => {
      return state.weatherDataLoaded ? state.weatherData.lastFetch : "";
    }
  }
});
