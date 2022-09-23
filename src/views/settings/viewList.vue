<template>
  <div class="viewListBox">
    <el-tabs v-model="activeName">
      <el-tab-pane label="工程库" name="projects" lazy>
        <div class="itemList">
          <div class="item add" @click="$refs['addProject'].visible = true">
            <i class="el-icon-plus icon"></i>
            <div>新建大屏</div>
          </div>
          <div class="item" v-for="(item, key) in projects" :key="key">
            <img :src="item.thumbnail" alt="" />
            <span>{{ item.name }}</span>
          </div>
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
  .item {
    position: relative;
    margin: 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 258px;
    height: 184px;
    border: 1px solid #3a4659;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    > img {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
    &.add {
      border: 1px solid #212528;
      font-size: 14px;
      color: #8eeeff;
      background-image: linear-gradient(-90deg, rgba(0, 222, 255, 0.39), rgba(0, 174, 255, 0.19));
      box-shadow: 0 0 10px 0 rgba(55, 224, 255, 0.3);

      .icon {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>