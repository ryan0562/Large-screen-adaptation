<template>
  <div>
    <screen_header v-if="$config.layout['3840_1080'].header" :options="$config.layout['3840_1080'].header" />
  </div>
</template>

<script>
export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
  },
  computed: {
    
  },
};
</script>

<style lang="less" scoped>
</style>