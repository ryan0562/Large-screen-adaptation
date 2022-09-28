<template>
  <div :style="layout.styles" :data-theme="$config.theme" class="sceenMain">
    <component :is="name" :layout="layout" />
    <controlPanel v-if="$route.query.edit === '1'" />
  </div>
</template>

<script>
import { getLayout } from '@/utils/utils.js';

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
  computed: {
    name() {
      return this.$config.theme || 'default';
    },
  },
  created() {
    if (this.$route.query.project === '1') {
      const {
        config: { useLayout, theme, screen },
        layout,
      } = this.$ls.get('project');
      this.$config.useLayout = useLayout;
      this.$config.theme = theme;
      this.$config.screen = screen;

      this.layout = layout;
      return;
    }
    this.layout = getLayout(this.$config);
  },
};
</script>
<style lang="less">
.sceenMain {
  position: absolute;
  left: 0;
  top: 0;
}
</style>