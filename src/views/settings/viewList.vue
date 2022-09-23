<template>
  <div class="viewListBox">
    <el-tabs v-model="activeName">
      <el-tab-pane label="工程库" name="projects" lazy>
        <div class="itemList">
          <templateItem type="add" @click.native="$refs['addProject'].visible = true">新建工程</templateItem>
          <templateItem
            v-for="(item, key) in projects"
            :key="key"
            :src="item.thumbnail"
            :preview-src-list="[item.thumbnail]"
            :name="item.name"
          ></templateItem>
        </div>
      </el-tab-pane>
      <el-tab-pane label="模板库" name="templates" lazy> </el-tab-pane>
      <el-tab-pane label="组件库" name="components" lazy> </el-tab-pane>
    </el-tabs>
    <addProject ref="addProject" />
  </div>
</template>

<script>
export default {
  components: {
    addProject: () => import('./addProject.vue'),
    templateItem: () => import('./templateItem.vue'),
  },
  data() {
    return {
      activeName: 'projects',
      projects: {},
    };
  },
  created() {
    this.projects = window.$mti_templates;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.viewListBox {
  width: 100%;
  height: 100%;
  background: #171b22;
  ::v-deep {
    .el-tabs__nav-wrap {
      &::after {
        background: #212528;
      }
    }
    .el-tabs__active-bar {
      background-color: #00baff;
    }
    .el-tabs__item {
      padding: 0 20px !important;
      color: #fff;
      &.is-active {
        color: #00baff;
      }
    }
  }
}
.itemList {
  display: flex;
  flex-wrap: wrap;
}
</style>