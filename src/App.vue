<template>
  <div id="app">
    <router-view />
    <infoPinal />
    <dataAreaPinal />
    <wk-button>aaa</wk-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    infoPinal: () => import('@/components/modulePanel/infoPinal.vue'),
    dataAreaPinal: () => import('@/components/dataAreaPanel/dataAreaPanel.vue'),
  },
};
</script>

<style lang="less">
</style>
