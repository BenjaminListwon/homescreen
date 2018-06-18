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
</script>
