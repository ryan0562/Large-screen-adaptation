<template>
  <div class="headerBox" :style="options.styles">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    options: {
      type: Object,
      required: true,
      default() {
        return {
          styles: {},
        };
      },
    },
  },
};
</script>

<style lang="less" scoped>
.headerBox {
  display: flex;

  .main {
    width: 1450px;
    background: var(--header_main-bg);
  }
}
</style>