<template>
  <div class="controlPanelBox">
    <div class="toolsbar">
      <el-button type="danger" @click="cancelProject">取消</el-button>
      <el-button type="primary" @click="saveProject">保存</el-button>
    </div>
  </div>
</template>

<script>
import { projectSave } from '@/api/project.js';
export default {
  computed: {},
  created() {},
  methods: {
    saveProject() {
      const data = this.$ls.get('project');
      data.layout[window.$config.useLayout] = window.$layout;

      projectSave(data).then((res) => {
        this.$router.replace('/settings/viewList');
      });
    },
    cancelProject() {
      this.$confirm('是否取消?', '提示', {
        type: 'warning',
      })
        .then(() => {
          this.$router.replace('/settings/viewList');
        })
        .catch(() => {});
    },
  },
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