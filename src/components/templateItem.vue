<template>
  <div class="templateItem add" v-if="type === 'add'">
    <i class="el-icon-plus icon"></i>
    <slot></slot>
  </div>
  <div class="templateItem" v-else>
    <el-image :src="src" :preview-src-list="previewSrcList" ref="img"/>
    <span class="name">{{ name }}</span>
    <div class="mask">
      <span @click="$refs.img.showViewer=true" v-if="previewSrcList">预览图</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'previewSrcList', 'name', 'type'],
  data() {
    return {};
  },
  methods: {
    a() {
      console.log(1);
    },
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
  &:hover {
    .mask {
      display: flex;
    }
  }
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
    color: #bcc9d4;
  }
  .mask {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(29, 38, 46, 0.8);
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    > span {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      padding: 0 15px;
      margin: 5px;
      text-align: center;
      font-size: 14px;
      background-image: linear-gradient(-225deg, #00d3f1, #12b3ff);
      color: #293f52;
      border: none;
      cursor: pointer;
    }
  }
}
</style>