<template>
  <div class="menuBox" :style="options.styles">
    <div
      v-for="(item, index) in options.children"
      :key="index"
      :class="['btn', item, { act: activeMenu.includes(item) }]"
      @click="clickMenu(item)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
      default() {
        return {
          styles: {},
        };
      },
    },
  },
  data() {
    return {
      activeMenu: [],
    };
  },
  methods: {
    clickMenu(item) {
      const index = this.activeMenu.indexOf(item);
      if (index > -1) {
        this.activeMenu.splice(index, 1);
        this.$emit('clickMenu', item);
      } else {
        this.activeMenu.push(item);
        this.$emit('clickMenu', item, 'active');
      }
    },
  },
};
</script>

<style lang="less" scoped>
.menuBox {
  position: absolute;
}
.btn {
  width: 100%;
  height: 45px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50%;
  border-radius: 50%;
  margin: 3px 0;
  cursor: pointer;
}
.fold {
  background-image: url(./fold.png);
  &.act {
    background-image: url(./open.png);
  }
}
</style>