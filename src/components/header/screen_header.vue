<template>
  <div class="headerBox" :style="options.styles">
    <div class="left"></div>
    <div class="main">
      <div class="tit">{{ $layout.header.title }}</div>
    </div>
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
  .left,
  .right {
    flex: 1;
  }
  .main {
    width: 1450px;
    height: 100px;
    line-height: 88px;
    text-align: center;
    background: var(--header_main-background);
    font-size: var(--header_main-fontSize);
    font-family: FZZhengHeiS-B-GB;
    font-weight: 900;
    letter-spacing: 6px;
    .tit {
      background: var(--header_main-color);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: -90px;
    }
  }
}
</style>