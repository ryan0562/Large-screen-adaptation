<template>
  <div :class="['dataAreaBox', `dataAreaBox_${data.id}`]" :style="data.styles" ref="dataArea">
    <div class="mark" @click="toggleFold($refs['dataArea'])"></div>
    <div class="dataArea">
      <div class="tit">{{ data.title }}</div>
      <div class="line"></div>
      <dataBlock v-for="(item, index) in data.modules" :key="index" v-bind="item" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    dataBlock: () => import('./dataBlock.vue'),
  },
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  methods: {
    toggleFold(el) {
      this.$animateCSS(el, 'widthOut').then((res) => {
        // this.$animateCSS(el, 'widthOut')
        this.$refs['dataArea'].style.display = 'none';
      });
    },
  },
};
</script>

<style lang="less" scoped>
.dataAreaBox {
  width: 440px;
  height: 100%;
  float: left;
  margin-left: 20px;
  position: relative;
  transition: all 2s ease;
  &:first-child {
    margin-left: 0;
  }
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
  .dataArea {
    background: var(--dataArea_background);
    width: 100%;
    height: 100%;
    padding: 0 20px;

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
      background: var(--dataArea_mark_line-background);
    }
  }
}
</style>