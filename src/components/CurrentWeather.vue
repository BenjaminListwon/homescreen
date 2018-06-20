<template>
  <div class="grid-layout-weather-container">
    <!-- Top Row -->
    <header class="weather-header">
      <h2 class="weather-header__title">Current Conditions</h2>
    </header>

    <!-- Center Row -->
    <div class="grid-layout-weather-panels">
      <!-- First Panel -->
      <div class="weather-panel" @click="flipContents">
        <div class="weather-card weather-card--front">
          <div class="weather-card__content">
            <icon-widget :icon="currentIcon"></icon-widget>
          </div>
        </div>
        <div class="weather-card weather-card--back">
          <div class="weather-card__content">
            <icon-widget icon="wind"></icon-widget>
          </div>
        </div>
      </div>
      <!-- Second Panel -->
      <div class="weather-panel">
        <div class="weather-card weather-card--front">
          <div class="weather-card__content">
            <!-- <header class="weather-card__content__header">
              <h3 class="weather-card__content__title">Temperature</h3>
            </header> -->
            <p>
              {{ currentTemperature }}<sup>&deg;F</sup>
              <label><i class="wi wi-thermometer-exterior"></i></label>
            </p>
          </div>
        </div>
      </div>
      <!-- Third Panel -->
      <div class="weather-panel">
        <div class="weather-card weather-card--front">
          <div class="weather-card__content">
            <p>
              {{ currentHumidity }}<sup>%</sup>
              <label><i class="wi wi-humidity"></i></label>
            </p>
          </div>
        </div>
      </div>
      <!-- Fourth Panel -->
      <div class="weather-panel">
        <div class="weather-card weather-card--front">
          <div class="weather-card__content">
            <p>
              <wind-widget v-bind="currentWind"></wind-widget>
              <label><i class="wi wi-strong-wind"></i></label>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <footer class="weather-update-info">
      <span>Last updated: {{ lastFetch }}</span>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import WindWidget from "@/components/WindWidget";
import IconWidget from "@/components/IconWidget";

export default {
  name: "current-weather",
  components: {
    WindWidget,
    IconWidget
  },
  data() {
    return {
      weather: {
        main: {
          temp_min: 50,
          temp_max: 80
        }
      }
    };
  },
  created() {},
  computed: {
    ...mapState(["weatherData", "weatherDataLastUpdate"]),
    ...mapGetters({
      currentTemperature: "getCurrentTemperature",
      currentHumidity: "getCurrentHumidity",
      currentPressure: "getCurrentPressure",
      currentWind: "getCurrentWind",
      currentIcon: "getCurrentIcon",
      lastFetch: "getLastFetchDate"
    })
  },
  methods: {
    flipContents: event => {
      let clicked = event.target;
      let parent = clicked.parentNode;
      let kids = parent.querySelectorAll(".weather-card");
      for (var i = 0; i < kids.length; i++) {
        kids[i].classList.add("weather-card--flipped");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.grid-layout-weather-container
  height: 100%
  width: 100%
  background: #fff
  color: #000
  display: grid
  grid-gap: 0px
  grid-template-rows: 5rem calc(100% - 6.5rem) 1.5rem


.grid-layout-weather-panels
  height: 100%
  width: 100%
  display: grid
  grid-gap: 0px
  grid-template-columns: repeat(4, 1fr)
  

.weather-panel
  position: relative
  width: inherit
  height: inherit

.weather-card
  display: grid
  width: inherit
  height: inherit
  transition: ease-in 1000ms
  backface-visibility: hidden
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #000
  color: #fff
  box-shadow: 0px 0px 35px rgba(0,0,0,0.7)

  // Trigger HA
  transform: rotateZ(0deg)

  .weather-card__content
    align-self: center
    justify-self: center

    p
      font-size: 15vh
      line-height: 15vh
      text-align: center

      label
        display: block
        line-height: 8vh

        .wi
          font-size: 5vh
          


.weather-card--front
  transform: rotateY(0deg)

  &.weather-card--flipped
    transform: rotateY(180deg)


.weather-card--back
  transform: rotateY(180deg)
  
  &.weather-card--flipped
    transform: rotateY(0deg)
  


.weather-header
  background: #000
  color: #fff

  .weather-header__title  
    font-size: 2.5rem
    line-height: 5rem
    text-align: center

.weather-update-info
  background: #000
  color: #fff
  font-size: 0.75rem
  line-height: 1.5rem
  text-align: center



.wi-humidity
  // color: #8af
  font-size: 8vh

sup
  font-size: 8vh



</style>
