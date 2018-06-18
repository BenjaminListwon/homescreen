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
    this.loadWeatherData();
    window.setInterval(me.loadWeatherData, 1 * 60 * 1000);
  },
  computed: {
    ...mapState(["weatherData"])
  },
  methods: {
    ...mapActions(["loadWeatherData"])
  }
};
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  overflow: hidden

body
  font-family: "Noto Sans", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50


.display-text-large
  font-size: 15vh
  line-height: 15vh
</style>
