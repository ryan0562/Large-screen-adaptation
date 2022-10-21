<template>
  <div :style="layout.style" :data-theme="config.theme" class="sceenMain">
    <component :is="config.theme" :layout="layout" />
    <!-- <controlPanel v-if="$route.query.edit === '1'" /> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  data() {
    return {
      // layout: {},
    };
  },
  components: {
    // controlPanel: () => import('@/components/modulePanel/controlPanel.vue'),
    huagong: () => import('@/views/theme/huagong/index.vue'),
    anbao: () => import('@/views/theme/anbao/index.vue'),
  },
  computed: {
    ...mapState(['config', 'bigScreenModel']),
    ...mapGetters(['layout']),
  },
  watch: {},
  created() {
    let { bigScreenModel, config } = this.$ls.get('project');
    this.$store.commit('SET_ROOT_STATE', {
      key: 'bigScreenModel',
      data: bigScreenModel,
    });
    this.$store.commit('SET_ROOT_STATE', {
      key: 'config',
      data: config,
    });
  },
  methods: {},
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