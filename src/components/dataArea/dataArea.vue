<template>
  <div class="dataAreaBox">
    <div class="tit">{{ dataAreaModule.title }}</div>
    <div class="line"></div>
    <dataBlock v-for="(item, index) in dataAreaModule.modules" :key="index" v-bind="item" />
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
    id: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    dataAreaModule() {
      return this.$layout.dataAreaModules[this.data.moduleId] || {};
    },
  },
};
</script>

<style lang="less" scoped>
.dataAreaBox {
  background: var(--dataArea_background);
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: absolute;
  transition: all 1s ease;
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
</style>