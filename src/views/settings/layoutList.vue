<template>
  <div class="layoutBox">
    <div class="list">
      <div class="tit">布局列表</div>
      <div class="ls">
        
      </div>
    </div>
    <div class="view"></div>
  </div>
</template>

<script>
export default {};
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
    .ls {
      flex: 1;
      min-height: 0;
      overflow: overlay;
    }
  }
  .view {
    flex: 1;
    margin-left: 20px;
    border: 1px solid #eee;
  }
}
</style>