<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" />
      <!-- v-for="(item, index) in $layout.dataArea[$config.useScreen]" :key="index" -->
    <dataArea :data="$layout.dataArea[$config.useScreen][0]"/>
  </div>
</template>

<script>
export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
    dataArea: () => import('@/components/dataArea.vue'),
  },
  computed: {
    
  },
};
</script>

<style lang="less" scoped>
</style>