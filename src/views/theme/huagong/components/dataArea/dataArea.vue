<template>
  <!-- 类型2 -->
  <div class="dataAreaBox" v-if="data.type == 2">
    <div class="tit bg2" @click="$emit('clickTitle', data.moduleId)">
      {{ data.title }}
    </div>
    <slotModule v-for="(item, index) in data.modules" :key="index" :data="item" />
  </div>
  <!-- 类型3 -->
  <div class="dataAreaBox dataAreaBox_3" v-else-if="data.type == 3">
    <div class="tit bg2" @click="$emit('clickTitle', data.moduleId)">
      {{ data.title }}
    </div>
    <div class="con">
      <div class="dataBlock_left">
        <slotModule v-for="(item, index) in data.modules.left" :key="index" :data="item" />
      </div>
      <div class="dataBlock_right">
        <slotModule v-for="(item, index) in data.modules.right" :key="index" :data="item" />
      </div>
    </div>
  </div>
  <!-- 类型1 -->
  <div class="dataAreaBox" v-else>
    <div class="tit bg1" @click="$emit('clickTitle', data.moduleId)">
      {{ data.title }}
    </div>
    <div class="line"></div>
    <slotModule
      v-for="(item, index) in data.modules"
      :key="index"
      :data="{ module_index: index, modules: data.modules }"
      :maxGrid="grid_residue"
      @useGrid="useGrid"
      @change="changeItem($event, index)"
      @delete="deleteItem(index)"
    />
    <addModule
      v-if="grid_residue > 0"
      :data="{ module_index: add_index, modules: data.modules, grid_residue: grid_residue }"
    />
  </div>
</template>

<script>
export default {
  components: {
    slotModule: () => import('./slotModule.vue'),
    // dataBlock: () => import('./dataBlock.vue'),
  },
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      grid: 12, //总栅格
      // grid_used: 0, //使用了多少的栅格8
    };
  },
  computed: {
    // module指针
    add_index() {
      const m = this.data.modules.length;
      return m > 0 ? m : 0;
    },
    // 剩余的栅格
    grid_residue() {
      const use = this.data.modules.reduce((total, { grid = 0 }, index) => {
        return total + grid;
      }, 0);
      return this.grid - use;
    },
  },
  created() {
    // this.initModule();
  },
  methods: {
    deleteItem(index) {
      this.data.modules.splice(index, 1);
    },
    changeItem(data, index) {
      this.$set(this.data.modules, index, data);
    },
    // initModule() {
    //   if (!this.data.modules[this.module_index]) {
    //     this.$set(this.data.modules, this.module_index, { component: {} });
    //   }
    //   // return this.data.modules[this.module_index];
    // },
    useGrid(n) {
      this.grid_used += n;
    },
  },
};
</script>

<style lang="less" scoped>
.dataAreaBox {
  background: url('./assets/bg.png') no-repeat 0 0 / 100% 100%;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: absolute;
  backface-visibility: hidden;

  .tit {
    background: url(./assets/head_1.png) no-repeat top center;
    height: 40px;
    line-height: 46px;
    font-family: 'huagong_fonts';
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    &.bg2 {
      background: url(./assets/head_2.png) no-repeat 0 0 /100% 100%;
    }
  }
  .line {
    width: 100%;
    height: 20px;
    background: url('./assets/line.png') no-repeat center bottom;
  }
}
.dataAreaBox_3 {
  display: flex;
  flex-direction: column;
  .con {
    display: flex;
    flex: 1;
  }
  .dataBlock_left,
  .dataBlock_right {
    flex: 1;
    min-height: 0;
    overflow: overlay;
  }
  .dataBlock_right {
    margin-left: 20px;
  }
}
</style>