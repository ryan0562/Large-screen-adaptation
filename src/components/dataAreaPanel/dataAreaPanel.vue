<template>
  <el-dialog class="dataAreaPanel" title="信息面板" :visible.sync="visible" width="600px" @close="close">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
function initForm() {
  return {
    title: '',
  };
}
export default {
  components: {},
  data() {
    return {
      visible: false,
      form: initForm(),
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
      },
    };
  },
  mounted() {
    this.$bus.$on('dataAreaPanel', this.open);
  },
  methods: {
    open(data) {
      this.sourceData = data;
      this.visible = true;
      this.form = JSON.parse(JSON.stringify(data));
    },
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          Object.assign(this.sourceData, this.form);
          this.visible = false;
        }
      });
    },
    close() {
      this.form = initForm();
    },
  },
};
</script>

<style lang="less" scoped>
// ::v-deep {
//   .el-dialog__body {
//     padding-top: 0;
//   }
// }
</style>