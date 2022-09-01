<template>
  <div ref="box" class="layout-group" :class="data.class" :id="data.name + data.id" :style="{
      width:data.size[0],
      height:data.size[1],
      top:data.offset[1],
      left:data.offset[0],
      background:data.fill || false,
      'z-index':data.zindex || false,
      transform:!data.scale || data.scale == 1 ? false : `scale(${data.scale})`}">
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'layoutGroup',
  props: ['data'],
  data() {
    return {
      childCom: null
    };
  },
  computed: {
    layout() {
      return this.$store.state.ui.layout;
    },
    curScence() {
      return this.$store.state.ui.curScence;
    }
  },
  watch: {
    // data: {
    //   handler(newVal, oldVal) {
    //     this.init()
    //   },
    //   deep: true
    // },
    'data.closed': {
      handler(newVal, oldVal) {
        // debugger
        if (!oldVal && newVal) this.close();
        if (oldVal && !newVal) this.open();
      },
      deep: true
    }
  },
  created() {
    // console.log('---------->',this.data)
  },
  mounted() {
    if (this.curScence !== 'scence1') {
      this.init();
    }
  },
  methods: {
    open() {
      let _box = this.$refs['box'];
      _box.classList.remove('closed');
      // _box.style.transform = 'rotateY(0)'
    },
    close() {
      let _box = this.$refs['box'];
      // _box.style.transform = 'rotateY(90deg)!important'
      _box.classList.add('closed');
    },
    init() {
      // 清空box下的所有子元素
      if (this.childCom) this.childCom.$destroy();
      if (this.data.path && !this.data.children && this.data.visible) {
        let child = import('@/components/' + this.data.path + '.vue');
        child.then(res => {
          let _data = {};
          let childExt = Vue.extend(res.default);
          this.childCom = new childExt({ propsData: { data: _data } });
          // 清空box下的所有子元素
          // if (this.childCom) this.childCom.$destroy();
          this.$refs['box'].innerHTML = '';
          setTimeout(() => {
            let _el = this.childCom.$mount(document.createElement('div')).$el;
            this.$refs['box'].appendChild(_el);
          }, 50);
        });
      }
    }
  },
  beforeDestroy() {
    if (this.childCom) this.childCom.$destroy();
    this.data.closed = true;
  }
};
</script>
<style lang="less" scoped>
.layout-group {
  position: absolute;
  // @include bgImg("~@/assets/images/components/mainCol/bg1.png");
  background-color: rgb(14, 34, 54);
  // font-size: 50px;
  // transform-origin: 0 0;
}
.core {
  // transition: all 1s;
  // &:before{
  //   content:"";
  //   width: 28px;
  //   height: 36px;
  //   margin-bottom: 6px;
  //   cursor: pointer;
  //   background: url('~@/assets/images/components/mainCol/dian.png');
  //   position: absolute;
  //   top:-40px;
  //   left:206px;
  //   transition: left .8s;
  // }
  &.closed {
    transform: rotateY(90deg) !important;
  }
}
</style>
