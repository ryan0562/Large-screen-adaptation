<template>
  <el-form ref="form" class="formBox">
    <el-form-item :label="item.label" v-for="(item, key) in data.form" :key="key">
      <component v-model="data.sourceData[key]" v-bind="item.component"></component>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.formBox {
  padding:20px 10px;
}
</style>