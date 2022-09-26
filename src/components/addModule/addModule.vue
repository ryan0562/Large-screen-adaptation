<template>
  <div class="addModuleBox" @click="$bus.$emit('changeModule')">
    <i class="el-icon-plus icon"></i>
  </div>
</template>

<script>
  export default {
    name:'addModuleBox'
  }
</script>

<style lang="less" scoped>
  .addModuleBox {
    width: 100%;
    height: 100%;
    border: 1px dashed #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon {
      font-size: 30px;
    }
  }
</style>