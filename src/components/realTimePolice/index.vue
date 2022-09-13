<template>
  <div class="real-time-wrapper">
    <!-- <select-day
      v-model="query.time"
      width="58px"
    ></select-day> -->
    <el-select class="select-day real-time-query" v-model="query.time" popper-class="select-popper" @change="getData">
      <el-option v-for="(item, index) in dateOptions" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div class="real-time-analysis">
      <!-- <div class="real-time-analysis-left radius-box">

      </div> -->
      <radius-box class="real-time-analysis-left" hasShadow color="237, 55, 55">
        <div class="real-time-analysis-total">
          <div class="real-time-analysis-total-value">
            <span>
              {{ data.jcjzs || 0 }}
            </span>
          </div>
          <div class="real-time-analysis-total-text">接处警总数</div>
        </div>
        <div class="real-time-analysis-part">
          <div class="real-time-analysis-part-item">
            110警情 <span>{{ data.jq || '0' }}</span>
          </div>
          <div class="real-time-analysis-part-item">
            区内报警 <span>{{ data.qnbj || '0' }}</span>
          </div>
        </div>
      </radius-box>
      <div class="real-time-analysis-right">
        <radius-box class="real-time-analysis-right-1" hasShadow color="57, 255, 150">
          治安类 <span>{{ data.zal || '0' }}</span></radius-box
        >
        <radius-box class="real-time-analysis-right-2" hasShadow color="15, 179, 226">
          交通类 <span>{{ data.jtl || '0' }}</span></radius-box
        >
        <!-- <div class="radius-box real-time-analysis-right-1">治安类 <span>{{data.zal || '0'}}</span></div>
        <div class="radius-box real-time-analysis-right-2">交通类 <span>{{data.jtl || '0'}}</span></div> -->
      </div>
    </div>
  </div>
  <!-- <mti-note width="244" height="50" left="143" top="48"></mti-note> -->
</template>

<script>
import radiusBox from '@/components/common/radiusBox/index.vue';
export default {
  name: 'realTimePolice',
  props: {},
  data() {
    return {
      dateOptions: [
        {
          label: '本周',
          value: 1,
        },
        {
          label: '上周',
          value: 2,
        },
        {
          label: '累计',
          value: 3,
        },
      ],
      query: {
        time: 1,
      },
      data: {},
    };
  },
  components: {
    radiusBox,
  },
  computed: {},
  created() {},
  mounted() {
    this.getData();
  },
  destroyed() {},
  methods: {
    getData() {
      this.data = { jcjzs: '7 ', qnbj: '2 ', jq: '5 ', zal: '1 ', jtl: '6 ' };
    },
  },
};
</script>

<style scoped lang="less">
.select-day {
  ::v-deep {
    .el-input__inner {
      background-color: transparent;
      border: 1px solid #0f4c6a;
      // color: #89d1ff;
      color: #fff;
      font-size: 12px;
      height: 26px;
      line-height: 26px;
    }
    .el-input .el-input__suffix-inner .el-select__caret {
      color: #89d1ff;
    }
    .el-input--suffix .el-input__inner {
      padding-right: 18px;
      padding-left: 5px;
    }
    .el-input__icon {
      line-height: 1;
      width: 15px;
    }
  }
}
.real-time {
  color: #ffffff;
  &-query {
    position: absolute;
    right: 0;
    top: 6px;
    margin-right: 10px;
    width: 58px;
  }
  &-analysis {
    position: relative;
    display: flex;
    padding: 10px;
    font-size: 14px;
    &-left {
      width: 243px;
      margin-right: 8px;
      height: 82px;
      display: flex;
    }
    &-right {
      flex: 1;
      span {
        float: right;
        font-size: 18px;
      }
      &-1 {
        height: 36px;
        line-height: 36px;
        margin-bottom: 8px;
        padding-left: 12px;
        padding-right: 12px;
        color: rgba(57, 255, 150, 1);
        span {
          color: #fff;
        }
      }
      &-2 {
        height: 36px;
        line-height: 36px;
        color: rgba(13, 223, 255, 1);
        padding-left: 12px;
        padding-right: 12px;
        span {
          color: #fff;
        }
      }
    }
    &-total {
      width: 98px;
      border-right: 1px solid rgba(237, 55, 55, 0.3);
      text-align: center;
      padding-top: 10px;
      &-text {
        font-size: 14px;
        font-weight: 400;
      }
      &-value {
        position: relative;
        width: 100%;
        font-size: 20px;
        font-family: DIN;
        font-weight: 500;
        line-height: 40px;
        display: inline-block;
        background-image: url('./assets/icon_jingqingshu.png');
        background-position: 15px center;
        background-repeat: no-repeat no-repeat;
        text-align: left;
        text-indent: 40px;
      }
    }
    &-part {
      flex: 1;
      &-item {
        line-height: 40px;
        padding-left: 12px;
        padding-right: 12px;
        &:first-of-type {
          border-bottom: 1px solid rgba(237, 55, 55, 0.3);
        }
        span {
          float: right;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
