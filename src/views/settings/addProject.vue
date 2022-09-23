<template>
  <div>
    <el-dialog title="新建工程" :visible.sync="visible" width="800px">
      <el-form :model="form" label-width="100px">
        <el-form-item label="工程名称">
          <el-input v-model="form.name" placeholder="请输入工程名称"></el-input>
        </el-form-item>
        <el-form-item label="页面尺寸">
          <el-radio-group v-model="form.size">
            <el-radio label="16_9">16:9</el-radio>
            <el-radio label="32_9">32:9</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <div class="itemList">
            <el-radio-group v-model="form.templateKey">
              <el-radio v-for="(item, key) in projects" :key="key" :label="item.key">
                <templateItem
                  :src="item.thumbnail"
                  :preview-src-list="[item.thumbnail]"
                  :name="item.name"
                ></templateItem>
              </el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
    templateItem: () => import('./templateItem.vue'),
  },
  data() {
    return {
      visible: false,
      form: {},
      projects: {},
    };
  },
  created() {
    this.projects = window.$mti_templates;
  },
  methods: {
    submit() {
      let link = document.createElement('a');
      link.download = 'config.js';
      link.href = 'data:text/plain,' + `export default ${JSON.stringify(window.$layout)}`;
      link.click();
    },
  },
};
</script>

<style lang="less" scoped>
.itemList {
  display: flex;
  flex-wrap: wrap;
  .item {
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
    > .el-image {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
  }
}
</style>