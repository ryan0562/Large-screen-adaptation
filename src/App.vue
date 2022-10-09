<template>
  <div id="app">
    <router-view />
    <infoPinal />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    infoPinal: () => import('@/components/modulePanel/infoPinal.vue'),
  },
};
</script>

<style lang="less">
</style>
