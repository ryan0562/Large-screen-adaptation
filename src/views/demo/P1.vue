<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" @back="switchPage()"/>
    <!-- 数据区 左 -->
    <template v-for="(item, index) in $layout.dataArea_left">
      <dataArea
        v-if="item.visible"
        :class="`dataArea_left_${index}`"
        :key="`dataArea_left_${index}`"
        :ref="`dataArea_left_${index}`"
        :style="item.styles"
        :data="item"
        type="left"
        :id="index"
        @clickTitle="switchPage"
      />
      <dataMarkArea
        :class="`dataMarkArea_left_${index}`"
        :ref="`dataMarkArea_left_${index}`"
        :key="`dataMarkArea_left_${index}`"
        :data="item"
        :id="index"
        type="left"
        @click.native="toggleFoldLeft(index, 'left')"
      />
    </template>
    <!-- 数据区 右 -->
    <template v-for="(item, index) in $layout.dataArea_right">
      <dataArea
        v-if="item.visible"
        :class="`dataArea_right_${index}`"
        :key="`dataArea_right_${index}`"
        :ref="`dataArea_right_${index}`"
        :style="item.styles"
        :data="item"
        type="right"
        :id="index"
        @clickTitle="switchPage"
      />
      <dataMarkArea
        :class="`dataMarkArea_right_${index}`"
        :ref="`dataMarkArea_right_${index}`"
        :key="`dataMarkArea_right_${index}`"
        :data="item"
        :id="index"
        type="right"
        @click.native="toggleFoldLeft(index, 'right')"
      />
    </template>
  </div>
</template>toggleFoldLeft

<script>
import { parser } from 'css-math';

export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
    dataArea: () => import('@/components/dataArea/dataArea.vue'),
    dataMarkArea: () => import('@/components/dataArea/dataMarkArea.vue'),
  },
  methods: {
    // 切换页面
    switchPage(pageKey) {
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
        // 默认就是首页
        default:
          this.$switchDataArea('left', 1, 'safe');
          this.$switchDataArea('left', 2, 'production');
          this.$switchDataArea('right', 1, 'safe');
          this.$switchDataArea('right', 2, 'production');
          break;
      }
      
    },
    /**
     *
     * @param: index:模块区的索引值
     * @param: type:left|right
     */
    toggleFoldLeft(index, type) {
      // vfor后ref会返回数组
      const dataArea_el = this.$refs[`dataArea_${type}_${index}`][0];
      const dataArea = type === 'left' ? this.$layout.dataArea_left : this.$layout.dataArea_right;
      const dataMarkArea_el = this.$refs[`dataMarkArea_${type}_${index}`][0];

      if (dataArea_el.$el.className.indexOf('fold') > -1) {
        this.$animateCSS(dataArea_el, this.$config.animateIn).then((res) => {
          dataArea_el.$el.classList.remove('fold');
        });
        // 动态后续区域
        for (const key in dataArea) {
          const element = dataArea[key];
          if (key > index) {
            element.styles[type] = parser(`${element.styles[type]} + 450px`);
          }
        }
        dataMarkArea_el.relativePX = 0;
      } else {
        this.$animateCSS(dataArea_el, this.$config.animateOut).then((res) => {
          dataArea_el.$el.classList.add('fold');
        });
        // 动态后续区域
        for (const key in dataArea) {
          const element = dataArea[key];
          if (key > index) {
            element.styles[type] = parser(`${element.styles[type]} - 450px`);
          }
        }

        dataMarkArea_el.relativePX = parser(`-200px + 40px*${index}`);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.fold {
  opacity: 0;
  z-index: -1;
}
</style>