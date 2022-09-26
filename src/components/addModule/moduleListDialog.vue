<template>
  <div>
    <el-dialog title="组件库" :visible.sync="visible" width="800px">
      <div class="itemList">
        <el-radio-group v-model="form.templateKey">
          <el-radio v-for="(item, key) in templates" :key="key" :label="item.key">
            <templateItem :src="item.thumbnail" :preview-src-list="[item.thumbnail]" :name="item.name"></templateItem>
          </el-radio>
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    templateItem: () => import('./templateItem.vue'),
    layoutList: () => import('./layoutList.vue'),
  },
  computed: {
    ...mapGetters(['$layout']),
  },
  data() {
    return {
      visible: false,
      form: {
        size: '3840_1080',
        templateKey: 'huagong',
      },
      templates: {}, // 模板群
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
    },
    submit() {
      this.$config.screen = this.form.screen;
      this.$router.push('/main');
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