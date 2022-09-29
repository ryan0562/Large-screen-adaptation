<template>
  <div class="controlPanelBox">
    <div class="toolsbar">
      <el-button type="primary" @click="saveProject">保存</el-button>
    </div>
  </div>
</template>

<script>
import { projectSave } from '@/api/before.js';
export default {
  computed: {},
  created() {},
  methods: {
    saveProject() {
      const data = {
        name: '接口测试',
        img: '/templates/huagong/img.png',
        config: window.$config,
        layout: {
          [window.$config.useLayout]: window.$layout,
        },
      };
      projectSave(data).then(res=>{
        this.$router.replace('/settings/viewList');
      })
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