<template>
  <div class="col-block" :style="styles">
    <div class="title" v-if="showTitle" :title="title">
      <span class="out-circle">
        <span class="in-circle"></span>
      </span>
      <span class="title-name ell" v-if="!!title" v-html="title" @click="$emit('title-click')"></span>
      <span class="title-right">
        <slot name="headerright"></slot>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    title: {
      type: String,
      default: '',
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>

<style scoped lang="less">
.col-block {
  position: relative;
  border: 1px solid transparent;
  border-left-color: #0d3750;
  border-right-color: #0d3750;
  background-color: #11233c;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .title {
    padding-top: 10px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
    }
    .title-name {
      flex: 1;
    }
    .out-circle {
      width: 16px;
      height: 16px;
      border: 1px solid rgba(0, 255, 255, 0.35);
      border-radius: 50%;
      text-align: center;
      margin-right: 5px;
      .in-circle {
        width: 6px;
        height: 6px;
        border: 2px solid #00ffff;
        border-radius: 50%;
      }
    }
    &-right {
      position: absolute;
      right: 15px;
    }
  }
}
</style>
