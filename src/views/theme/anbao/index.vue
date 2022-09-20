<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" @back="goback()" />
    <!-- 数据区 左 -->
    <template v-for="(item, index) in $layout.dataArea_left">
      <dataArea
        v-if="item.visible"
        :class="[`dataArea_left_${index}`, { 'fold-left': foldAllState }, { offset: foldAllState && index !== '1' }]"
        :key="`dataArea_left_${index}`"
        :style="item.styles"
        :data="item"
        type="left"
        :id="index"
        @clickTitle="switchPage"
      />
    </template>
    <!-- 数据区 右 -->
    <template v-for="(item, index) in $layout.dataArea_right">
      <dataArea
        v-if="item.visible"
        :class="[`dataArea_right_${index}`, { 'fold-right': foldAllState }, { offset: foldAllState && index !== '1' }]"
        :key="`dataArea_right_${index}`"
        :style="item.styles"
        :data="item"
        type="right"
        :id="index"
        @clickTitle="switchPage"
      />
    </template>
    <!-- 菜单栏 -->
    <superMenu :options="$layout.menu" @clickMenu="clickMenu" />
  </div>
</template>

<script>
import './styles/index.less';

export default {
  components: {
    screen_header: () => import('./components/header/screen_header.vue'),
    dataArea: () => import('./components/dataArea/dataArea.vue'),
    dataMarkArea: () => import('./components/dataArea/dataMarkArea.vue'),
    superMenu: () => import('./components/menu/menu.vue'),
  },
  data() {
    return {
      currentPageKey: null,
      foldAllState: false,
    };
  },
  methods: {
    // type==='active'为激活状态
    clickMenu(key, type) {
      /* 折叠按钮 */
      if (key === 'fold') {
        this.foldAllState = !!type;
        return;
      }
    },
    // 切换页面
    switchPage(pageKey) {
      if (this.currentPageKey) {
        return;
      }
      switch (pageKey) {
        case 'safe':
          this.$switchDataArea('left', 1, 'safe');
          this.$switchDataArea('left', 2, 'safe');
          this.$switchDataArea('right', 1, 'production');
          break;
        case 'production':
          this.$switchDataArea('left', 1, 'production');
          this.$switchDataArea('left', 2, 'production');
          this.$switchDataArea('right', 1, 'production');
          this.$switchDataArea('right', 2, 'production');
          break;
      }
      // 当前页面赋值
      this.currentPageKey = pageKey;
    },
  },
};
</script>

<style lang="less" scoped>
.fold-left {
  transform: perspective(1200px) rotateY(60deg) !important;
  transform-origin: left center;
  &.offset {
    margin-left: -300px;
  }
}
.fold-right {
  transform: perspective(1200px) rotateY(-60deg) !important;
  transform-origin: right center;
  &.offset {
    margin-right: -300px;
  }
}

.fold {
  opacity: 0;
  z-index: -1;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
}
</style>