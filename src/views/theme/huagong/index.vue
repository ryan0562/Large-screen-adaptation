<template>
  <div>
    <screen_header v-if="layout.header" :options="layout.header" @back="goback()" />
    <!-- 面板 -->
    <template v-for="(item, index) in panels">
      <transition :name="$config.animate" :key="`animate_${$config.screen}_${index}`">
        <dataArea
          :class="{ editBox: pageType === 'edit' }"
          v-if="item.visible"
          :key="`dataArea_${$config.screen}_${index}`"
          :style="item.style"
          :data="item"
          :type="item.place"
          :id="index"
          @click.native="showInfoDialog(item)"
        />
      </transition>
    </template>
    <!-- 菜单栏 -->
    <superMenu :options="layout.menu" @clickMenu="clickMenu" />
  </div>
</template>

<script>
import './styles/index.less';

import { switchPage, goback } from '@/utils/utils.js';
// import { mapGetters } from 'vuex';
export default {
  components: {
    screen_header: () => import('./components/header/screen_header.vue'),
    dataArea: () => import('./components/dataArea/dataArea.vue'),
    dataMarkArea: () => import('./components/dataArea/dataMarkArea.vue'),
    superMenu: () => import('./components/menu/menu.vue'),
  },
  props: {
    layout: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    panels() {
      return this.layout.dataArea[this.$config.screen]?.panels;
    },
    pageType() {
      return this.$route.query.edit === '1' ? 'edit' : 'view';
    },
  },
  created() {},
  methods: {
    // type==='active'为激活状态
    clickMenu(key, type) {
      this.switchPage(key);
    },
    // 返回
    goback() {
      // goback(() => {
      //   if (this.$config.screen === 'home') {
      //     this.$confirm('此操作将退出当前系统, 是否继续?', '提示', {
      //       confirmButtonText: '确定',
      //       cancelButtonText: '取消',
      //       type: 'warning',
      //     }).then(() => {
      //       //
      //     });
      //     return false;
      //   }
      // });
    },
    // 切换页面
    switchPage(pageKey) {
      switchPage(pageKey);
    },
    showInfoDialog(item) {
      if (this.pageType === 'edit') {
        this.$bus.$emit('changePanelForm', {
          data:item,
          form:{
            title:{
              label:'标题',
              component:{
                is:'el-input',
              },
            }
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
// .fold-left {
//   transform: perspective(1200px) rotateY(60deg) !important;
//   transform-origin: left center;
//   &.offset {
//     margin-left: -300px;
//   }
// }
// .fold-right {
//   transform: perspective(1200px) rotateY(-60deg) !important;
//   transform-origin: right center;
//   &.offset {
//     margin-right: -300px;
//   }
// }

// .fold {
//   opacity: 0;
//   z-index: -1;
//   backface-visibility: hidden;
//   transform: rotateY(-180deg);
// }
</style>