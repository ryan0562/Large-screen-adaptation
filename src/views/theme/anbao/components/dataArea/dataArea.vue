<template>
  <div :class="['dataAreaBox', { hasBox: data.hasBox }]">
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
  width: 100%;
  height: 100%;
  
  position: absolute;
  transition: all 1s ease;
  backface-visibility: hidden;
  &.hasBox {
    padding: 0 20px;
    border: 1px solid #00bffd;
    border-top: none;
    border-bottom: none;
    box-shadow: inset 0 0 25px -5px #00bffd;
    background: url(./assets/b1.png) no-repeat top left, url(./assets/b2.png) no-repeat top right,
      url(./assets/b3.png) no-repeat bottom left, url(./assets/b4.png) no-repeat bottom right;
    background-color: #071733;
  }
}
</style>