<template>
  <div class="grid-layout-weather">
    <div>
      <h1>Current Conditions</h1>
      <table>
        <tbody>
          <tr>
            <td>{{ currentTemperature }}&deg;</td>
            <td>{{ currentHumidity }}%</td>
            <td>{{ currentPressure }}&rho;</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </tfoot>
      </table>

      <wind-widget :speed="weatherData.currently.windSpeed"
        :gust="weatherData.currently.windGust"
        :deg="weatherData.currently.windBearing"></wind-widget>

      <i class="wi wi-day-cloudy"></i>
    </div>

    <div>
      Low: {{ weather.main.temp_min }}&deg;<br>
      High: {{ weather.main.temp_max }}&deg;
    </div>

    <div>
      Low: {{ weather.main.temp_min }}&deg;<br>
      High: {{ weather.main.temp_max }}&deg;
    </div>

    <div>
      Low: {{ weather.main.temp_min }}&deg;<br>
      High: {{ weather.main.temp_max }}&deg;
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import WindWidget from "@/components/WindWidget";

export default {
  name: "current-weather",
  components: {
    WindWidget
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
    ...mapState(["weatherData"]),
    ...mapGetters({
      currentTemperature: "getCurrentTemperature",
      currentHumidity: "getCurrentHumidity",
      currentPressure: "getCurrentPressure"
    })
  }
};
</script>

<style lang="sass" scoped>
.grid-layout-weather
  display: grid
  grid-gap: 0px
  grid-template-columns: repeat(5, 1fr)
  height: 100%
  width: 100%

  &>div
    align-self: center
    justify-self: center

  &>div:nth-of-type(1)
    grid-column: 1 / 3
    justify-self: left
    width: 100%

table
  width: 100%

  td, th
    text-align: center
    width: 33.3%

  td
    font-size: 2.5rem

</style>
