<template>
  <div :class="['dataAreaBox', { hasBox: data.hasBox }, { [`hasYaw_${type}`]: data.hasYaw }]">
    <dataBlock v-for="(item, index) in dataAreaModule.modules" :key="index" v-bind="item" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    /* 左侧还是右侧 */
    type: {
      required: true,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right'].includes(value);
      },
    },
  },
  computed: {


    ...mapGetters(['$layout']),

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
  &.hasYaw_left {
    transform: perspective(1200px) rotateY(10deg);
    transform-origin: left center;
  }
  &.hasYaw_right {
    transform: perspective(1200px) rotateY(-10deg);
    transform-origin: right center;
  }
  
}
</style>