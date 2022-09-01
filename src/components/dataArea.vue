<template>
  <div class="dataAreaBox" :style="data.styles">
    <div class="mark"></div>
    <div class="tit">{{ data.title }}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.dataAreaBox {
  background: var(--dataArea_background);
  .mark {
    position: absolute;
    width: 28px;
    height: 36px;
    cursor: pointer;
    background: var(--dataArea_mark-background);
    top: -45px;
    left: 50%;
    margin-left: -14px;
  }
  .tit {
    background: var(--dataArea_mark_title-background);
    height: 40px;
    line-height: 40px;
    font-family: 'myTitle';
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
  }
  .line {
    width: 100%;
    height: 20px;
    background: var(--dataArea_mark_line-background)
  }
}
</style>