<template>
  <div class="base-chart" :style="{height:height}"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'baseChart',
  props: {
    className: {
      type: String,
      default: 'baseChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    optionData: {
      type: Object,
      required: true,
    },
    wordCloudAnimition: {
      type: Boolean,
      default: false,
    },
    isScale: {
      type: Boolean,
      default: false,
    },
    scaleStyles: {
      type: Object,
      default: () => ({
        transformOrigin: '50% 0',
      }),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    optionData: {
      deep: true,
      handler(val) {
        if (this.chart) {
          this.chart.clear();
          this.chart.setOption(val);
        }
      },
    },
    wordCloudAnimition: {
      deep: true,
      handler(val) {
        if (val) {
          this.setWordcloudAni();
        }
      },
    },
  },

  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.clear();
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el, 'macarons');
      this.chart.setOption(this.optionData);
      this.$emit('on-chart-init');
      if (this.wordCloudAnimition) {
        this.setWordcloudAni();
      }
      this.chart.on('mouseover', (params) => {
        // this.$bus.$emit('echartsMouseOver', params);
      });
    },
    resetChart() {
      this.chart.clear();
      this.chart.setOption(this.optionData);
    },
    refreshChart() {
      this.chart.setOption(this.optionData);
    },
    setWordcloudAni() {
      // console.log('this.setWordcloudAni();');
      this.$nextTick(() => {
        let rotation = 0;
        const myChart = this.chart;
        setInterval(function () {
          myChart.setOption({
            graphic: [
              {
                id: 'logo',
                rotation: -(rotation += Math.PI / 860) % (Math.PI * 2),
              },
              {
                id: 'logo1',
                rotation: -(rotation += Math.PI / 640) % (Math.PI * 2),
              },
              {
                id: 'logo2',
                rotation: -(rotation += Math.PI / 360) % (Math.PI * 2),
              },
              {
                id: 'logo3',
                rotation: -(rotation += Math.PI / 720) % (Math.PI * 2),
              },
            ],
          });
        }, 300);
      });
    },
  },
};
</script>

<style scoped lang="less">
.base-chart {
  height: 100%;
  width: 100%;
}
</style>