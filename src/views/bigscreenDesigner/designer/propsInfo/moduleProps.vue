<template>
  <el-form label-position="top">
    <el-form-item label="标题" prop="title">
      <el-input v-model="data.title"></el-input>
    </el-form-item>
    <el-form-item label="显示头部" prop="showHeader">
      <el-radio-group v-model="data.showHeader">
        <el-radio-button :label="true">显示</el-radio-button>
        <el-radio-button :label="false">隐藏</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="显示边框" prop="hasBox">
      <el-radio-group v-model="data.hasBox">
        <el-radio-button :label="true">显示</el-radio-button>
        <el-radio-button :label="false">隐藏</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="栅格" prop="grid">
      <el-input-number v-model="data.grid" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="选择组件" prop="component">
      <templateItem v-if="!data.component?.is" type="add" @click.native="addComponent" />
      <templateItem
        v-else
        :src="data.component?.src"
        :name="data.component?.is"
        :preview-src-list="[data.component?.src]"
      >
        <span @click="data.component = {}">删除</span>
        <span @click="addComponent">修改</span>
      </templateItem>
    </el-form-item>
    <moduleListDialog @change="changeComponent" />
  </el-form>
</template>

<script>
export default {
  components: {
    templateItem: () => import('@/components/templateItem.vue'),
    moduleListDialog: () => import('@/components/addModule/moduleListDialog.vue'),
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    addComponent() {
      this.$bus.$emit('componentsList');
    },
    changeComponent(data) {
      this.data.component = data;
    },
  },
};
</script>

<style lang="less" scoped>
</style>