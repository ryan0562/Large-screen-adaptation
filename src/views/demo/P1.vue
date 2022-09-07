<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" />
    <!-- 数据区 -->
    <template v-for="(item, index) in $layout.dataArea">
      <dataArea
        v-if="item.visible"
        :key="`dataArea_${index}`"
        :ref="`dataAreaBox_${index}`"
        :style="item.styles"
        :data="item"
        :id="index"
      />
      <dataMarkArea
        :ref="`dataMarkArea_${index}`"
        :key="`dataMarkArea_${index}`"
        :data="item"
        :id="index"
        @click.native="toggleFold(index)"
      />
    </template>
    <!-- 数据区标记 -->
  </div>
</template>

<script>
import { parser } from 'css-math';

export default {
  components: {
    screen_header: () => import('@/components/header/screen_header.vue'),
    dataArea: () => import('@/components/dataArea/dataArea.vue'),
    dataMarkArea: () => import('@/components/dataArea/dataMarkArea.vue'),
  },
  methods: {
    toggleFold(index) {
      // vfor后ref会返回数组
      const dataArea_el = this.$refs[`dataAreaBox_${index}`][0];
      if (dataArea_el.$el.className.indexOf('fold') > -1) {
        this.$animateCSS(dataArea_el, this.$config.animateIn).then((res) => {
          dataArea_el.$el.classList.remove('fold');
        });
        // 动态后续区域
        for (const key in this.$layout.dataArea) {
          const element = this.$layout.dataArea[key];
          if (key > index) {
            element.styles.left = parser(`${element.styles.left} + 450px`);
          }
        }
        const dataMarkArea_el = this.$refs[`dataMarkArea_${index}`][0];
        dataMarkArea_el.relativeLeft = 0;
      } else {
        this.$animateCSS(dataArea_el, this.$config.animateOut).then((res) => {
          dataArea_el.$el.classList.add('fold');
        });
        // 动态后续区域
        for (const key in this.$layout.dataArea) {
          const element = this.$layout.dataArea[key];
          if (key > index) {
            element.styles.left = parser(`${element.styles.left} - 450px`);
          }
        }
        const dataMarkArea_el = this.$refs[`dataMarkArea_${index}`][0];
        dataMarkArea_el.relativeLeft = parser(`-200px + 40px*${index}`);
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