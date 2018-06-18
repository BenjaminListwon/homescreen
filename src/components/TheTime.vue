<template>
  <div class="time">
    <span>&nbsp;</span>
    <div class="display-text-large">
      {{ currFullTime }}
    </div>
    <span>{{ currTimeAmPm }}</span>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "the-time",
  data() {
    return {
      timeObj: null
    };
  },
  computed: {
    currFullTime() {
      return this.timeObj.format("h:mm");
    },
    currTimeAmPm() {
      return this.timeObj.format("a");
    }
  },
  created() {
    this.getTime();
    let me = this;
    window.setInterval(me.getTime, 5000);
  },
  methods: {
    getTime() {
      this.timeObj = moment();
    }
  }
};
</script>

<style lang="sass" scoped>
.time
  text-align: center

  span
    font-size: 2rem
    line-height: 2rem
    text-transform: uppercase
    display: block
    color: #888
</style>