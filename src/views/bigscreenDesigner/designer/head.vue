<!-- 大屏设计器 -->
<template>
  <div class="head">
    <div class="h-l"></div>
    <div class="h-r">
      <el-button class="wk-btn" icon="el-icon-switch-button">取消</el-button>
      <el-button class="wk-btn" icon="el-icon-data-line">预览</el-button>
      <el-button class="wk-btn" icon="el-icon-position">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
.head {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.09);
}
</style>