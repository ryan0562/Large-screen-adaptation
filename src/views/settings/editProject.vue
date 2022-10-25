<template>
  <div>
    <el-dialog title="新建工程" :visible.sync="visible" width="800px">
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
              <el-radio v-for="(item, key) in $mti_templates" :key="key" :label="item.key">
                <templateItem :src="item.img" :preview-src-list="[item.img]" :name="item.name"></templateItem>
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
import { getLayout } from '@/utils/utils.js';

export default {
  components: {
    templateItem: () => import('@/components/templateItem.vue'),
    layoutList: () => import('./layoutList.vue'),
  },
  computed: {},
  data() {
    return {
      visible: false,
      form: {
        size: '3840_1080',
        templateKey: 'huagong',
      },
      // templates: {}, // 模板群
      layout: {}, //布局
    };
  },
  created() {
    // this.templates = this.$mti_templates;
  },
  methods: {
    submit() {
      this.$ls.set('project', {
        img: '/templates/huagong/img.png',
        config: Object.assign(window.$config, {
          screenResolution: this.form.size,
          theme: this.form.templateKey,
          screen: this.form.screen,
          name: this.form.name,
        }),
        bigScreenModel: this.$mti_templates[this.form.templateKey],
      });
      // this.$router.push('/main?edit=1');
      this.$router.push('/bigscreen/designer?edit=1');
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