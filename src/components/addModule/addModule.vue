<template>
  <div class="addModuleBox" @click.stop="showModules">
    <i class="el-icon-plus icon"></i>
  </div>
</template>

<script>
export default {
  name: 'addModuleBox',
  computed: {},
  props: ['data'],
  methods: {
    showModules() {
      this.$bus.$emit('moduleInfoPanel', this.data);
    },
  },
};
</script>

<style lang="less" scoped>
.addModuleBox {
  width: 100%;
  height: calc(100% / 12);
  margin-top: 12px;
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