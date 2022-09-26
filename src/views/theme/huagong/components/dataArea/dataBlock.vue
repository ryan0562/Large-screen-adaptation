<template>
  <div class="dataBlock" :style="data.styles" v-if="data.type == 2">
    <div class="head head_2" v-if="data.showHeader">
      {{ data.title }}
    </div>
    <div :class="[{ box: data.hasBox }, 'flex']">
      <component v-bind="data.component"></component>
    </div>
  </div>
  <div :class="['dataBlock', { box: data.hasBox }]" :style="data.styles" v-else>
    <div class="head head_1" v-if="data.showHeader">
      {{ data.title }}
    </div>
    <component class="flex" v-bind="data.component"></component>
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
    investment: () => import('@/components/modules/firstLevel/investment.vue'),
    myImg: () => import('@/components/image/image.vue'),
  },
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    key: {
      type: 'String',
      required: true,
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
  position: relative;
}
.head {
  height: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  &.head_1 {
    position: relative;
    padding-left: 25px;
    &:before {
      content: '';
      width: 16px;
      height: 16px;
      border: 1px solid rgba(0, 255, 255, 0.35);
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 3px;
      box-sizing: border-box;
    }
    &:after {
      content: '';
      width: 6px;
      height: 6px;
      border: 2px solid #00ffff;
      border-radius: 50%;
      position: absolute;
      top: 8px;
      left: 5px;
      box-sizing: border-box;
    }
  }
  &.head_2 {
    height: 24px;
    line-height: 24px;
    position: relative;
    padding-left: 25px;
    font-family: huagong_fonts;
    background: url(./assets/tit_2_1.png) no-repeat left center, url(./assets/tit_2_2.png) no-repeat bottom right;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 95%;
      height: 1px;
      background: linear-gradient(90deg, #0fb3e2, rgba(16, 114, 124, 0));
    }
  }
}
.box {
  border: 1px solid transparent;
  border-left-color: #0d3750;
  border-right-color: #0d3750;
  background-color: #11233c;
  padding: 10px;
}
.flex {
  flex: 1;
  min-height: 0;
  overflow: overlay;
}
</style>
