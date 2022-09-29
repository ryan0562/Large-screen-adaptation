<template>
  <div :style="layout.styles" :data-theme="$config.theme" class="sceenMain">
    <component :is="$config.theme" :layout="layout" />
    <controlPanel v-if="$route.query.edit === '1'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: {},
    };
  },
  components: {
    controlPanel: () => import('./controlPanel.vue'),
    huagong: () => import('@/views/theme/huagong/index.vue'),
    anbao: () => import('@/views/theme/anbao/index.vue'),
  },
  computed: {},
  watch: {
    $config: {
      immediate: true,
      deep: true,
      handler() {
        const { useLayout, theme, screen } = window.$config;
        if (this.$route.query.project === '1') {
          const layout = this.$ls.get('project');
          this.layout = layout[useLayout];
          return;
        }
        this.layout = this.$mti_templates[theme]?.[useLayout];
        if (!this.layout) {
          this.$message.error('没有该模板或者分辨率');
        }
      },
    },
  },
  created() {},
};
</script>
<style lang="less">
.sceenMain {
  position: absolute;
  left: 0;
  top: 0;
}
</style>