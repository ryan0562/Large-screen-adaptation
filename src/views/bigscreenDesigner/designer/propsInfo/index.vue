<template>
  <component class="formBox" :data="data" :is="componentKey"></component>
</template>

<script>
export default {
  components: {
    panelProps: () => import('./panelProps.vue'),
    moduleProps: () => import('./moduleProps.vue'),
  },
  props: {
    data: {
      type: Object,
    },
    componentKey: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.formBox {
  padding: 20px 10px;
}
</style>