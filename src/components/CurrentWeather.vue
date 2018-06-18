<template>
  <div class="grid-layout-weather">
    <div>
      <div class="display-text-large">
        <icon-widget :icon="currentIcon"></icon-widget>
      </div>
    </div>

    <div>
      <div class="display-text-large">
        {{ currentTemperature }} <i class="wi wi-fahrenheit"></i>
      </div>
    </div>

    <div>
      <div class="display-text-large">
        {{ currentHumidity }} <i class="wi wi-humidity"></i>
      </div>
    </div>

    <div>
      <div class="display-text-large">
        <wind-widget v-bind="currentWind"></wind-widget>
      </div>
    </div>

    <div class="update-info">
      <span>Last updated: {{ lastFetch }}</span>
    </div>
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
  }
};
</script>

<style lang="sass" scoped>
.grid-layout-weather
  display: grid
  grid-gap: 0px
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: 1fr, 1.5rem
  height: 100%
  width: 100%
  background: #444
  color: #fff

  &>div
    align-self: center
    justify-self: center

.update-info
  font-size: 0.75rem
  line-height: 1.5rem
  text-align: center
  grid-column: 1 / 5



</style>
