<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" />
    <div class="dataArea" :style="$layout.dataArea.styles">
      <dataArea v-for="(item, index) in $layout.dataArea[$config.useScreen]" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
    dataArea: () => import('@/components/dataArea/dataArea.vue'),
  },
};
</script>

<style lang="less" scoped>
</style>