<template>
  <div :style="layout.style" :data-theme="config.theme" class="sceenMain">
    <component :is="config.theme" :layout="layout" />
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
    controlPanel: () => import('@/components/modulePanel/controlPanel.vue'),
    huagong: () => import('@/views/theme/huagong/index.vue'),
    anbao: () => import('@/views/theme/anbao/index.vue'),
  },
  computed: {},
  watch: {
    config: {
      immediate: true,
      deep: true,
      handler: 'getLayout',
    },
  },
  mounted() {
  },
  methods: {
    getLayout(v, nv) {
      let { layout, config } = this.$ls.get('project');
      // 初次赋值给config
      if (!nv) {
        Object.assign(this.config, config);
        // 这里不能return，浏览器返回操作不会触发第二次赋值
      }

      config = this.config;
      this.layout = window.$layout = layout[config.useLayout];
    },
  },
  destroyed() {
    // this.$ls.remove('project');
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