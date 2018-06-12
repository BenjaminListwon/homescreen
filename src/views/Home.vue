<template>
  <div class="grid-layout-app">
    <div class="theday">
      <the-day></the-day>
    </div>
    <div class="thetime">
      <the-time></the-time>
    </div>
    <div class="weather">
      <current-weather></current-weather>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentWeather from "@/components/CurrentWeather.vue";
import TheDay from "@/components/TheDay.vue";
import TheTime from "@/components/TheTime.vue";

export default {
  name: "home",
  components: {
    CurrentWeather,
    TheDay,
    TheTime
  }
};
</script>

<style lang="sass" scoped>
.theday
  grid-area: theday
  align-self: center
  justify-self: center

.thetime
  grid-area: thetime
  align-self: center
  justify-self: center

.weather
  grid-area: weather

.grid-layout-app
  display: grid
  grid-gap: 0px
  grid-template-columns: repeat(2, 1fr)
  grid-template-rows: repeat(2, 1fr)
  grid-template-areas: "theday thetime" "weather weather"
  background-color: #fff
  color: #444
  height: 100vh
  width: 100vw
</style>