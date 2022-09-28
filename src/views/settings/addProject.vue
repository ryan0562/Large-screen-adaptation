<template>
  <div>
    <el-dialog title="新建工程" :visible.sync="visible" width="800px">
      <template v-if="step === 1">
        <el-form :model="form" label-width="100px">
          <el-form-item label="工程名称">
            <el-input v-model="form.name" placeholder="请输入工程名称"></el-input>
          </el-form-item>
          <el-form-item label="页面尺寸">
            <el-radio-group v-model="form.size">
              <el-radio label="1920_1080">16:9</el-radio>
              <el-radio label="3840_1080">32:9</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div class="itemList">
              <el-radio-group v-model="form.templateKey">
                <el-radio v-for="(item, key) in templates" :key="key" :label="item.key">
                  <templateItem :src="item.img" :preview-src-list="[item.img]" :name="item.name"></templateItem>
                </el-radio>
              </el-radio-group>
            </div>
          </el-form-item>
        </el-form>
      </template>
      <layoutList v-if="step === 2" :list="layout.dataArea" :screen.sync="form.screen" />
      <span slot="footer" class="dialog-footer">
        <template v-if="step === 1">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="nextStep()">下一步</el-button>
        </template>
        <template v-if="step === 2">
          <el-button @click="step = 1">上一步</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </template>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex';

import { getLayout } from '@/utils/utils.js';

export default {
  components: {
    templateItem: () => import('@/components/templateItem.vue'),
    layoutList: () => import('./layoutList.vue'),
  },
  computed: {
    // ...mapGetters(['$layout']),
  },
  data() {
    return {
      visible: false,
      form: {
        size: '3840_1080',
        templateKey: 'huagong',
      },
      templates: {}, // 模板群
      layout: {}, //布局
      step: 1, //步骤
    };
  },
  created() {
    this.templates = this.$config.templates;
  },
  methods: {
    nextStep() {
      this.step = 2;
      this.$config.useLayout = this.form.size;
      this.$config.theme = this.form.templateKey;
      this.layout = getLayout(this.$config);
    },
    submit() {
      this.$config.screen = this.form.screen;
      this.$router.push('/main?edit=1');
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