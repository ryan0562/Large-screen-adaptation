<template>
  <div class="radius-box-container" :style="boxStyles" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  mixins: [],
  props: {
    hasShadow: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '20, 86, 122',
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    boxStyles() {
      return this.hasShadow
        ? {
            borderColor: `rgba(${this.color}, 0.5)`,
            boxShadow: `inset 0px 0px 12px rgba(${this.color}, 0.4)`,
          }
        : {
            borderColor: `rgba(${this.color}, 0.5)`,
          };
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.radius-box-container {
  border-radius: 12px;
  background: rgba(13, 39, 69, 0.5);
  border: 1px solid rgba(20, 86, 122, 0.5);
  position: relative;
  .angle-left-top {
    position: absolute;
    left: -1px;
    top: -1px;
    background-color: rgba(13, 39, 69, 0.5);
  }
  .angle-right-bottom {
    position: absolute;
    right: 0;
    bottom: 1px;
    background-color: rgba(13, 39, 69, 0.5);
  }
}
</style>