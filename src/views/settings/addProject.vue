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
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible:false,
      form: {},
    };
  },
};
</script>

<style lang="less" scoped>
</style>