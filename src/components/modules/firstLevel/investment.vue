<template>
  <div class="investment">
    <div class="investment-content">
      <radiusBox class="month-total">
        <div class="total-title">截至{{ time }}累计</div>
        <div class="total-content">
          <div class="total-item ell">
            备案（审批）项目：<span class="blue-text">{{ projectNum }}</span
            >个，涉及金额： <span class="green-text">{{ money }}</span
            >亿元
          </div>
        </div>
      </radiusBox>
      <div class="invest-chart">
        <chart
          ref="myChart"
          height="180px"
          width="378px"
          :optionData="chartOptions"
          isScale
          :scaleStyles="{ transformOrigin: '0 0' }"
        ></chart>
      </div>
    </div>
  </div>
</template>

<script>
import chart from '@/components/common/chart/index.vue';
// import selectMonth from '@/components/common/selectMonth';

export default {
  name: '',
  props: {},
  components: {
    chart,
    radiusBox: () => import('@/components/common/radiusBox/index.vue'),

    // selectMonth
  },
  data() {
    return {
      projectNum: 0,
      money: 0,
      time: '',
      colors: ['#2DE4E5', '#51F1B1'],
      xAxisLable: [],
      projectChartData: [],
      moneyChartData: [],
    };
  },
  computed: {
    currentMonth() {
      return ((this.monthData && this.$dayjs(this.monthData)) || this.$dayjs()).format('YYYY年MM月');
    },

    chartOptions() {
      return {
        // color: ['#1C86F1'],
        legend: {
          show: true,
          data: ['备案(审批)项目(个）', '涉及金额(亿元）'],
          textStyle: {
            color: '#89D1FF',
            fontSize: 14,
          },
          right: 15,
          top: 10,
        },
        dataZoom: [
          {
            type: 'inside',
            startValue: 7,
            endValue: 12,
          },
        ],
        grid: {
          top: '40',
          left: '10',
          right: '15',
          bottom: '10',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          borderWidth: 0,
          formatter: (val) => {
            const time = this.$dayjs(this.xAxisLable[val[0].dataIndex]).format('YYYY年MM月');
            const unit = val[0] && val[0].seriesName === '涉及金额(亿元）' ? '亿元' : '个';
            const unit2 = val[1] && val[1].seriesName === '涉及金额(亿元）' ? '亿元' : '个';
            const str = !val[1]
              ? `${time}<br />${val[0] && val[0].seriesName}：${val[0] && val[0].value}${unit}`
              : `${time}<br />${val[0] && val[0].seriesName}：${val[0] && val[0].value} ${unit}<br />${
                  val[1].seriesName
                }：${val[1].value}${unit2}`;

            return str;
          },
          textStyle: {
            color: 'rgba(255, 255, 255, 1)',
          },
          backgroundColor: 'rgba(2, 6, 15, 0.8)',
        },
        xAxis: {
          type: 'category',
          data: this.xAxisLable.map((item) => {
            return `${item.split('-')[1]}月`;
          }),
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ', // 坐标线的宽度
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 12,
            },
          },
        },
        yAxis: [
          {
            axisLine: {
              show: false,
              lineStyle: {
                color: '#ccc',
              },
            },
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#B3DBFF',
                fontSize: 14,
              },
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              // gird 区域中的分割线
              show: true, // 是否显示
              lineStyle: {
                color: '#092C48',
                width: 1,
              },
            },
          },
          {
            type: 'value',
            position: 'right',
            splitLine: {
              show: false,
            },
            axisPointer: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              color: '#51F1B1',
              fontSize: 14,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '备案(审批)项目(个）',
            type: 'bar',
            barWidth: 10,
            data: this.projectChartData,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[0] },
                  { offset: 0, color: this.colors[0] },
                ]),
                barBorderRadius: 12,
              },
            },
            // tooltip: {
            //   formatter: '{a}<br />{b}：{c}亿元'
            // }
          },
          {
            name: '涉及金额(亿元）',
            type: 'line',
            yAxisIndex: 1,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            smooth: false,
            itemStyle: {
              color: '#fff',
              shadowColor: this.colors[1],
              shadowBlur: 20,
              borderColor: this.colors[1],
              borderWidth: 2,
            },
            lineStyle: {
              width: 1,
              color: this.colors[1],
              shadowColor: this.colors[1],
              shadowBlur: 20,
            },
            data: this.moneyChartData,
          },
        ],
      };
    },
  },
  created() {},
  mounted() {
    this.getProjectInvestment();
  },
  destroyed() {},
  methods: {
    getProjectInvestment() {
      const detail = [
        {
          recordTime: '2022-07',
          num: 5,
          projectInvestment: 3.5552,
        },
        {
          recordTime: '2022-06',
          num: 7,
          projectInvestment: 57.2435,
        },
        {
          recordTime: '2022-05',
          num: 9,
          projectInvestment: 8.7539,
        },
        {
          recordTime: '2022-04',
          num: 4,
          projectInvestment: 6.1991,
        },
        {
          recordTime: '2022-02',
          num: 7,
          projectInvestment: 27.0484,
        },
        {
          recordTime: '2021-12',
          num: 6,
          projectInvestment: 8.8809,
        },
        {
          recordTime: '2021-11',
          num: 4,
          projectInvestment: 0.5254,
        },
        {
          recordTime: '2021-10',
          num: 4,
          projectInvestment: 6.49,
        },
        {
          recordTime: '2021-09',
          num: 3,
          projectInvestment: 2.6027,
        },
        {
          recordTime: '2021-08',
          num: 4,
          projectInvestment: 2.5948,
        },
        {
          recordTime: '2021-07',
          num: 8,
          projectInvestment: 24.0083,
        },
        {
          recordTime: '2021-06',
          num: 6,
          projectInvestment: 8.4561,
        },
        {
          recordTime: '2021-05',
          num: 2,
          projectInvestment: 0.69,
        },
      ];
      const leiji = {
        money: '106.1',
        num: '58',
        time: '2022-07',
      };
      if (detail && detail.length) {
        const temp = [];
        const temp2 = [];
        const temp3 = [];

        detail.forEach((item) => {
          const { recordTime, num, projectInvestment } = item;
          temp.push(recordTime);
          temp2.push(num);
          temp3.push(+Number(projectInvestment).toFixed(2));
        });

        this.xAxisLable = temp.reverse();
        this.projectChartData = temp2.reverse();
        this.moneyChartData = temp3.reverse();
      }

      if (leiji) {
        this.money = leiji.money;
        this.projectNum = leiji.num;
        this.time = this.$dayjs(leiji.time).format('YYYY年MM月');
      }
    },
  },
};
</script>
<style lang="less" scoped>
.investment {
  position: relative;
  .invest-chart {
    width: 100%;
  }
  .investment-content {
    align-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .investment-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 135px;
    text-align: center;

    p {
      width: 85px;
      height: 85px;
      padding: 29px 15px 0 15px;
      margin-bottom: 10px;
      font-size: 24px;
      font-family: DIN;
      font-weight: 500;
      color: #ffffff;
      line-height: 34px;
    }

    h4 {
      height: 42px;
      line-height: 20px;
      color: #a8d5fb;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;

      line-height: 18px;

      > span {
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        color: #ffffff;
        text-align: center;
      }
    }

    .status-icon {
      width: 14px;
      height: 18px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;

      &.up {
        background: url('./assets/produceSafety/shangsheng_icon.png');
        background-position: center;
      }

      &.down {
        background: url('./assets/produceSafety/xiajiang_icon.png');
        background-position: center;
      }
    }

    .bg1 {
      background: url(./assets/productionOperation/touzi_green_bg.png);
      background-position: center;
    }

    .bg2 {
      background: url(./assets/productionOperation/touzi_green_bg.png);
      background-position: center;
    }
  }
}

.month-total {
  // height: 103px;
  height: 74px;
  margin-bottom: 10px;
  // margin-left: 15px;
  // @include bgImg('./assetsyear_bg.png', calc(100% - 30px), 100%);
  background-position: center;

  .total-title {
    width: 100%;
    height: 26px;
    text-align: center;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 26px;
    background: linear-gradient(90deg, rgba(0, 112, 176, 0) 0%, rgba(0, 112, 176, 0.49) 47%, rgba(0, 112, 176, 0) 100%);
  }

  .total-content {
    height: calc(100% - 26px);
    width: 100%;
    padding: 10px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;

    .total-item {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      position: relative;

      &::before {
        content: '';
        height: 5px;
        width: 5px;
        border-radius: 3px;
        position: absolute;
        left: 3px;
        top: calc(50% - 3px);
        background: #06f8f4;
      }

      .blue-text {
        color: #06f8f4;
        font-weight: Medium;
        font-family: DIN-Medium;
      }

      .green-text {
        color: #43c591;
        font-weight: Medium;
        font-family: DIN-Medium;
      }
    }
  }
}

// .time-select {
//   width: 135px;
//   ::v-deep {
//     .el-input__inner {
//       height: 28px;
//       width: 135px;
//       line-height: 28px;
//       background: #0b182e;
//       border: 1px solid #0f4c6a;
//       border-radius: 3px;
//       color: #fff;
//     }
//     .el-input__icon {
//       line-height: 28px;
//     }
//   }
// }
</style>