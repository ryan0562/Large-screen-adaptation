<template>
  <div id="app">
    <router-view />
    <moduleListDialog />
  </div>
</template>

<script>
export default {
  components: {
    moduleListDialog: () => import('@/components/addModule/moduleListDialog.vue'),
  },
};
</script>

<style lang="less">
</style>
