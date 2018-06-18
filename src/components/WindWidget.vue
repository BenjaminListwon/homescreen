<template>
<div>
  <span class="wind-speed">{{ speedMph }}</span>
</div>
</template>

<script>
const MPS_TO_MPH = 2.23694;

export default {
  name: "wind-widget",
  data() {
    return {};
  },
  props: {
    speed: Number,
    deg: Number,
    gust: Number
  },
  computed: {
    speedMph() {
      return Math.round(this.speed * MPS_TO_MPH);
    }
  }
};
</script>

<style lang="sass" scoped>
.wind-speed
  display: inline-block
  
</style>