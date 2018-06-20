<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { HTTP } from "@/helpers/http-common";
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    let me = this;
    this.setCurrentDate();
    window.setInterval(me.setCurrentDate, 1 * 60 * 1000);
    this.loadWeatherData();
    window.setInterval(me.loadWeatherData, 1 * 60 * 1000);
  },
  computed: {
    ...mapState(["weatherData"])
  },
  methods: {
    ...mapActions(["loadWeatherData", "setCurrentDate"])
  }
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0

html, body
  overflow: hidden

body
  font-family: "Noto Sans", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

h1, h2, h3, h4, h5, h6
  font-weight: normal

</style>
