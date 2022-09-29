<template>
  <div class="viewListBox">
    <el-tabs v-model="activeName">
      <el-tab-pane label="工程库" name="projects" lazy>
        <div class="itemList">
          <templateItem type="add" @click.native="$refs['addProject'].visible = true">新建工程</templateItem>
          <templateItem
            v-for="(item, key) in $mti_projects"
            :key="key"
            :src="item.img"
            :name="item.name"
            @click.native="loadProject(item)"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="模板库" name="templates" lazy>
        <div class="itemList">
          <templateItem
            v-for="(item, key) in $mti_templates"
            :key="key"
            :src="item.img"
            :preview-src-list="[item.img]"
            :name="item.name"
          ></templateItem>
        </div>
      </el-tab-pane>
      <el-tab-pane label="组件库" name="components" lazy> </el-tab-pane>
    </el-tabs>
    <addProject ref="addProject" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  components: {
    addProject: () => import('./addProject.vue'),
    templateItem: () => import('@/components/templateItem.vue'),
  },
  computed: {
    // ...mapGetters(['$layout']),
  },
  data() {
    return {
      activeName: 'projects',
      projects: {},
    };
  },
  created() {
  },
  methods: {
    loadProject(item) {
      this.$config.useLayout = item.config.useLayout;
      this.$config.theme = item.config.theme;
      this.$config.screen = item.config.screen;

      this.$ls.set('project', item.layout);
      this.$router.push('/main?edit=1&project=1');
    },
  },
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