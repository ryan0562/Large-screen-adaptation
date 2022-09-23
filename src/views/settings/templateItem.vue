<template>
  <div class="templateItem add" v-if="type === 'add'">
    <i class="el-icon-plus icon"></i>
    <slot></slot>
  </div>
  <div class="templateItem" v-else>
    <el-image :src="src" :preview-src-list="previewSrcList" />
    <span class="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ['src', 'previewSrcList', 'name', 'type'],
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
.templateItem {
  position: relative;
  margin: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 258px;
  height: 184px;
  border: 1px solid #3a4659;
  background: #171b22;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  &.add {
    border: 1px solid #212528;
    font-size: 14px;
    color: #8eeeff;
    background-image: linear-gradient(-90deg, rgba(0, 222, 255, 0.39), rgba(0, 174, 255, 0.19));
    box-shadow: 0 0 10px 0 rgba(55, 224, 255, 0.3);

    .icon {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .el-image {
    flex: 1;
    min-height: 0;
    width: 100%;
  }
  .name {
    line-height: 32px;
    color:#bcc9d4;
  }
}
</style>