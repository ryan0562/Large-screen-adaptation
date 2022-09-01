<template>
  <div
    class="col-block"
    :style="{width, height, marginTop}"
  >
    <div
      class="title"
      v-if="(!!title) || showLabel"
      :title="title"
    >
      <span class="out-circle">
        <span class="in-circle"></span>
      </span>
      <span
        class="title-name ell"
        v-if="!!title"
        v-html="title"
        @click="$emit('title-click')"
      ></span>
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
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100px'
    },
    title: {
      type: String,
      default: ''
    },
    marginTop: {
      type: String,
      default: '12px'
    },
    showLabel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.col-block {
  position: relative;
  border: 1px solid transparent;
  border-left-color: #0d3750;
  border-right-color: #0d3750;
  background-color: #11233c;
  // @include bgImg("~@/assets/images/components/mainCol/bg1.png");
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    @include bgImg('~@/assets/images/components/mainCol/bg-line.png');
  }
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    @include bgImg('~@/assets/images/components/mainCol/bg-line.png');
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
      @include flex();
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
