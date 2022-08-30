<template>
  <div id="app" :data-theme="theme" :style="styles">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.config.theme;
    },
    styles() {
      return this.$store.state.config.layout['1920_1080'].styles;
    },
  },
};
</script>

<style lang="less">
</style>
