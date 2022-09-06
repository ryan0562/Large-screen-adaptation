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
      <dataMarkArea :key="`dataMarkArea_${index}`" :data="item" :id="index" @click.native="toggleFold(index)" />
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
      const el = this.$refs[`dataAreaBox_${index}`][0];
      this.$animateCSS(el, this.$config.animateOut).then((res) => {
        el.$el.classList.add('fold')
      });
      for (const key in this.$layout.dataArea) {
        const element = this.$layout.dataArea[key];
        if (key > index) {
          element.styles.left = parser(`${element.styles.left} - 450px`);
        }
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