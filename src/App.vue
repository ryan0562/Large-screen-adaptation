<template>
  <div id="app">
    <router-view />
    <moduleListDialog />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    moduleListDialog: () => import('@/components/addModule/moduleListDialog.vue'),
  },
};
</script>

<style lang="less">
</style>
