<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" />
    <dataArea
      
    />
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