<template>
  <div class="menuBox">
    <div class="item" v-for="(item, key) in menu" :key="key">
      <i :class="item.icon"></i>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>.
.menuBox {
  
}
</style>