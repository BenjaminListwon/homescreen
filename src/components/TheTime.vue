<template>
  <div class="time-display">
    <p>{{ currFullTime }} <span>{{ currTimeAmPm }}</span></p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "the-time",
  data() {
    return {
      timeObj: null
    };
  },
  computed: {
    ...mapState(["currentDate"]),
    currFullTime() {
      return this.currentDate.format("h:mm");
    },
    currTimeAmPm() {
      return this.currentDate.format("a");
    }
  }
};
</script>

<style lang="sass" scoped>
.time-display
  text-align: center

  p
    font-size: 15vh
    line-height: 15vh

  span
    font-size: 7.5vh
    line-height: 7.5vh
    text-transform: uppercase
    color: #888
</style>