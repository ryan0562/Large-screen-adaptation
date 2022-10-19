<!-- 大屏设计器 -->
<template>
  <div class="head">
    <div class="h-l">
      <el-select v-model="screen" placeholder="选择场景">
        <el-option v-for="(item, key) in screenList" :key="key" :label="key" :value="key"> </el-option>
      </el-select>
    </div>
    <div class="h-r">
      <el-button class="wk-btn" icon="el-icon-switch-button" @click="cancel">取消</el-button>
      <el-button class="wk-btn" icon="el-icon-data-line" @click="save(true)">保存</el-button>
      <el-button class="wk-btn" icon="el-icon-data-line" @click="preview">预览</el-button>
      <el-button class="wk-btn" icon="el-icon-position" @click="publish">发布</el-button>
    </div>
  </div>
</template>

<script>
import { projectSave } from '@/api/project.js';

export default {
  components: {},
  data() {
    return {
      screen: null,
      screenList: {},
    };
  },
  watch: {
    screen: {
      // immediate: true,
      handler(v, ov) {
        if (!ov) {
        }
        window.$config.screen = v;
      },
    },
  },
  created() {
    this.getScreen();
  },
  methods: {
    getScreen() {
      const data = this.$ls.get('project');
      this.screenList = data.layout[data.config.useLayout]?.dataArea;
      this.screen = window.$config.screen;
    },
    // 保存
    save(hasMsg) {
      const data = this.$ls.get('project');
      data.layout[data.config.useLayout] = window.$layout;
      this.$ls.set('project', data);
      if (hasMsg) {
        this.$message.success('操作成功');
      }
    },
    // 预览
    preview() {
      this.save();
      open('/#/main');
    },
    // 发布
    publish() {
      this.save();
      const data = this.$ls.get('project');
      projectSave(data).then((res) => {
        this.$router.replace('/settings/viewList');
      });
    },
    cancel() {
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