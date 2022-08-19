<template>
  <div class="flex-container">
    <div class="juzhong functionArea-left" >左侧功能区</div>
    <div class="container">
      <div class="juzhong header">头部</div>
      <div class="main">
        <div class="juzhong modelArea-left" :style="{ width: `${modelAreaWidth * 4.166666}vw` }">左侧模块区</div>
        <div class="juzhong modelArea-left" v-if="screenRatio > 1" :style="{ width: `${modelAreaWidth * 4.166666}vw` }">
          左侧模块区
        </div>
        <div class="juzhong modelArea-left" v-if="screenRatio > 2" :style="{ width: `${modelAreaWidth * 4.166666}vw` }">
          左侧模块区
        </div>
        <div class="modelArea-center">
          <div class="juzhong top">地图</div>
          <div class="juzhong bottom">底侧模块区</div>
        </div>
        <div class="juzhong modelArea-right" :style="{ width: `${modelAreaWidth * 4.166666}vw` }">右侧模块区</div>
        <div
          class="juzhong modelArea-right"
          v-if="screenRatio > 1"
          :style="{ width: `${modelAreaWidth * 4.166666}vw` }"
        >
          右侧模块区
        </div>
        <div
          class="juzhong modelArea-right"
          v-if="screenRatio > 2"
          :style="{ width: `${modelAreaWidth * 4.166666}vw` }"
        >
          右侧模块区
        </div>
      </div>
      <div class="juzhong footer">底部</div>
    </div>
    <div class="juzhong functionArea-right">右侧功能区</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenRatio: null, // 屏幕倍率
    };
  },
  computed: {
    modelAreaWidth() {
      // 模块区默认宽度为6格
      const ratio = 6 / this.screenRatio;

      return ratio;
    },
  },
  props: {
    header: {
      type: [Boolean, Object],
      default: false,
    },
  },
  mounted() {
    window.onresize = () => {
      this.setMode(document.documentElement.clientWidth);
    };
    this.setMode();
  },
  methods: {
    setMode(width = window.screen.width) {
      this.screenRatio = Math.ceil(width / 1920); // 向上取整倍率
      console.log(this.screenRatio);
    },
  },
};
</script>

<style lang="less" scoped>
.unit_w(@ratio) {
  width: @ratio*4.166666vw; //100/24
}
.unit_h(@ratio) {
  height: @ratio*4.166666vh; //100/24
}

.juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-container {
  width: 100vw;
  height: 100vh;
  // min-width: 1920px;
  // min-height: 1080px;
  overflow: hidden;
  display: flex;
  background: url("/public/bg.png");
  font-size: 30px;
}
.functionArea-left {
  // .unit_w(1);
  width:100px;
  background: #848484;
}
.functionArea-right {
  .unit_w(1);
  background: #848484;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  .header {
    height: 4.16666 * 2vh;
    background: #4a4a4a;
  }
  .footer {
    height: 4.16666 * 2vh;
    background: #4a4a4a;
  }
}

.main {
  flex: 1;
  display: flex;
  .modelArea-left {
    .unit_w(5);
    background: #dddddd;
  }
  .modelArea-right {
    .unit_w(5);
    background: #dddddd;
  }
  .modelArea-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    .bottom {
      .unit_h(7);
      background: #888;
    }
    .top {
      flex: 1;
      background: #fff;
    }
  }
}
</style>