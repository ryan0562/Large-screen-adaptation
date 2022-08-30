<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <!-- <div
        class="line"
        :style="{opacity: showFXFT?0:1}"
      > -->
      <div class="line">
        <div class="date-wrapper">
          <span>{{ dateMsg.time }}</span><span>{{ dateMsg.week }}</span><span>{{ dateMsg.date }}</span>
        </div>
        <div
          v-show="!componentId"
          :ref="`core-${item.id}`"
          v-for="(item, index) in cores.l"
          :key="index"
          :class="['core', { active: !item.status }]"
          :style="{ left: `${226 + index * 452}px` }"
          @click="tabHandleL(item, index)"
        >
          <span
            v-if="!item.status"
            :title="getTitle(item)"
          >{{
          getTitle(item)
        }}</span>
        </div>
        <div
          v-for="(item, index) in cores.l"
          :key="index + 'll'"
          :ref="`middle-${item.id}`"
          :class="['middle-core middle-core-left', { active: !item.status }]"
          v-show="(!componentId) && index !== 0"
          @click="middleHandle(index, 'left')"
          :style="{ left: `${index * 452}px` }"
        ></div>
      </div>
      <div class="main">
        <div class="main-bg">{{title}}
          <span
            v-if="currentVersion.version"
            style="letter-spacing: 6px;font-size: 30px;"
          >{{currentVersion.version || ''}}</span>
          <!-- <span style="letter-spacing: 6px;font-size: 30px;">v1.1.1</span> -->
        </div>
      </div>
      <!-- <div
        class="line right"
        :style="{opacity: showFXFT?0:1}"
      > -->
      <div class="line right">
        <div class="weather-wrapper">
          <!-- <i v-if="weather.type" class="weather-icon" :style="`background-image: url(${require('@/assets/images/weather/' +
            weather.type +
            '.png')})`" />
            <span>{{ weather.type }}</span> -->
          <span>温度：{{ weather['温度'] | unitFil(1,'℃')}}</span>
          <span>湿度：{{ weather['湿度'] | unitFil(2,'%')}}</span>
          <span>风向：{{ weather['风向'] || '/' }}</span>
          <span>风速：{{ weather['风速'] | unitFil(2,'m/s') }}</span>
          <!-- <mti-note width="500" height="45" left="0" top="0" fontSize="16"></mti-note> -->
        </div>
        <div
          v-show="!componentId"
          :ref="`core-${item.id}`"
          v-for="(item, index) in cores.r"
          :key="index"
          :class="['core', { active: !item.status }]"
          :style="{ left: `${2686 + index * 452}px` }"
          @click="tabHandleR(item, index)"
        >
          <span
            v-if="!item.status"
            :title="getTitle(item)"
          >{{
          getTitle(item)
        }}</span>
        </div>
      </div>
      <!-- <div
        v-for="(item, index) in cores.r"
        :key="index + 'rr'"
        :ref="`middle-${item.id}`"
        :class="['middle-core middle-core-right', {active: !item.status}]"
        v-show="index !== 2"
        :style="{ left: `${2910 + index * 452}px`, opacity: showFXFT?0:1 }"
        @click="middleHandle(index, 'right')"
      ></div> -->
      <div
        v-for="(item, index) in cores.r"
        :key="index + 'rr'"
        :ref="`middle-${item.id}`"
        :class="['middle-core middle-core-right', {active: !item.status}]"
        v-show="(!componentId) && index !== 2"
        :style="{ left: `${2910 + index * 452}px` }"
        @click="middleHandle(index, 'right')"
      ></div>
      <!-- <i class="el-icon-close close" @click="logOut('manual')"></i> -->
      <!-- <i class="go-back"><img
          :src="require('@/assets/images/public/back.svg')"
          alt=""
          @click="goPrev"
        /></i> -->
      <i
        :class="['el-icon-full-screen full-screen', fullScreen ? 'full-screen-on' : 'full-screen-off']"
        @click="handleFullscreen"
      ></i>
      <i
        class="el-icon-close close"
        @click="closeTab"
      ></i>
    </div>
    <div
      v-if="curScence != 'scence1' || (firstPageTitle)"
      class="back"
      @click="backHandle"
    >
      {{ firstPageTitle }}
      <i class="el-icon-s-home"></i>
      <!-- <img :src="require('@/assets/images/public/back.png')" alt="" /> -->
    </div>
  </div>
</template>

<script>
import environmentalTesting from './environmentalTesting.js';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'topBar',
  props: ['layout'],
  data() {
    return {
      cores: {
        l: [
          {
            id: 0,
            status: 1
          },
          {
            id: 1,
            status: 1
          },
          {
            id: 2,
            status: 1
          }
        ],
        r: [
          {
            id: 3,
            status: 1
          },
          {
            id: 4,
            status: 1
          },
          {
            id: 5,
            status: 1
          }
        ]
      },
      show: '',
      webRtc: {},
      isAnswerShow: false,
      showModal: '',
      interval: null,
      modalData: null,
      title: window.MTI.pageTitle,
      lineTitle: '',
      dateMsg: {
        time: '',
        week: '',
        date: ''
      },
      weather: {},
      fullScreen: false,
      fxftUrl: process.env.NODE_ENV === 'neiwang' ? 'http://10.141.217.52:82/defend/' : 'http://10.168.4.152/defend/#/home'
    };
  },
  filters: {
    unitFil(val, fiexdNum, unit) {
      let res = 0; // 或许应该使用'/'
      !!Number(val) && (res = Number(val).toFixed(fiexdNum));
      return res + unit;
    }
  },
  computed: {
    ...mapState({
      themes: state => state.ui.themes,
      curScence: state => state.ui.curScence,
      firstPageTitle: state => state.ui.firstPageTitle,
      currentVersion: state => state.version.currentVersion,
      componentId: state => state.map.componentId //防汛防台
    }),
    getTitle() {
      return data => {
        return this.layout[data.id].title;
      };
    },
    userInfo() {
      return JSON.parse(sessionStorage.getItem('userInfo')) || null;
    }
  },
  watch: {
    layout: {
      handler(val, old) {
        Object.keys(this.cores).map(key => {
          this.cores[key].map(item => {
            item.status = 1;
          });
        });
        this.resetPosition();
      }
    }
  },
  created() {},
  mounted() {
    this.updateDate();
    this.updateWeather();
    this.dateTimer = setInterval(() => {
      this.updateDate();
    }, 1000);
    this.weatherTimer = setInterval(() => {
      this.updateWeather();
    }, 1000 * 60 * 60);

    this.$bus.$off('showDiaopai');
    this.$bus.$on('showDiaopai', isshow => {
      this.cores.l.map((item, index) => {
        item.status = isshow ? 0 : 1;
        this.tabHandleL(item, index);
      });
      this.cores.r.map((item, index) => {
        item.status = isshow ? 0 : 1;
        this.tabHandleR(item, index);
      });
    });
  },
  destroyed() {
    if (this.dateTimer) {
      clearInterval(this.dateTimer);
    }
    if (this.weatherTimer) {
      clearInterval(this.weatherTimer);
    }
  },
  methods: {
    ...mapMutations(['setScence', 'destroyScence', 'setFirstPageTitle', 'setComponentId']),
    ...mapActions(['logOut']),
    goPrev() {
      if (this.componentId) {
        this.backHandle();
        return;
      }
      if (this.curScence !== 'scence1') {
        this.destroyScence(); // 处理一级页面不需要的地图图层
        this.setScence('scence1');
        this.setFirstPageTitle('');
      } else {
        this.logOut({
          status: 'manual'
        });
      }
    },
    handleFullscreen() {
      if (this.fullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      } else {
        let docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        }
      }
      this.fullScreen = !this.fullScreen;
    },
    backHandle() {
      let paramMap = new Map([
        ['scence1', ''],
        ['publicSafety', '公共安全'],
        ['productionOperation', '生产运行'],
        ['scence2', '安全应急'],
        ['planningConstruction', '规划建设'],
        ['environmentalTesting', '环境监管'],
        ['managementService', '管理服务']
      ]);
      if (this.firstPageTitle.startsWith('场景-') || this.firstPageTitle.startsWith('公用工程-')) {
        this.setFirstPageTitle(paramMap.get(this.curScence));
        this.$bus.$emit('showDiaopai', true);
        this.setComponentId(null);
      } else {
        this.cores.l.map(item => {
          item.status = 1;
        });
        this.destroyScence(); // 处理一级页面不需要的地图图层
        this.setScence('scence1');
        this.setFirstPageTitle('');
        this.$nextTick(() => {
          this.$emit('getLeftCoresData', this.cores.l);
          this.$emit('getRightCoresData', this.cores.r);
        });
      }
    },
    resetPosition() {
      // 切换吊牌，初始化六列吊牌的位置和状态
      for (let i = 0; i < 6; i++) {
        if (i < 3) {
          this.$refs['core-' + i][0].style.left = 226 + i * 452 + 'px';
          this.layout[i].offset = [`calc( 20px + ${452 * i}px)`, '93px'];
        } else {
          this.$refs['core-' + i][0].style.left = 2686 + (i - 3) * 452 + 'px';
          this.layout[i].offset = [`calc(100% - 1364px + ${452 * (i - 3)}px)`, '93px'];
        }
      }
    },
    middleHandle(index, dir) {
      if ((index === 2 && dir === 'left') || (index === 0 && dir === 'right')) {
        if (dir === 'left') {
          this.cores.r[0].status = JSON.parse(JSON.stringify(this.cores.l[2])).status;
        } else {
          this.cores.l[2].status = JSON.parse(JSON.stringify(this.cores.r[0])).status;
        }
        this.tabHandleL(this.cores.l[2]);
        this.tabHandleR(this.cores.r[0]);
      }
      if (index === 1) {
        if (dir === 'left') {
          this.cores.r[1].status = JSON.parse(JSON.stringify(this.cores.l[1])).status;
        } else {
          this.cores.l[1].status = JSON.parse(JSON.stringify(this.cores.r[1])).status;
        }
        this.cores.l[2].status = JSON.parse(JSON.stringify(this.cores.l[1])).status;
        this.tabHandleL(this.cores.l[2]);
        this.tabHandleL(this.cores.l[1]);
        this.cores.r[0].status = JSON.parse(JSON.stringify(this.cores.r[1])).status;
        this.tabHandleR(this.cores.r[0]);
        this.tabHandleR(this.cores.r[1]);
      }
    },
    middleHandleR(index) {
      if (index === 0) {
        this.tabHandleR(this.cores.r[0]);
      }
      if (index === 1) {
        this.cores.r[0].status = JSON.parse(JSON.stringify(this.cores.r[1])).status;
        this.tabHandleR(this.cores.r[0]);
        this.tabHandleR(this.cores.r[1]);
      }
    },
    tabHandleL(item, index) {
      let close = false;
      if (item.status === 1) {
        //关
        item.status = 0;
        close = true;
      } else {
        //开
        item.status = 1;
        close = false;
      }
      this.layout[item.id].closed = close;
      if (this.layout[item.id].children && this.layout[item.id].children.length) {
        this.layout[item.id].children.map(item => {
          item.closed = close;
        });
      }
      this.$refs[`core-0`][0].style.left = this.cores.l[0].status ? `${226 + 0 * 452}px` : '20px';
      this.$refs[`core-1`][0].style.left = this.cores.l[1].status ? (this.cores.l[0].status ? `${226 + 1 * 452}px` : '226px') : this.cores.l[0].status ? `${460 + 80}px` : '108px';
      this.$refs[`core-2`][0].style.left = this.cores.l[2].status ? (this.cores.l[0].status + this.cores.l[1].status > 0 ? `${226 + this.cores.l[0].status * 452 + this.cores.l[1].status * 452}px` : '226px') : this.cores.l[0].status + this.cores.l[1].status > 0 ? (this.cores.l[0].status == 1 && this.cores.l[1].status == 0 ? `${452 + 190}px` : this.cores.l[0].status == 0 && this.cores.l[1].status == 1 ? `${226 + 100}px` : `${452 + 452 + 40}px`) : '200px';
      `${this.cores.l[0].status * 615 + this.cores.l[1].status * 285}px`;
      this.$refs[`middle-0`][0].style.left = this.cores.l[0].status ? `${0 * 452}px` : '20px';
      this.$refs[`middle-1`][0].style.left = this.cores.l[1].status ? (this.cores.l[0].status ? `452px` : '130px') : this.cores.l[0].status ? `385px` : '68px';
      this.$refs[`middle-2`][0].style.left = this.cores.l[2].status ? (this.cores.l[0].status + this.cores.l[1].status > 0 ? (this.cores.l[0].status + this.cores.l[1].status === 2 ? '902px' : this.cores.l[1].status === 0 ? '608px' : '452px') : '173px') : this.cores.l[0].status + this.cores.l[1].status > 0 ? (this.cores.l[0].status == 1 && this.cores.l[1].status == 0 ? `595px` : this.cores.l[0].status == 0 && this.cores.l[1].status == 1 ? `100px` : `810px`) : '157px';

      this.layout[1].offset = [this.cores.l[0].status * 452 + 20 + 'px', '93px'];
      this.layout[2].offset = [this.cores.l[0].status * 452 + 20 + this.cores.l[1].status * 452 + 'px', '93px'];
      this.$emit('getLeftCoresData', this.cores.l);
    },

    tabHandleR(item, index) {
      if (item.status === 1) {
        //关
        item.status = 0;
        this.layout[item.id].closed = true;
      } else {
        //开
        item.status = 1;
        this.layout[item.id].closed = false;
      }
      this.$refs[`core-5`][0].style.left = this.cores.r[2].status ? `3594px` : '3792px';
      this.$refs[`core-4`][0].style.left = this.cores.r[1].status ? (this.cores.r[2].status ? `3142px` : `3594px`) : this.cores.r[2].status ? `3290px` : '3702px';
      this.$refs[`core-3`][0].style.left = this.cores.r[0].status ? (this.cores.r[2].status + this.cores.r[1].status > 0 ? `${3840 - (246 + this.cores.r[2].status * 452 + this.cores.r[1].status * 452)}px` : `3594px`) : this.cores.r[2].status + this.cores.r[1].status > 0 ? (this.cores.r[2].status == 1 && this.cores.r[1].status == 0 ? `3190px` : this.cores.r[2].status == 0 && this.cores.r[1].status == 1 ? `3484px` : '2856px') : '3612px';
      `${3840 - (246 + this.cores.r[2].status * 452 + this.cores.r[1].status * 452)}px`;
      this.$refs[`middle-5`][0].style.left = this.cores.r[2].status ? `3594px` : '3792px';
      this.$refs[`middle-4`][0].style.left = this.cores.r[1].status ? (this.cores.r[2].status ? `3360px` : `3700px`) : this.cores.r[2].status ? `3444px` : '3752px';
      this.$refs[`middle-3`][0].style.left = this.cores.r[0].status ? (this.cores.r[2].status + this.cores.r[1].status > 0 ? (this.cores.r[2].status + this.cores.r[1].status === 2 ? '2910px' : this.cores.r[2].status ? '3218px' : '3361px') : `3654px`) : this.cores.r[2].status + this.cores.r[1].status > 0 ? (this.cores.r[2].status == 1 && this.cores.r[1].status == 0 ? `3244px` : this.cores.r[2].status == 0 && this.cores.r[1].status == 1 ? `3545px` : `3005px`) : '3662px';

      this.layout[4].offset = [3840 - (this.cores.r[2].status * 452 + 20 + 440) + 'px', '93px'];
      this.layout[3].offset = [3840 - (this.cores.r[2].status * 452 + this.cores.r[1].status * 452 + 20 + 440) + 'px', '93px'];
      this.$emit('getRightCoresData', this.cores.r);
    },
    updateDate() {
      let date = this.$dayjs();
      let dateMap = {
        Monday: '星期一',
        Tuesday: '星期二',
        Wednesday: '星期三',
        Thursday: '星期四',
        Friday: '星期五',
        Saturday: '星期六',
        Sunday: '星期日'
      };
      this.dateMsg.date = date.format('MM/DD/YYYY');
      this.dateMsg.week = dateMap[date.format('dddd')];
      this.dateMsg.time = date.format('HH:mm:ss');
    },
    updateWeather() {
      environmentalTesting.selectKscAir({}).then(res => {
        this.weather = res || {};
      });
    },
    closeTab() {
      this.logOut({
        status: 'manual',
        blank: true
      });
      // this.$confirm('此操作将退出当前系统, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      //   .then(async () => {
      //     window.close();
      //     window.open('about:blank', '_top');
      //   })
      //   .catch(() => {});
    }
  },
  components: {},
  beforeDestroy() {
    // this.$bus.$off("rtcInvite")
    // this.interval ? clearInterval(this.interval) : null;
  }
};
</script>
<style lang="less" scoped>
.topbar-wrapper {
  position: relative;

  .back {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -52px;
    // width: 267px;
    // height: 55px;
    // border: 2px #057cb6 solid;
    // border-top: 0;
    // background: $black;
    height: 48px;
    width: 382px;
    background: linear-gradient(90deg, rgba(7, 161, 249, 0) 0%, rgba(3, 8, 23, 0.6) 50%, rgba(7, 161, 249, 0) 100%);
    color: rgba(51, 231, 255, 1);
    line-height: 48px;
    font-size: 28px;
    text-align: center;
    font-style: italic;
    // border-radius: 0 0 50px 50px;
    cursor: pointer;
    img {
      width: 25px;
      height: auto;
      position: absolute;
      top: 13px;
      right: 37px;
    }
    &:before {
      content: '';
      width: 382px;
      height: 2px;
      background: linear-gradient(90deg, rgba(7, 161, 249, 0) 10%, rgba(7, 161, 249, 0.8) 50%, rgba(7, 161, 249, 0) 90%);
      position: absolute;
      top: 0;
      left: 0;
    }
    &:after {
      content: '';
      width: 382px;
      height: 2px;
      background: linear-gradient(90deg, rgba(7, 161, 249, 0) 10%, rgba(7, 161, 249, 0.8) 50%, rgba(7, 161, 249, 0) 90%);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
.topbar {
  position: absolute;
  display: flex;
  z-index: 20;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  .el-icon-s-fold {
    position: absolute;
    top: 56px;
    right: -190px;
    font-size: 25px;
  }
  .main {
    // bg-head
    width: 1450px;
    height: 100px;
    @include bgImg('#{$url}/bg-head.png');
    &-bg {
      width: 100%;
      line-height: 85px;
      text-align: center;
      font-size: 41px;
      font-family: FZZhengHeiS-B-GB;
      font-weight: 900;
      // letter-spacing: 50px;
      letter-spacing: 6px;
      color: #ffffff;
      background: linear-gradient(0deg, #00ccff 0%, #b9e8ff 70.9228515625%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .line {
    height: 1px;
    flex: 1;
    margin-top: 64px;
    &.right {
      margin-top: 66px;
      margin-left: -1px;
    }
    border: 1px solid transparent;
    border-image: linear-gradient(-90deg, rgba(74, 189, 255, 0.5), rgba(74, 189, 255, 0.5)) 10 10;
    background: linear-gradient(-90deg, rgba(74, 189, 255, 0.5) 0%, rgba(74, 189, 255, 0.5) 100%);
    opacity: 1;
    &:last-child {
      margin-top: 66px;
      margin-left: -2px;
    }
    .core {
      width: 28px;
      height: 36px;
      margin: 0 auto;
      margin-bottom: 6px;
      cursor: pointer;
      background-image: url('~@/assets/images/components/mainCol/dian.png');
      background-repeat: no-repeat no-repeat;
      position: absolute;
      top: 48px;
      transition: left 1s;
      span {
        position: absolute;
        display: inline-block;
        width: 70px;
        padding: 0 3px;
        line-height: 16px;
        font-size: 12px;
        text-align: center;
        left: -21px;
        font-style: italic;
        background: rgba(21, 54, 93, 1);
        border: 1px dashed rgba(5, 112, 162, 1);
        color: #77e7ff;
        top: 25px;
        border-radius: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &.active {
        background-image: url('~@/assets/images/components/mainCol/dian_active.png');
      }
    }
  }
  .middle-core {
    position: absolute;
    width: 26px;
    height: 20px;
    border-radius: 50%;
    @include bgImg('~@/assets/images/public/icon_shouzhe.png');
    top: 55px;
    cursor: pointer;
    transition: all 1s;
    transform: rotateZ(0deg);
    &.middle-core-right {
      transform: rotateZ(180deg);
      &.active {
        transform: rotateZ(0deg);
      }
    }
    &.middle-core-left.active {
      transform: rotateZ(180deg);
    }
  }
  .date-wrapper {
    position: absolute;
    top: 15px;
    left: 80px;
    font-size: 20px;
    font-family: DIN;
    font-weight: 500;
    color: #ddedfd;
    // border-left: 1px solid #ddedfd;
    padding-left: 15px;
    span {
      margin-right: 16px;
      vertical-align: middle;
    }
  }
  .weather-wrapper {
    position: absolute;
    top: 18px;
    right: 168px;
    font-size: 18px;
    font-family: DIN;
    font-weight: 500;
    color: #ddedfd;
    span {
      margin-left: 16px;
      vertical-align: middle;
    }
    .weather-icon {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-size: 100% 100%;
      vertical-align: middle;
    }
  }
}
.close {
  position: absolute;
  right: 24px;
  font-size: 22px;
  top: 24px;
  font-weight: bolder;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 6px;
  border-radius: 50%;
  color: #000;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color 1s;
  }
}
.go-back {
  position: absolute;
  left: 24px;
  top: 24px;
  cursor: pointer;
  width: 34px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  text-align: center;
  padding: 6px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color 1s;
  }
}
.full-screen {
  position: absolute;
  right: 100px;
  font-size: 30px;
  top: 24px;
  cursor: pointer;
  &-on {
    color: #00f3ff;
  }
  &-off {
  }
}
.full-iframe {
  position: absolute;
  left: 0;
  top: 0;
  width: 3840px;
  height: 1080px;
  background-color: #003452;
  padding-top: 80px;
}
</style>
