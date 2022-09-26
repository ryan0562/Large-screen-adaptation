<template>
  <div class="layoutBox">
    <div class="list">
      <div class="tit">布局列表</div>
      <div class="itemBox">
        <div class="item" v-for="(item, key) in list" :key="key" @click="showImg(key, item)">{{ key }}</div>
      </div>
    </div>
    <div class="view">
      <el-image v-if="imgSrc" :src="imgSrc" :preview-src-list="[imgSrc]" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      imgSrc: null,
    };
  },
  methods: {
    showImg(key, item) {
      this.imgSrc = item.img;
      this.$emit('update:screen', key);
    },
  },
};
</script>

<style lang="less" scoped>
.layoutBox {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 500px;
  .list {
    width: 260px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    .tit {
      background: #87a9e4;
      line-height: 40px;
      font-size: 24px;
      color: #fff;
      text-align: center;
    }
    .itemBox {
      flex: 1;
      min-height: 0;
      overflow: overlay;
      .item {
        line-height: 40px;
        font-size: 24px;
        text-align: center;
        background: #fdd9d9;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }
  .view {
    flex: 1;
    margin-left: 20px;
    border: 1px solid #eee;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>