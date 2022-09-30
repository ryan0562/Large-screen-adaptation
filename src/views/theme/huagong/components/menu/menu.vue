<template>
  <div class="menuBox" :style="options.style">
    <div v-for="(item, key) in options.children" :key="key" class="btn" @click="clickMenu(key)">
      {{ item.name }}
    </div>
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
          style: {},
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
  width: 60px;
  height: 60px;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50%;
  border-radius: 50%;
  margin: 3px 0;
  cursor: pointer;
  background-image: url(./bg.png);
  font-size: 12px;
  font-weight: 400;
  color: #89d1ff;
  text-align: center;
  line-height: 15px;
  &:hover {
    color:#fff;
  }
}
</style>