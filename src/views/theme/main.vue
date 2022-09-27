<template>
  <div :style="$layout.styles" :data-theme="$config.theme" class="sceenMain">
    <router-view :name="name" />
    <controlPanel v-if="$route.query.edit === '1'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    controlPanel: () => import('./controlPanel.vue'),
  },
  computed: {
    ...mapGetters(['$layout']),
    name() {
      return this.$config.theme || 'default';
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