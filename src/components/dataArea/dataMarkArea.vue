<template>
  <div class="mark" :style="`left:${left}`" @click="toggleFold(`.dataAreaBox_${data.id}`)"></div>
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
  },
  computed: {
    left() {
      return parser(`${this.data.styles.left} + ${this.data.styles.width} / 2`);
    },
  },
  methods: {
    toggleFold(el) {
      this.$animateCSS(el, this.data.animate || this.$config.animate).then((res) => {
        // this.$animateCSS(el, 'widthOut')
        this.$refs['dataArea'].style.display = 'none';
      });
    },
  },
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