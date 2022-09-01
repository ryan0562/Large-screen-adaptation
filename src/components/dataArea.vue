<template>
  <div class="dataAreaBox" :style="data.styles"></div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.dataAreaBox {
  background: var(--dataArea_background);
  .mark {

  }
}
</style>