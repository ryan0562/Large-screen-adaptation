<template>
  <div class="dataAreaBox">
    <div :class="['tit',`bg${data.type}`]" @click="$emit('clickTitle', data.moduleId)">{{ dataAreaModule.title }}</div>
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
  background: url('./assets/bg.png') no-repeat 0 0 / 100% 100%;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: absolute;
  transition: all 1s ease;
  backface-visibility: hidden;

  .tit {
    background: url(./assets/head_1.png) no-repeat top center;
    height: 40px;
    line-height: 40px;
    font-family: 'huagong_fonts';
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
    cursor: pointer;
    &.bg2 {
      background: url(./assets/head_2.png);
    }
  }
  .line {
    width: 100%;
    height: 20px;
    background: url('./assets/line.png') no-repeat center bottom;
  }
}
</style>