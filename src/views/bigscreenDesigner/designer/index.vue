<!-- 大屏设计器 -->
<template>
  <div class="layout">
    <headBox />
    <div class="main">
      <menuBox class="m-l" :menu="menu" />
      <rulerTool
        v-model="dashboard.presetLine"
        class="vueRuler"
        :step-length="50"
        :parent="true"
        :position="'relative'"
        :is-scale-revise="true"
        :visible.sync="dashboard.presetLineVisible"
      >
        <pageMain :type="page.type" />
      </rulerTool>
      <div class="m-r"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    rulerTool: () => import('vue-ruler-tool'),
    pageMain: () => import('@/views/theme/main.vue'),
    headBox: () => import('./head.vue'),
    menuBox: () => import('./menu.vue'),
  },
  data() {
    return {
      // 面板
      dashboard: {
        id: null,
        title: '', // 大屏页面标题
        width: 1920, // 大屏设计宽度
        height: 1080, // 大屏设计高度
        backgroundColor: '', // 大屏背景色
        backgroundImage: '', // 大屏背景图片
        refreshSeconds: null, // 大屏刷新时间间隔
        presetLine: [], // 辅助线
        presetLineVisible: true, // 辅助线是否显示
      },
      // 左侧菜单
      menu: [
        {
          icon: 'el-icon-data-analysis',
          name: '场景',
        },
        // {
        //   icon: 'el-icon-film',
        //   name: '布局',
        // },
      ],
      // 页面主体
      page: {
        type: 'edit',
      },
    };
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background: #18181c;
  display: flex;
  flex-direction: column;
  color: #d5d5d6;
  .main {
    flex: 1;
    min-height: 0;
    display: flex;
    .vueRuler {
      flex: 1;
      min-width: 0;
    }
    .m-l {
      width: 65px;
      background: #1e1e1f;
    }
    .m-r {
      width: 350px;
    }
  }
}
.vueRuler {
  ::v-deep {
    .vue-ruler-content {
      width: 100%;
      height: 100%;
      overflow: hidden;
      &:hover {
        overflow: overlay;
      }
    }
  }
}
</style>