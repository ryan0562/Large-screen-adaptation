<template>
  <div class="headerBox" :style="options.styles">
    <div class="left">
      <div class="date-wrapper">
        <span>{{ dateMsg.time }}</span
        ><span>{{ dateMsg.week }}</span
        ><span>{{ dateMsg.date }}</span>
      </div>
    </div>
    <div class="main">
      <div class="tit">{{ $layout.header.title }}</div>
    </div>
    <div class="right"></div>
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
      dateMsg: {},
      dataMsgFlag: null,
    };
  },
  created() {
    // this.dataMsgFlag = setInterval(() => {
    //   this.updateDate();
    // }, 1000);
  },
  methods: {
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
  .left,
  .right {
    flex: 1;
    border-bottom: 2px solid #5fc4fd;
  }
  .left {
    height: 66px;
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
  }
  .right {
    height: 68px;
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
}
</style>