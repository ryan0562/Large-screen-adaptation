<template>
  <div class="headerBox">
    <div class="title">{{ options.title }}</div>
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
        };
      },
    },
  },
};
</script>

<style lang="less" scoped>
.headerBox {
  position: absolute;
  letter-spacing: 10px;
  background: url(./assets/bg-head.png) no-repeat center center;
  height: 96px;
  width: 100%;
  text-align: center;
  top: 0;
  left: 0;
  .title {
    font-size: 34px;
    line-height: 96px;
    font-weight: 900;
    background: linear-gradient(180deg, #fff, #87e1ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>