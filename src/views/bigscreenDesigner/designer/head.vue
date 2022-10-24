<!-- 大屏设计器 -->
<template>
  <div class="head">
    <div class="h-l">
      <el-select v-model="config.screenResolution" placeholder="选择分辨率" @change="screenResolutionChange">
        <el-option v-for="item in screenResolutionList" :key="item" :label="item" :value="item"> </el-option>
      </el-select>
      <el-select v-model="config.screen" placeholder="选择场景">
        <el-option v-for="(item, key) in screenList" :key="key" :label="key" :value="key"> </el-option>
      </el-select>
    </div>
    <div class="h-r">
      <el-button class="wk-btn" icon="el-icon-switch-button" @click="cancel">取消</el-button>
      <el-button class="wk-btn" icon="el-icon-data-line" @click="save(true)">保存</el-button>
      <el-button class="wk-btn" icon="el-icon-data-line" @click="delScreen(true)">删除场景</el-button>
      <el-button class="wk-btn" icon="el-icon-data-line" @click="preview">预览</el-button>
      <el-button class="wk-btn" icon="el-icon-position" @click="publish">发布</el-button>
    </div>
  </div>
</template>

<script>
import { projectSave } from '@/api/project.js';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      screen: null,
    };
  },
  computed: {
    ...mapState(['config', 'bigScreenModel']),
    ...mapGetters(['layout']),
    screenList() {
      return this.layout?.dataArea;
    },
    screenResolutionList() {
      const list = ['1920_1080', '3840_1080'];
      return Object.keys(this.bigScreenModel).filter((item) => list.includes(item));
    },
  },
  created() {},
  methods: {
    screenResolutionChange() {
      const firstKey = Object.keys(this.layout.dataArea)[0];
      this.config.screen = firstKey;
      // 修改分辨率后，重新渲染地图
      this.$nextTick(() => {
        window.map.map.updateSize();
      });
    },
    // 删除当前场景
    delScreen() {
      delete this.layout.dataArea[this.config.screen];
      const firstKey = Object.keys(this.layout.dataArea)[0];
      this.config.screen = firstKey;
    },
    // 保存
    save(hasMsg) {
      const data = this.$ls.get('project');

      data.bigScreenModel = this.bigScreenModel;
      data.config = this.config;

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
  .h-l {
    > * {
      margin-right: 10px;
    }
  }
}
</style>