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
  computed: {
    left() {
      return parser(`${this.data.styles.left} + ${this.data.styles.width} / 2`);
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
}
</style>