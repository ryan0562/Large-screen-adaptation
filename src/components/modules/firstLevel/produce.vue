<template>
  <col-block
    title="生产负荷"
    height="247px"
  >
    <div slot="headerright">
      <!-- <el-date-picker v-model="monthData" type="month" placeholder="选择年月" format="yyyy年MM月" value-format="yyyy-MM" :clearable="false" :editable="false">
      </el-date-picker> -->
      <select-month
        v-model="monthData"
        @on-change="getData"
      />
    </div>
    <div
      class="produce-content"
      v-loading="loading"
    >
      <template v-if="list.length">
        <div
          class="pro-item"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="item-top">{{item.rate || 0}}%</div>
          <div
            class="item-bottom ell"
            :title="item.type"
          >{{item.type}}</div>
        </div>
      </template>
      <mti-nodata v-else></mti-nodata>
    </div>
    <div class="time-tips">[平均值]</div>
  </col-block>

</template>

<script>
import colBlock from '@/components/common/colBlock/index.vue';
import chart from '@/components/common/chart/index.vue';
import produceRuningApi from '@/api/produceRuning.js';
import selectMonth from '@/components/common/selectMonth';
export default {
  name: '',
  props: {},
  components: {
    colBlock,
    chart,
    selectMonth
  },
  data() {
    return {
      monthData: '',
      list: [],
      loading: true
    };
  },
  // watch: {
  //   monthData: {
  //     immediate: true,
  //     handler(monthData) {
  //       if (monthData) {
  //         this.getData();
  //       }
  //     }
  //   }
  // },
  computed: {},
  created() {},
  mounted() {
    this.getData();
  },
  destroyed() {},
  methods: {
    getData() {
      this.loading = true;
      produceRuningApi
        .findProductionLoad({
          date: this.monthData
        })
        .then(res => {
          if (res) {
            this.list = res.list || [];
            if (!this.monthData) {
              this.monthData = res.lastDate || this.$currentMonth;
            }
          } else {
            this.list = [];
            if (!this.monthData) {
              this.monthData = this.$currentMonth;
            }
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.time-tips {
  color: #89d1ff;
  position: absolute;
  bottom: 4px;
  right: 15px;
}

.produce-content {
  // height: 100%;
  width: 100%;
  @include flex(flex-start, flex-start);
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0 10px;
  height: 214px;
  position: relative;
  .pro-item {
    height: 86px;
    width: 50%;
    padding: 0px 20px;
    text-align: center;
    margin-top: 5px;

    &:nth-child(1) {
      .item-top {
        @include bgImg('~@/assets/images/productionOperation/green_icon.png');
        background-size: 78% 30px;
        background-position: bottom;
      }
    }
    &:nth-child(2) {
      .item-top {
        @include bgImg('~@/assets/images/productionOperation/green_o1_icon.png');
        background-size: 78% 30px;
        background-position: bottom;
      }
    }
    &:nth-child(3) {
      .item-top {
        @include bgImg('~@/assets/images/productionOperation/blue_01_icon.png');
        background-size: 78% 30px;
        background-position: bottom;
      }
    }

    .item-top {
      position: relative;
      height: 65px;
      width: 100%;
      @include bgImg('~@/assets/images/productionOperation/blue_icon.png');
      background-size: 78% 30px;
      background-position: bottom;
      font-size: 24px;
      font-family: DIN;
      font-weight: 500;
      color: #ffffff;
      line-height: 50px;
      animation: upDownMove 1.5s ease-in infinite;
      transform: translate3d(0, 0, 0);
    }

    .item-bottom {
      height: 30px;
      width: 100%;
      @include bgImg('~@/assets/images/productionOperation/fuhe_title_bg.png');
      background-size: 100% 30px;
      background-position: bottom;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 30px;
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

@keyframes upDownMove {
  0% {
    top: 0;
  }
  30% {
    top: -2px;
  }
  70% {
    top: 2px;
  }
  100% {
    top: 0;
  }
}
</style>