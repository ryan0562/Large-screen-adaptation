<template>
  <div class="dataBlock" :style="styles">
    <div class="head" v-if="showHeader">
      <div class="tit">{{ title }}</div>
      <span class="title-right">
        <slot name="headerright"></slot>
      </span>
    </div>
    <component class="component" v-bind="component"></component>
  </div>
</template>

<script>
export default {
  components: {
    aaa: () => import('@/components/modules/a.vue'),
    bbb: () => import('@/components/modules/b.vue'),
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
  .component {
    flex: 1;
    min-height: 0;
    overflow: overlay;
  }
}
</style>
