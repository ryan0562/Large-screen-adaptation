<template>
  <div class="headerBox" :style="options.styles">
    <div class="left">
      <div class="date-wrapper" v-if="options.date.visible" :style="options.date.styles">
        <span>{{ dateMsg.time }}</span>
        <span>{{ dateMsg.week }}</span>
        <span>{{ dateMsg.date }}</span>
      </div>
      <i class="back" v-if="options.back.visible" :style="options.back.styles" @click="$emit('back')"><img src="./back.svg" alt="" /></i>
    </div>
    <div class="main">
      <div class="tit">{{ options.title }}</div>
    </div>
    <div class="right">
      <div class="weather-wrapper" v-if="options.weather.visible" :style="options.weather.styles">
        <span>温度：{{ weather['温度'] | unitFil(1, '℃') }}</span>
        <span>湿度：{{ weather['湿度'] | unitFil(2, '%') }}</span>
        <span>风向：{{ weather['风向'] || '/' }}</span>
        <span>风速：{{ weather['风速'] | unitFil(2, 'm/s') }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
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
      // 日期数据
      dateMsg: {
        date: null,
        week: null,
        time: null,
      },
      // 日期定时器标记
      dataMsgFlag: null,
      // 天气数据
      weather: {},
    };
  },
  created() {
    this.startTime();
    this.updateWeather();
  },
  destroyed() {
    clearInterval(this.dataMsgFlag);
  },
  methods: {
    // 更新气候
    updateWeather() {
      this.weather = {
        温度: 25,
        湿度: 10,
        风向: '东北',
        风速: 33,
      };
      // environmentalTesting.selectKscAir({}).then((res) => {
      //   this.weather = res || {};
      // });
    },
    // 显示时间
    startTime() {
      this.updateDate();
      this.dataMsgFlag = setInterval(() => {
        this.updateDate();
      }, 1000);
    },
    // 更新时间
    updateDate() {
      let date = this.$dayjs();
      let dateMap = {
        Monday: '星期一',
        Tuesday: '星期二',
        Wednesday: '星期三',
        Thursday: '星期四',
        Friday: '星期五',
        Saturday: '星期六',
        Sunday: '星期日',
      };
      this.dateMsg.date = date.format('MM/DD/YYYY');
      this.dateMsg.week = dateMap[date.format('dddd')];
      this.dateMsg.time = date.format('HH:mm:ss');
    },
  },
};
</script>

<style lang="less" scoped>
.headerBox {
  display: flex;
  overflow: hidden;
  .left,
  .right {
    flex: 1;
    position: relative;
    border-bottom: 2px solid #40a5de;
  }
  .left {
    height: 66px;
    .date-wrapper {
      position: absolute;
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
  }
  .right {
    height: 68px;
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
  .main {
    width: 1348px;
    height: 100px;
    line-height: 88px;
    text-align: center;
    background: var(--header_main-background);
    font-size: var(--header_main-fontSize);
    font-family: FZZhengHeiS-B-GB;
    font-weight: 900;
    letter-spacing: 6px;
    .tit {
      background: var(--header_main-color);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .back{
        position: absolute;
    cursor: pointer;
    width: 34px;
    height: 34px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    text-align: center;
    padding: 6px;
    >img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>