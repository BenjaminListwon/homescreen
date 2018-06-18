<template>
<div class="date">
  <span>{{ currDayName }}</span>
  <div class="display-text-large">
    {{ currMonthName }} {{ currDay }}
  </div>
  <span>{{ currYear }}</span>
</div>
</template>

<script>
import moment from "moment";

export default {
  name: "the-day",
  data() {
    return {
      timeObj: null
    };
  },
  computed: {
    currDayName() {
      return this.timeObj.format("dddd");
    },
    currDay() {
      return this.timeObj.format("D");
    },
    currMonthName() {
      return this.timeObj.format("MMMM");
    },
    currYear() {
      return this.timeObj.format("YYYY");
    }
  },
  created() {
    this.timeObj = moment();
  }
};
</script>

<style lang="sass" scoped>
.date
  text-align: center

  
  span
    font-size: 2rem
    line-height: 2rem
    text-transform: uppercase
    display: block
    color: #888
</style>