<template>
  <div class="mark" :style="style"></div>
</template>

<script>
import { parser } from 'css-math';

export default {
  components: {
    dataBlock: () => import('./dataBlock.vue'),
  },
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    id: {
      type: [String, Number],
      required: true,
    },
    /* 左还是右 */
    type: {
      required: true,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right'].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    style() {
      if (this.type === 'left') {
        return {
          left: parser(`${this.data.styles.left} + ${this.data.styles.width} / 2 + ${this.data.markOffset || 0}`),
        };
      }
      if (this.type === 'right') {
        return {
          right: parser(`${this.data.styles.right} + ${this.data.styles.width} / 2 + ${this.data.markOffset|| 0}`),
          left: 'auto',
        };
      }
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.mark {
  position: absolute;
  width: 28px;
  height: 36px;
  cursor: pointer;
  background: var(--dataArea_mark-background);
  top: 45px;
  left: 50%;
  margin-left: -14px;
  transition: all 1s ease;
}
</style>