<template>
  <LargeScreen ></LargeScreen>
</template>

<script>
export default {
  components: {
    LargeScreen: () => import("@/components/LargeScreen-flex.vue"),
  },
};
</script>

<style lang="less" scoped>
</style>