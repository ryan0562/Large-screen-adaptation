<template>
  <div class="grid-container">
    <div class="header">头部</div>
    <div class="footer">底部</div>
    <div class="functionArea-left">左侧功能区</div>
    <div class="functionArea-right">右侧功能区</div>
    <div class="modelArea-left">左侧模块区</div>
    <div class="modelArea-right">右侧模块区</div>
    <div class="modelArea-bottom">底侧模块区</div>
    <div class="modelArea-center">地图</div>
    <!-- 自定义插槽 -->
    <template v-if="customModel">
      <template v-for="item in customModel">
        <slot :name="item.name"></slot>
      </template>
    </template>
    <!-- <slot name="dialog"></slot> -->
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: [Boolean, Object],
      default: false,
    },
    customModel: {
      type: [Object, Array],
      default(){
        return {
          dialog:{
            "grid-column": '2 / span 22',
            "grid-row": '2 / span 22'
          }
          
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.modelBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.grid-container {
  width: 100vw;
  height: 100vh;
  // min-width: 1920px;
  // min-height: 1080px;
  overflow: overlay;
  display: grid;
  grid-template-columns: repeat(23, 4.1666%) auto;
  grid-template-rows: repeat(23, 4.1666%) auto;
  background: url("/public/bg.png");
}

.grid-container > div {
  /* background-color: rgba(255, 255, 255, 0.8); */
  font-size: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

.header {
  grid-column: 2 / span 22;
  grid-row: 1 / span 2;
  background: #4a4a4a;
  z-index: 1;
}
.footer {
  grid-column: 2 / span 22;
  grid-row: 23 / span 2;
  background: #4a4a4a;
}
.functionArea-left {
  grid-column: 1 / span 1;
  grid-row: 1 / span 24;
  background: #848484;
}
.functionArea-right {
  grid-column: 24 / span 1;
  grid-row: 1 / span 24;
  background: #848484;
}
.modelArea-left {
  grid-column: 2 / 7;
  grid-row: 3 / 23;
  background: #dddddd;
}
.modelArea-right {
  grid-column: 19 / 24;
  grid-row: 3 / 23;
  background: #dddddd;
}
.modelArea-bottom {
  grid-column: 7 / 19;
  grid-row: 16 /23;
  background: #888;
}
.modelArea-center {
  grid-column: 7 / 19;
  grid-row: 3 / 16;
  background: #fff;
}
</style>