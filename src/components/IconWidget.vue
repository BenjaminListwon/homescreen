<template>
  <i class="wi" v-bind:class="[iconClass]"></i>
</template>

<script>
const WI_ICON_PREFIX = "wi-forecast-io-";
export default {
  name: "icon-widget",
  data() {
    return {};
  },
  computed: {
    iconClass() {
      return WI_ICON_PREFIX + this.icon;
    }
  },
  props: {
    icon: String
  }
};

// FOR REFERENCE
// wi-forecast-io-clear-day: day-sunny
// wi-forecast-io-clear-night: night-clear
// wi-forecast-io-rain: rain
// wi-forecast-io-snow: snow
// wi-forecast-io-sleet: sleet
// wi-forecast-io-wind: strong-wind
// wi-forecast-io-fog: fog
// wi-forecast-io-cloudy: cloudy
// wi-forecast-io-partly-cloudy-day: day-cloudy
// wi-forecast-io-partly-cloudy-night: night-cloudy
// wi-forecast-io-hail: hail
// wi-forecast-io-thunderstorm: thunderstorm
// wi-forecast-io-tornado: tornado
</script>

<style lang="sass" scoped>
.wi
  font-size: 20vh

.wi-forecast-io-clear-day
  color: #fc0
</style>