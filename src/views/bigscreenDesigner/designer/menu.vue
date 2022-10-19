<template>
  <div class="menuBox">
    <div class="item act" v-for="(item) in menu" :key="item.key" @click="$emit('handle', item.key)">
      <div :class="['icon', item.icon]"></div>
      <div>{{ item.name }}</div>
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

<style lang="less" scoped>
.menuBox {
  .item {
    width: 80%;
    margin: 10px auto;
    text-align: center;
    border-radius: 8px;
    padding: 10px 0;
    cursor: pointer;
    &.act {
      background: rgba(64, 158, 255, 0.1);
      color: #409eff;
    }
    .icon {
      font-size: 20px;
    }
  }
}
</style>