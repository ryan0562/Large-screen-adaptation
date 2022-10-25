<template>
  <el-form>
    <el-form-item label="标题" prop="title">
      <el-input v-model="data.title"></el-input>
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
</style>