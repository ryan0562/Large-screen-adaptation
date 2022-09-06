<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" />
    <!-- 数据区 -->
    <dataArea v-for="(item, index) in $layout.dataArea[$config.useScreen]" :key="index" :data="item" />
    <!-- 数据区标记 -->
    <dataMarkArea v-for="(item, index) in $layout.dataArea[$config.useScreen]" :key="`mark_${index}`" :data="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
    dataArea: () => import('@/components/dataArea/dataArea.vue'),
    dataMarkArea: () => import('@/components/dataArea/dataMarkArea.vue'),
  },
};
</script>

<style lang="less" scoped>
</style>