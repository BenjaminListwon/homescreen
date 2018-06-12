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
    this.loadWeatherData();
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


.centering-container
  text-align: center
  white-space: nowrap

  &:before
    content: '\200B'
    display: inline-block
    height: 100%
    vertical-align: middle
    margin-right: -0.25em

.to-center
  display: inline-block
  vertical-align: middle
</style>
