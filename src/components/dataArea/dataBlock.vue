<template>
  <div class="dataBlock" :style="styles">
    <div class="head" v-if="showHeader">
      <span class="out-circle"></span>
      <span class="tit">{{ title }}</span>
    </div>
    <component class="component" v-bind="component"></component>
  </div>
</template>

<script>
export default {
  components: {
    aaa: () => import('@/components/modules/a.vue'),
    bbb: () => import('@/components/modules/b.vue'),
    ccc: () => import('@/components/modules/c.vue'),
    realTimePolice: () => import('@/components/modules/realTimePolice/index.vue'),
    myVideo: () => import('@/components/modules/video/video.vue'),

  },
  props: {
    component: {
      type: Object,
      default() {
        return {};
      },
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    title: {
      type: String,
      default: '',
    },
    showHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>

<style scoped lang="less">
.dataBlock {
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-left-color: #0d3750;
  border-right-color: #0d3750;
  background-color: #11233c;
  padding:10px;
  .head {
    height: 20px;
    margin-bottom: 10px;
    .out-circle {
      width: 16px;
      height: 16px;
      border: 1px solid rgba(0, 255, 255, 0.35);
      border-radius: 50%;
      margin-right: 5px;
      display: inline-block;
      position: relative;
      &:after {
        content: '';
        width: 6px;
        height: 6px;
        border: 2px solid #00ffff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -3px;
        margin-top: -3px;
        box-sizing: border-box;
      }
    }
    .tit {
      font-size: 16px;
      line-height: 20px;
      vertical-align: bottom;
    }
  }
  .component {
    flex: 1;
    min-height: 0;
    overflow: overlay;
  }
}
</style>
