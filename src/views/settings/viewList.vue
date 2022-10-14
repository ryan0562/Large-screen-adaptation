<template>
  <div class="viewListBox">
    <el-tabs v-model="activeName">
      <el-tab-pane label="工程库" name="projects" lazy>
        <div class="itemList">
          <templateItem type="add" @click.native="$refs['addProject'].visible = true">新建工程</templateItem>
          <templateItem v-for="(item, key) in list" :key="key" :src="item.img" :name="item.config.name">
            <span @click="loadProject(item)">预览</span>
            <span @click="loadProject(item, 'edit')">编辑</span>
            <span @click="delProject(item)">删除</span>
          </templateItem>
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
      <el-tab-pane label="组件库" name="components" lazy>
        <div class="itemList">
          <templateItem
            v-for="(item, key) in $moduleList"
            :key="key"
            :src="`http://10.168.4.28:17011${item.comImg}`"
            :preview-src-list="[`http://10.168.4.28:17011${item.comImg}`]"
            :name="item.name"
          ></templateItem>
        </div>
      </el-tab-pane>
    </el-tabs>
    <addProject ref="addProject" />
  </div>
</template>

<script>
import { getProjectList, projectDelete } from '@/api/project.js';
import qs from 'qs';

export default {
  components: {
    addProject: () => import('./addProject.vue'),
    templateItem: () => import('@/components/templateItem.vue'),
  },
  computed: {},
  data() {
    return {
      activeName: 'projects',
      list: {},
    };
  },
  created() {
    this.getProjectListApi();
  },
  methods: {
    // 删除项目
    delProject(item) {
      projectDelete({ path: item.projectId }).then((res) => {
        this.$message.success('删除成功');
        this.getProjectListApi();
      });
    },
    // 获取项目
    async getProjectListApi() {
      const { data = [] } = await getProjectList();
      this.list = data;
    },
    // 载入项目
    loadProject(item, type) {
      // this.$config.useLayout = item.config.useLayout;
      // this.$config.theme = item.config.theme;
      // this.$config.screen = item.config.screen;

      this.$ls.set('project', item);

      const params = qs.stringify({
        edit: type === 'edit' ? '1' : undefined,
        project: 1,
      });
      this.$router.push(`/main?${params}`);
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