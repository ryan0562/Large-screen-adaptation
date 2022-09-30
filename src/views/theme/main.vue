<template>
  <div :style="layout.style" :data-theme="$config.theme" class="sceenMain">
    <component :is="$config.theme" :layout="layout" />
    <controlPanel v-if="$route.query.edit === '1'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: {},
      config: window.$config,
    };
  },
  components: {
    controlPanel: () => import('./controlPanel.vue'),
    huagong: () => import('@/views/theme/huagong/index.vue'),
    anbao: () => import('@/views/theme/anbao/index.vue'),
  },
  computed: {},
  watch: {
    config: {
      immediate: true,
      deep: true,
      handler(a,b) {
        const { layout, config } = this.$ls.get('project');
        Object.assign(this.config, config);
        this.layout = window.$layout = layout[this.config.useLayout];
      },
    },
  },
  created() {
    // const { config } = this.$ls.get('project');
    // Object.assign(this.config, config);
  },
  destroyed() {
    // this.$ls.remove('project');
  },
  methods: {},
};
</script>
<style lang="less">
.sceenMain {
  position: absolute;
  left: 0;
  top: 0;
}
</style>