<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" @back="goback()" />
    <!-- 数据区 左 -->
    <template v-for="(item, index) in $layout.dataArea_left">
      <dataArea
        v-if="item.visible"
        :class="`dataArea_left_${index}`"
        :key="`dataArea_left_${index}`"
        :style="item.styles"
        :data="item"
        type="left"
        :id="index"
        @clickTitle="switchPage"
      />
      <dataMarkArea
        :class="`dataMarkArea_left_${index}`"
        :key="`dataMarkArea_left_${index}`"
        :data="item"
        :id="index"
        type="left"
        @click.native="$toggleFold('left', index)"
      />
    </template>
    <!-- 数据区 右 -->
    <template v-for="(item, index) in $layout.dataArea_right">
      <dataArea
        v-if="item.visible"
        :class="`dataArea_right_${index}`"
        :key="`dataArea_right_${index}`"
        :style="item.styles"
        :data="item"
        type="right"
        :id="index"
        @clickTitle="switchPage"
      />
      <dataMarkArea
        :class="`dataMarkArea_right_${index}`"
        :key="`dataMarkArea_right_${index}`"
        :data="item"
        :id="index"
        type="right"
        @click.native="$toggleFold('right', index)"
      />
    </template>
  </div>
</template>
<script>
export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
    dataArea: () => import('@/components/dataArea/dataArea.vue'),
    dataMarkArea: () => import('@/components/dataArea/dataMarkArea.vue'),
  },
  data() {
    return {
      currentPageKey: null,
    };
  },
  methods: {
    // 返回
    goback() {
      if (!this.currentPageKey) {
        this.$confirm('此操作将退出当前系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          //
        });
        return;
      } else {
        // 默认就是首页
        this.$switchDataArea('left', 1, 'safe');
        this.$switchDataArea('left', 2, 'production');
        this.$switchDataArea('right', 1, 'safe');
        this.$switchDataArea('right', 2, 'production');
        this.currentPageKey = null;
      }
    },
    // 切换页面
    switchPage(pageKey) {
      if(this.currentPageKey){
        return
      }
      switch (pageKey) {
        case 'safe':
          this.$switchDataArea('left', 1, 'safe');
          this.$switchDataArea('left', 2, 'safe');
          this.$switchDataArea('right', 1, 'safe');
          this.$switchDataArea('right', 2, 'safe');
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

</style>