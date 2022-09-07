<template>
  <div>
    <screen_header v-if="$layout.header" :options="$layout.header" />
    <!-- 数据区 -->
    <template v-for="(item, index) in $layout.dataAreaLeft">
      <dataArea
        v-if="item.visible"
        :key="`dataAreaLeft_${index}`"
        :ref="`dataAreaLeft_${index}`"
        :style="item.styles"
        :data="item"
        :id="index"
      />
      <dataMarkArea
        :ref="`dataMarkAreaLeft_${index}`"
        :key="`dataMarkAreaLeft_${index}`"
        :data="item"
        :id="index"
        type="left"
        @click.native="toggleFoldLeft(index, 'left')"
      />
    </template>
    <template v-for="(item, index) in $layout.dataAreaRight">
      <dataArea
        v-if="item.visible"
        :key="`dataAreaRight_${index}`"
        :ref="`dataAreaRight_${index}`"
        :style="item.styles"
        :data="item"
        :id="index"
      />
      <dataMarkArea
        :ref="`dataMarkAreaRight_${index}`"
        :key="`dataMarkAreaRight_${index}`"
        :data="item"
        :id="index"
        type="right"
        @click.native="toggleFoldLeft(index, 'right')"
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
    toggleFoldLeft(index, type) {
      // vfor后ref会返回数组
      const dataArea_el =
        type === 'left' ? this.$refs[`dataAreaLeft_${index}`][0] : this.$refs[`dataAreaRight_${index}`][0];
      const dataArea = type === 'left' ? this.$layout.dataAreaLeft : this.$layout.dataAreaRight;
      const dataMarkArea_el =
        type === 'left' ? this.$refs[`dataMarkAreaLeft_${index}`][0] : this.$refs[`dataMarkAreaRight_${index}`][0];

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