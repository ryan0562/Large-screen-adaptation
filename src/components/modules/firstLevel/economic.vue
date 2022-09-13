<template>
  <col-block title="经济指标" height="283px" v-loading="isEcLoading">
    <div slot="headerright" class="time-tips">
      <!-- [{{timeRange[0]}}年{{timeRange[1]}}-{{timeRange.slice(-1)[0]}}] -->
      [{{timeRange[0]}}-{{timeRange.slice(-1)[0]}}]
    </div>
    <div class="economic">
      <el-carousel height="227px" :interval="5000" @change="setIndex" indicator-position="none" :autoplay="false">
        <el-carousel-item>
          <div class="economic-info">
            <div class="info-row  border-title row1 ell">
              <p>固定资产投资总额 <span class="value">{{investmentData.tz || '/'}}</span>亿元</p>
              <p v-if="investmentData.tztb !== ''">同比
                <i v-if="investmentData.tztb !== 0" :class="['arrow-icon', investmentData.tztb < 0 ? 'down' : 'up']"></i>
                <span :class="['growth', investmentData.tztb  < 0 ? 'down' : 'up']" v-show="investmentData.tztb !== ''">{{Math.abs(investmentData.tztb).toFixed(2)}}%</span>
              </p>
            </div>
            <chart ref="myChart" height="200px" v-if="chart1Data.length" :optionData="optionData1" class="chart1" isScale width="378px" :scaleStyles="{transformOrigin: '0 0'}"></chart>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="economic-info">
            <div class="info-row  border-title row1 ell">
              <p>工业总产值 <span class="value">{{industrialData.cz}}</span>亿元</p>
              <p class="right-text" v-if="industrialData.cztb !== ''">同比
                <i v-if="industrialData.cztb !== 0" :class="['arrow-icon', industrialData.cztb < 0 ? 'down' : 'up']"></i>
                <span :class="['growth', industrialData.cztb < 0 ? 'down' : 'up']" v-show="industrialData.cztb">{{Math.abs(industrialData.cztb).toFixed(2)}}%</span>
              </p>
            </div>
            <div class="info-row  border-title row2 ell">
              <p>销售收入 <span class="value">{{industrialData.xs}}</span>亿元</p>
              <p class="right-text" v-if="industrialData.xstb !== ''">同比
                <i v-if="industrialData.xstb !== 0" :class="['arrow-icon', industrialData.xstb < 0 ? 'down' : 'up']"></i>
                <span :class="['growth', industrialData.xstb < 0 ? 'down' : 'up']" v-show="industrialData.xstb">{{Math.abs(industrialData.xstb).toFixed(2)}}%</span>
              </p>
            </div>
            <chart ref="myChart" height="170px" v-if="chart2Data.length" :optionData="optionData2" class="chart2" isScale width="378px" :scaleStyles="{transformOrigin: '0 0'}"></chart>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="economic-info">
            <div class="info-row border-title row1 ell">
              <p>利润 <span class="value">{{profitData.lr || '/'}}</span>亿元</p>
              <p class="right-text" v-if="profitData.lrtb !== ''">同比
                <i v-if="profitData.lrtb !== 0" :class="['arrow-icon', profitData.lrtb < 0 ? 'down' : 'up']"></i>
                <span :class="['growth', profitData.lrtb < 0 ? 'down' : 'up']" v-show="profitData.lrtb">{{Math.abs(profitData.lrtb).toFixed(2)}}%</span>
              </p>
            </div>
            <div class="info-row border-title row2 ell">
              <p>税收 <span class="value">{{ profitData.ss || '/'}}</span>亿元</p>
              <p class="right-text" v-if=" profitData.sstb !== ''">同比
                <i v-if=" profitData.sstb !== 0" :class="['arrow-icon',  profitData.sstb < 0 ? 'down' : 'up']"></i>
                <span :class="['growth',  profitData.sstb < 0 ? 'down' : 'up']" v-show="profitData.sstb">{{ Math.abs(profitData.sstb).toFixed(2)}}%</span>
              </p>
            </div>
            <chart ref="myChart" height="170px" v-if="chart3Data.length" :optionData="optionData3" class="chart2" isScale width="378px" :scaleStyles="{transformOrigin: '0 0'}"></chart>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="economic-info">
            <mti-note width="440" height="231" left="0" top="0" fontSize="24" v-show="curScence==='productionOperation'"></mti-note>
            <div class="info-row border-title row1 ell">
              <p>综合能耗 <span class="value">{{energyData.nh || '/'}}</span>万吨标煤</p>
              <p v-if="energyData.nhtb !== ''">同比
                <i v-if="energyData.nhtb !== 0" :class="['arrow-icon', Number(energyData.nhtb) < 0 ? 'down' : 'up']"></i>
                <span :class="['growth', Number(energyData.nhtb)  < 0 ? 'down' : 'up']" v-show="energyData.nhtb">{{Math.abs(energyData.nhtb).toFixed(2)}}%</span>
              </p>
            </div>
            <chart ref="myChart" height="200px" v-if="chart4Data.length" :optionData="optionData4" class="chart1" isScale width="378px" :scaleStyles="{transformOrigin: '0 0'}"></chart>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </col-block>
</template>

<script>
import colBlock from '@/components/common/colBlock/index.vue';
import chart from '@/components/common/chart/index.vue';
import produceRuningApi from '@/api/produceRuning.js';
import { mapState } from 'vuex';

export default {
  name: '',
  props: {},
  components: {
    colBlock,
    chart
  },
  data() {
    return {
      activeIndex: 0,
      chart1Data: [],
      chart2Data: [],
      chart3Data: [],
      // chart4Data: [70, 20, 30, 40, 50, 60, 70, 20, 30, 40, 50, 60],
      chart4Data: [],
      // yAxis: ['固定资产投资（亿元）', '产值/销售（亿元）', '利润/税收（亿元）', '能耗'],
      colors: ['#2DE4E5', '#D9AA3C'],
      xAxisLable: [],
      industrialData: {},
      profitData: {},
      investmentData: {},
      energyData: {},
      // energyTotal: '',
      // energyTongbi: '',
      isEcLoading: false,
      timeRange: []
    };
  },
  watch: {},
  computed: {
    ...mapState({
      curScence: state => state.ui.curScence
    }),
    optionData1() {
      let _this = this;
      return {
        // color: ['#1C86F1'],
        legend: {
          show: true,
          data: ['固定资产投资'],
          textStyle: {
            color: '#89D1FF',
            fontSize: 14
          },
          right: 5,
          top: 15
        },
        dataZoom: [
          {
            type: 'inside',
            startValue: 7,
            endValue: 12
          }
        ],
        grid: {
          top: '35',
          left: '10',
          right: '15',
          bottom: '10',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          borderWidth: 0,
          formatter: val => {
            const time = _this.$dayjs(this.xAxisLable[val[0].dataIndex]).format('YYYY年MM月');
            return `${time}<br />${val[0].seriesName}：${val[0].value}亿元`;
          },
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          },
          backgroundColor: 'rgba(2, 6, 15, 0.8)'
        },
        xAxis: {
          type: 'category',
          // name: '月',
          // nameLocation: 'end',
          // nameTextStyle: {
          //   align: 'right',
          //   color: '#B3DBFF',
          //   padding: [0, 0, 0, 8]
          // },
          data: this.chart1Data.map(item => {
            return `${item.month}月`;
          }),
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 12
            }
          }
        },
        yAxis: {
          name: '亿元',
          nameLocation: 'end',
          nameTextStyle: {
            align: 'center',
            color: '#B3DBFF',
            padding: [0, 0, 0, 0]
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 14
            }
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            // gird 区域中的分割线
            show: true, // 是否显示
            lineStyle: {
              color: '#092C48',
              width: 1
            }
          }
        },
        series: [
          {
            name: '固定资产投资',
            type: 'bar',
            barWidth: 10,
            data: this.chart1Data.map(item => {
              return item.total.toFixed(2);
            }),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[0] },
                  { offset: 0, color: this.colors[0] }
                ]),
                barBorderRadius: 12
              }
            },
            tooltip: {
              formatter: '{a}<br />{b}：{c}亿元'
            }
          }
        ]
      };
    },
    optionData2() {
      let _this = this;
      return {
        legend: {
          show: true,
          data: ['产值', '销售'],
          textStyle: {
            color: '#89D1FF',
            fontSize: 14
          },
          right: 5,
          top: 15
        },
        dataZoom: [
          {
            type: 'inside',
            startValue: 7,
            endValue: 12
          }
        ],
        grid: {
          top: '35',
          left: '10',
          right: '15',
          bottom: '5',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: val => {
            const time = _this.$dayjs(this.xAxisLable[val[0].dataIndex]).format('YYYY年MM月');
            return `${time}<br />${val[0].seriesName}：${val[0].value}亿元<br />${val[1].seriesName}：${val[1].value}亿元`;
          },
          borderWidth: 0,
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          },
          backgroundColor: 'rgba(2, 6, 15, 0.8)'
        },
        xAxis: {
          type: 'category',
          data: this.chart2Data[0].map(item => {
            return `${item.month}月`;
          }),
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 12
            }
          }
        },
        yAxis: {
          name: '亿元',
          nameLocation: 'end',
          nameTextStyle: {
            align: 'right',
            color: '#B3DBFF',
            padding: [0, 0, 0, 0]
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 14
            }
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            // gird 区域中的分割线
            show: true, // 是否显示
            lineStyle: {
              color: '#092C48',
              width: 1
            }
          }
        },
        series: [
          {
            name: '产值',
            type: 'bar',
            barWidth: 10,
            data: this.chart2Data[0].map(item => {
              return item.total.toFixed(2);
            }),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[0] },
                  { offset: 0, color: this.colors[0] }
                ]),
                barBorderRadius: 12
              }
            },
            tooltip: {
              formatter: '{a}<br />{b}：{c}亿元'
            }
          },
          {
            name: '销售',
            type: 'bar',
            barWidth: 10,
            data: this.chart2Data[1].map(item => {
              return item.total.toFixed(2);
            }),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[1] },
                  { offset: 0, color: this.colors[1] }
                ]),
                barBorderRadius: 12
              }
            },
            tooltip: {
              formatter: '{a}<br />{b}：{c}亿元'
            }
          }
        ]
      };
    },
    optionData3() {
      let _this = this;
      const xData = this.chart3Data[0].map(item => {
        return `${item.month}月`;
      });
      const month1 = this.chart3Data[0].map(item => {
        return `${item.year}年${item.month}月`;
      });
      const month2 = this.chart3Data[1].map(item => {
        return `${item.year}年${item.month}月`;
      });
      const option = {
        legend: {
          show: true,
          data: ['利润', '税收'],
          textStyle: {
            color: '#89D1FF',
            fontSize: 14
          },
          right: 5,
          top: 15
        },
        dataZoom: [
          {
            type: 'inside',
            startValue: 7,
            endValue: 12
          }
        ],
        grid: {
          top: '35',
          left: '10',
          right: '15',
          bottom: '5',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: val => {
            const time = _this.$dayjs(this.xAxisLable[val[0].dataIndex]).format('YYYY年MM月');
            return `${time}<br />${val[0].seriesName}：${val[0].value}亿元<br />${val[1].seriesName}：${val[1].value}亿元`;
          },
          borderWidth: 0,
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          },
          backgroundColor: 'rgba(2, 6, 15, 0.8)'
        },
        xAxis: {
          type: 'category',
          // name: '月',
          // nameLocation: 'end',
          // nameTextStyle: {
          //   align: 'right',
          //   color: '#B3DBFF',
          //   padding: [0, 0, 0, 8]
          // },
          data: xData,
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 12
            }
          }
        },
        yAxis: {
          name: '亿元',
          nameLocation: 'end',
          nameTextStyle: {
            align: 'right',
            color: '#B3DBFF',
            padding: [0, 0, 0, 0]
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 14
            }
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            // gird 区域中的分割线
            show: true, // 是否显示
            lineStyle: {
              color: '#092C48',
              width: 1
            }
          }
        },
        series: [
          {
            name: '利润',
            type: 'bar',
            barWidth: 10,
            data: this.chart3Data[0].map(item => {
              return item.total.toFixed(2);
            }),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[0] },
                  { offset: 0, color: this.colors[0] }
                ]),
                barBorderRadius: 12
              }
            }
          },
          {
            name: '税收',
            type: 'bar',
            barWidth: 10,
            data: month1.map((item, idx) => {
              const daIdx = month2.indexOf(month1[idx]);
              if (daIdx > -1) {
                return this.chart3Data[1][daIdx].total.toFixed(2);
              } else {
                return 0;
              }
            }),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[1] },
                  { offset: 0, color: this.colors[1] }
                ]),
                barBorderRadius: 12
              }
            }
          }
        ]
      };
      console.log('return', option);
      return option;
    },
    optionData4() {
      let _this = this;
      return {
        // color: ['#1C86F1'],
        legend: {
          show: true,
          data: ['综合能耗'],
          textStyle: {
            color: '#89D1FF',
            fontSize: 14
          },
          right: 5,
          top: 15
        },
        dataZoom: [
          {
            type: 'inside',
            startValue: 7,
            endValue: 12
          }
        ],
        grid: {
          top: '35',
          left: '10',
          right: '15',
          bottom: '10',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: val => {
            const time = _this.$dayjs(this.xAxisLable[val[0].dataIndex]).format('YYYY年MM月');
            return `${time}<br />${val[0].seriesName}：${val[0].value}万吨标煤`;
          },
          // appendToBody: true,
          borderWidth: 0,
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          },
          backgroundColor: 'rgba(2, 6, 15, 0.8)'
        },
        xAxis: {
          type: 'category',
          data: this.chart4Data.map(item => {
            return `${item.month}月`;
          }),
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 12
            }
          }
        },
        yAxis: {
          name: '万吨标煤',
          nameLocation: 'end',
          nameTextStyle: {
            align: 'center',
            color: '#B3DBFF',
            padding: [0, 0, 0, 0]
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#005986',
              width: '1  ' // 坐标线的宽度
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B3DBFF',
              fontSize: 14
            }
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            // gird 区域中的分割线
            show: true, // 是否显示
            lineStyle: {
              color: '#092C48',
              width: 1
            }
          }
        },
        series: [
          {
            name: '综合能耗',
            type: 'bar',
            barWidth: 10,
            data: this.chart4Data.map(item => {
              return item.total.toFixed(2);
            }),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: 'transparent' },
                  { offset: 0.5, color: this.colors[0] },
                  { offset: 0, color: this.colors[0] }
                ]),
                barBorderRadius: 12
              }
            },
            tooltip: {
              formatter: '{a}<br />{b}：{c}万吨标煤'
            }
          }
        ]
      };
    }
  },
  created() {},
  mounted() {
    this.initData();
  },
  destroyed() {},
  methods: {
    setIndex(index) {
      this.activeIndex = index;
    },
    initData() {
      this.isEcLoading = true;
      this.timeRange = [];
      produceRuningApi
        .findEconomicMonthNew({})
        .then(data => {
          // // // 固定投资
          // const investment = data.touzi.tzList.map(item => {
          //   return item.total.toFixed(2);
          // });
          // // 销售
          // const sales = data.gongye.xsList.map(item => {
          //   return item.total.toFixed(2);
          // });
          // // 工业
          // const industrial = data.gongye.czList.map(item => {
          //   return item.total.toFixed(2);
          // });

          // // 利润
          // const profit = data.lirun.lrList.map(item => {
          //   return item.total.toFixed(2);
          // });

          // // 税收
          // const taxRevenue = data.lirun.ssList.map(item => {
          //   return item.total.toFixed(2);
          // });
          // // 能耗
          // const energy = data.nenghao.nhList.map(item => {
          //   return item.total.toFixed(2);
          // });

          this.investmentData = data.touzi;
          this.industrialData = data.gongye;
          this.profitData = data.lirun;
          this.energyData = data.nenghao;
          this.chart1Data = data.touzi.tzList;
          this.chart2Data = [data.gongye.czList, data.gongye.xsList];
          this.chart3Data = [data.lirun.lrList, data.lirun.ssList];
          this.chart4Data = data.nenghao.nhList;
          const currentYear = data.gongye.czList[0].year;
          // this.timeRange.push(currentYear);
          data.gongye.czList.map((item, idx) => {
            this.xAxisLable.push(`${item.year}-${item.month}`);
            // this.xAxisLable.push(`${item.time.split('-')[1]}月`);
            if (idx > 0 && item.year === currentYear) {
              this.timeRange.push(`${item.month}月`);
            } else {
              this.timeRange.push(`${item.year}年${item.month}月`);
            }
          });
          this.isEcLoading = false;
        })
        .catch(() => {
          this.isEcLoading = false;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.time-tips {
  color: #89d1ff;
}
.economic {
  padding: 10px;
  position: relative;

  .economic-info {
    height: 50px;
    width: 100%;
    .info-row {
      width: 100%;
      height: 25px;
      margin-top: 8px;
      @include flex(space-between, center);
      padding: 0 10px;
      line-height: 22px;
      font-size: 16px;
      color: #ffffff;
      position: relative;
      text-align: center;
      // @include bgImg('~@/assets/images/productionOperation/money_title_bg.png');

      &.row1 {
        margin-top: 5px;
      }
      .right-text {
        display: inline-block;
        min-width: 120px;
      }
    }

    .value {
      padding: 0 3px;
    }

    .growth {
      &.up {
        color: #da4040;
      }
      &.down {
        color: #3bb21b;
      }
    }

    .row1 {
      .value {
        color: #06f8f4;
        font-size: 20px;
      }
    }

    .row2 {
      .value {
        color: #ffa400;
        font-size: 20px;
      }
    }

    .arrow-icon {
      display: inline-block;
      width: 13px;
      height: 18px;
      vertical-align: text-top;

      &.up {
        @include bgImg('~@/assets/images/produceSafety/shangsheng_icon.png');
      }

      &.down {
        @include bgImg('~@/assets/images/produceSafety/xiajiang_icon.png');
      }
    }

    .economic-chart {
      width: 100%;
    }
  }
}
</style>