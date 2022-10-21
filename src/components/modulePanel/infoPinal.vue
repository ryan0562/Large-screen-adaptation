<template>
  <el-dialog class="infoPinal" title="信息面板" :visible.sync="visible" width="600px" @close="close">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="显示头部" prop="showHeader">
        <el-radio-group v-model="form.showHeader">
          <el-radio-button :label="true">显示</el-radio-button>
          <el-radio-button :label="false">隐藏</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="显示边框" prop="hasBox">
        <el-radio-group v-model="form.hasBox">
          <el-radio-button :label="true">显示</el-radio-button>
          <el-radio-button :label="false">隐藏</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="栅格" prop="grid">
        <el-input-number v-model="form.grid" :min="1" :max="maxGrid"></el-input-number>
      </el-form-item>
      <el-form-item label="选择组件" prop="component">
        <templateItem v-if="!form.component.is" type="add" @click.native="addComponent" />
        <templateItem
          v-else
          :src="form.component.src"
          :name="form.component.is"
          :preview-src-list="[form.component.src]"
        >
          <span @click="form.component = {}">删除</span>
          <span @click="addComponent">修改</span>
        </templateItem>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
    <moduleListDialog @change="changeComponent" />
  </el-dialog>
</template>
<script>
function initForm() {
  return {
    showHeader: false,
    hasBox: false,
    grid: 4,
    component: {},
  };
}
export default {
  components: {
    templateItem: () => import('@/components/templateItem.vue'),
    moduleListDialog: () => import('@/components/addModule/moduleListDialog.vue'),
  },
  data() {
    var checkComponent = (rule, value, callback) => {
      if (!value.is) {
        callback(new Error('请选择组件'));
        return;
      }
      callback();
    };

    return {
      visible: false,
      form: initForm(),
      maxGrid:null,
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        component: [{ validator: checkComponent, required: true, message: '请选择组件' }],
        grid: [{ required: true, message: '请选择栅格' }],
      },
    };
  },
  mounted() {
    this.$bus.$on('moduleInfoPanel', this.open);
  },
  methods: {
    open(data) {
      const { module_index, modules, grid_residue } = data;
      // 编辑
      if (modules[module_index]) {
        this.form = JSON.parse(JSON.stringify(modules[module_index]));
        this.maxGrid = grid_residue + this.form.grid;
      } else {
        this.maxGrid = grid_residue;
      }

      this.visible = true;
      this.sourceData = data;
    },
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          debugger
          this.$set(this.sourceData.modules, this.sourceData.module_index, this.form);
          this.visible = false;
        }
      });
    },
    addComponent() {
      this.$bus.$emit('componentsList');
    },
    changeComponent(data) {
      this.form.component = data;
    },
    close() {
      this.form = initForm();
    },
  },
};
</script>

<style lang="less" scoped>
.infoPinal {
}
// ::v-deep {
//   .el-dialog__body {
//     padding-top: 0;
//   }
// }
</style>