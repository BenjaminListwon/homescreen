<template>
<div class="date-display">
  <transition name="fade" mode="out-in">
    <span v-bind:key="dateKey">
      {{ datePart }}
    </span>
  </transition>

    <!-- {{ currDayName }}
    {{ currMonthName }} {{ currDay }}
    {{ currYear }} -->
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "the-day",
  data() {
    return {
      dateKeys: ["DAY_NAME", "MONTH_NAME_DAY_NUMBER", "YEAR_NUMBER"],
      dateKeyIndex: 0
    };
  },
  computed: {
    ...mapState(["currentDate"]),
    currDayName() {
      return this.currentDate.format("dddd");
    },
    currDay() {
      return this.currentDate.format("D");
    },
    currMonthName() {
      return this.currentDate.format("MMMM");
    },
    currYear() {
      return this.currentDate.format("YYYY");
    },
    datePart() {
      switch (this.dateKey) {
        case "DAY_NAME":
          return this.currDayName;
        case "MONTH_NAME_DAY_NUMBER":
          return this.currMonthName + " " + this.currDay;
        case "YEAR_NUMBER":
          return this.currYear;
      }
    },
    dateKey() {
      return this.dateKeys[this.dateKeyIndex];
    }
  },
  created() {
    let me = this;
    window.setInterval(this.rotateDateKey, 10 * 1000);
  },
  methods: {
    rotateDateKey() {
      if (this.dateKeyIndex == 2) {
        this.dateKeyIndex = 0;
      } else {
        this.dateKeyIndex += 1;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.date-display
  text-align: center

  span
    font-size: 15vh
    line-height: 15vh


.fade-enter-active, .fade-leave-active
  transition: opacity 0.7s ease-out

.fade-enter, .fade-leave-to
  opacity: 0
</style>