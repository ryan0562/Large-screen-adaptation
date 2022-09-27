<template>
  <div class="controlPanelBox">
    <div class="toolsbar">
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['$layout']),
  },
  created() {},
};
</script>
<style lang="less">
.controlPanelBox {
  .toolsbar {
    position: fixed;
    right: 20px;
    top: 20px;
  }
}
</style>