<template>
  <div class="mark" :style="`left:${left}`"></div>
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
  },
  data() {
    return {
      relativeLeft: 0,
    };
  },
  computed: {
    // initLeft() {
    //   return parser(`${this.data.styles.left} + ${this.data.styles.width} / 2 + ${this.relativeLeft}`);
    // },
    left() {
      return parser(`${this.data.styles.left} + ${this.data.styles.width} / 2 + ${this.relativeLeft}`);
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