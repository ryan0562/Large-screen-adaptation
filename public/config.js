// 场景名称 => 场景
// 首页 => scence1
// 公共安全 => panels/publicSafety/index
// 生产运行 => panels/productionOperation/index
// 安全应急 => panels/safetyEmergency/index
// 规划建设 => panels/planningConstruction/index
// 环境监管 => panels/environmentalTesting/index
// 管理服务 => panels/managementService/index

// 安全应急 => scence2
// 安全管理 => panels/securityManagement/index
// 应急体系 => panels/emergencySystem/index
// 应急管理制度 => panels/managementSystem/index
// 应急资源 => panels/emergencyResources/index
// 应急救援队伍 => panels/rescueTeam/index
// 安全监督 => panels/safetySupervision/index
// 基础台帐 => panels/basicAccount/index
// 综合治理 => panels/securityEmergency/index
// 安全文化 => panels/safetyCulture/index

/**
* 布局
*/
let layout = {
  "3840_1080": {
    visible: true, //默认为true
    styles: {
      width: "3840px",
      height: "1080px",
      zIndex: "0",
    },
    header: {
      visible: true, //默认为true
      title: '上海化学工业区一网统管',
      styles: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        zIndex: 20,
      },
    },
    map: {
      offset: ['0', '0'], //非空
      size: ['100%', '50%'], //非空
      zindex: 0, //默认为0
      visible: true //默认为true
    },
    scence: {
      // 一级页面
      scence1: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          title: '公共安全',
          path: 'panels/publicSafety/index',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          path: 'panels/productionOperation/index',
          title: '生产运行',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          path: 'panels/safetyEmergency/index',
          title: '安全应急',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/planningConstruction/firstLevel/index',
          title: '规划建设',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/environmentalTesting/index',
          title: '环境监管',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/managementService/index',
          title: '管理服务',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ],
      // 安全应急
      scence2: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          // path: 'panels/securityManagement/index',
          path: 'panels/safetyEmergency/secondLevel/leftOne/index',
          title: '生产安全',
          zindex: 1,
          // children: [
          //   {
          //     id: '_0_1',
          //     name: 'boxR',
          //     source: 'evc',
          //     path: 'panels/safetyEmergency/secondLevel/leftOne/leftOneTop/index',
          //     offset: ['0px', '0px'],
          //     size: ['440px', '493px'],
          //     zindex: 0,
          //     visible: true,
          //     closed: false,
          //     scale: 1
          //   },
          //   {
          //     id: '_0_2',
          //     name: 'boxR',
          //     source: 'evc',
          //     path: 'panels/safetyEmergency/secondLevel/leftOne/leftOneBottom/index',
          //     offset: ['0px', '490px'],
          //     size: ['440px', '493px'],
          //     zindex: 0,
          //     closed: false,
          //     visible: true,
          //     scale: 1
          //   }
          // ],
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          title: '危化管理',
          // title: '综合治理',
          path: 'panels/safetyEmergency/secondLevel/leftTwo/index',
          // path: 'panels/securityEmergency/index',
          // children: [
          //   {
          //     id: '_1_0',
          //     name: 'groupL',
          //     source: 'evc',
          //     offset: ['0px', '0px'],
          //     size: ['440px', '484px'],
          //     path: 'panels/securityEmergency/index',
          //     zindex: 9,
          //     visible: true,
          //     scale: 1,
          //     closed: false
          //   },
          //   {
          //     id: '1_1',
          //     name: 'groupL',
          //     source: 'evc',
          //     offset: ['0px', '490px'],
          //     size: ['440px', '480px'],
          //     path: 'panels/managementSystem/index',
          //     zindex: 9,
          //     visible: true,
          //     scale: 1,
          //     closed: false
          //   }
          // ],
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          title: '消防安全',
          path: 'panels/safetyEmergency/secondLevel/leftThree/index',
          // children: [
          //   {
          //     id: '_2_0',
          //     name: 'groupL',
          //     source: 'evc',
          //     offset: ['0px', '0px'],
          //     size: ['440px', '484px'],
          //     path: 'panels/emergencyResources/index',
          //     zindex: 9,
          //     visible: true,
          //     closed: false,
          //     scale: 1
          //   },
          //   {
          //     id: '_2_1',
          //     name: 'groupL',
          //     source: 'evc',
          //     offset: ['0px', '490px'],
          //     size: ['440px', '480px'],
          //     path: 'panels/rescueTeam/index',
          //     zindex: 9,
          //     visible: true,
          //     closed: false,
          //     scale: 1
          //   }
          // ],
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          title: '设备与交通安全',
          path: 'panels/safetyEmergency/secondLevel/rightOne/index',
          // children: [
          //   {
          //     id: '_0_1',
          //     name: 'boxR',
          //     source: 'evc',
          //     path: 'panels/safetySupervision/index',
          //     offset: ['0px', '0px'],
          //     size: ['440px', '484px'],
          //     zindex: 0,
          //     visible: true,
          //     closed: false,
          //     scale: 1
          //   },
          //   {
          //     id: '_0_2',
          //     name: 'boxR',
          //     source: 'evc',
          //     path: 'panels/basicAccount/index',
          //     offset: ['0px', '490px'],
          //     size: ['440px', '480px'],
          //     zindex: 0,
          //     closed: false,
          //     visible: true,
          //     scale: 1
          //   }
          // ],
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/safetyEmergency/secondLevel/rightTwo/index',
          title: '消防安全',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          title: '应急防控',
          path: 'panels/safetyEmergency/secondLevel/rightThree/index',
          // children: [
          //   {
          //     id: '_2_0',
          //     name: 'groupL',
          //     source: 'evc',
          //     offset: ['0px', '0px'],
          //     size: ['440px', '484px'],
          //     path: 'panels/emergencyResources/index',
          //     zindex: 9,
          //     visible: true,
          //     closed: false,
          //     scale: 1
          //   },
          //   {
          //     id: '_2_1',
          //     name: 'groupL',
          //     source: 'evc',
          //     offset: ['0px', '490px'],
          //     size: ['440px', '480px'],
          //     path: 'panels/rescueTeam/index',
          //     zindex: 9,
          //     visible: true,
          //     closed: false,
          //     scale: 1
          //   }
          // ],
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ],
      // 公共安全
      publicSafety: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          path: 'panels/publicSafety/secendLevel/leftOne/index',
          title: '视频监控',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          title: '卡口流量',
          // path: 'panels/publicSafety/secendLevel/leftTwo/index',
          children: [
            {
              id: '_1_0',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '0px'],
              size: ['440px', '474px'],
              path: 'panels/publicSafety/secendLevel/leftTwo/leftTwoTop/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            },
            {
              id: '_1_1',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '484px'],
              size: ['440px', '488px'],
              path: 'panels/publicSafety/secendLevel/leftTwo/leftTwoBottom/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            }
          ],
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          title: '实时警情',
          path: 'panels/publicSafety/secendLevel/leftThree/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          title: '全封闭管理',
          path: 'panels/publicSafety/secendLevel/rightOne/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/publicSafety/secendLevel/rightTwo/index',
          title: '企业内保管理',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/publicSafety/secendLevel/rightThree/index',
          title: '视频监控',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ],
      // 环境监管
      environmentalTesting: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          title: '专项管理',
          path: 'panels/environmentalTesting/secendLevel/leftThree/index',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          title: '企业污染源监控',
          path: 'panels/environmentalTesting/secendLevel/leftTwo/index',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          path: 'panels/environmentalTesting/secendLevel/leftOne/index',
          title: '园区环境空气质量监控',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          title: '危废管理',
          path: 'panels/environmentalTesting/secendLevel/rightOne/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/environmentalTesting/secendLevel/rightTwo/index',
          title: '预警执法情况',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/environmentalTesting/secendLevel/rightThree/index',
          title: '企业一企一档',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ],
      // 生产运行
      productionOperation: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          path: '',
          title: '项目准入',
          children: [
            {
              id: '_0_0',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '0px'],
              size: ['440px', '407px'],
              path: 'panels/productionOperation/secendLevel/leftOne/leftOneTop/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            },
            {
              id: '_0_1',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '420px'],
              size: ['440px', '550px'],
              path: 'panels/productionOperation/secendLevel/leftOne/leftOneBottom/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            }
          ],
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          title: '口岸服务',
          // path: "panels/productionOperation/secendLevel/leftTwo/index",
          path: '',
          children: [
            {
              id: '_1_0',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '0px'],
              size: ['440px', '720px'],
              path: 'panels/productionOperation/secendLevel/leftTwo/leftTwoTop/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            },
            {
              id: '1_1',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '730px'],
              size: ['440px', '238px'],
              path: 'panels/productionOperation/secendLevel/leftTwo/leftTwoBottom/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            }
          ],
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          title: '公用工程',
          // path: 'panels/productionOperation/secendLevel/leftThree/index',
          children: [
            {
              id: '_1_0',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '0px'],
              size: ['440px', '312px'],
              path: 'panels/productionOperation/secendLevel/leftThree/leftThreeTop/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            },
            {
              id: '1_1',
              name: 'groupL',
              source: 'evc',
              offset: ['0px', '312px'],
              size: ['440px', '655px'],
              path: 'panels/productionOperation/secendLevel/leftThree/leftThreeBottom/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            }
          ],
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          title: '固定资产投资',
          path: 'panels/productionOperation/secendLevel/rightOne/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          // path: 'panels/productionOperation/secendLevel/rightTwo/index',
          path: '',
          children: [
            {
              id: '_1_0',
              name: 'groupR',
              source: 'evc',
              offset: ['0px', '0px'],
              size: ['440px', '354px'],
              path: 'panels/productionOperation/secendLevel/rightTwo/rightTwoTop/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            },
            {
              id: '1_1',
              name: 'groupR',
              source: 'evc',
              offset: ['0px', '370px'],
              size: ['440px', '603px'],
              path: 'panels/productionOperation/secendLevel/rightTwo/rightTwoBottom/index',
              zindex: 9,
              visible: true,
              closed: false,
              scale: 1
            }
          ],
          title: '主要经济指标',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/productionOperation/secendLevel/rightThree/index',
          title: '综合能源消耗',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ],
      // 规划建设
      planningConstruction: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          path: 'panels/planningConstruction/secendLevel/leftOne/index',
          title: '空间规划',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          title: '前期开发',
          path: 'panels/planningConstruction/secendLevel/leftTwo/index',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          title: '行政许可',
          path: 'panels/planningConstruction/secendLevel/leftThree/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          title: '工地管理',
          path: 'panels/planningConstruction/secendLevel/rightOne/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/planningConstruction/secendLevel/rightTwo/index',
          title: '土地监管',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/planningConstruction/secendLevel/rightThree/index',
          title: '技术支撑',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ],
      // 管理服务
      managementService: [
        {
          id: '_0',
          name: 'groupL',
          source: 'evc',
          offset: ['20px', '93px'],
          size: ['440px', '972px'],
          path: 'panels/managementService/secendLevel/leftOne/index',
          title: '新闻资讯',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupL',
          source: 'evc',
          offset: ['472px', '93px'],
          size: ['440px', '972px'],
          title: '舆情动态',
          path: 'panels/managementService/secendLevel/leftTwo/index',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupL',
          source: 'evc',
          offset: ['924px', '93px'],
          size: ['440px', '972px'],
          title: '绿色班车',
          path: 'panels/managementService/secendLevel/leftThree/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_0',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px)', '93px'],
          size: ['440px', '972px'],
          title: '云网安全',
          path: 'panels/managementService/secendLevel/rightOne/index',
          zindex: 3,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_1',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 452px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/managementService/secendLevel/rightTwo/index',
          title: '医疗服务',
          zindex: 2,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        },
        {
          id: '_2',
          name: 'groupR',
          source: 'evc',
          offset: ['calc(100% - 1364px + 904px)', '93px'],
          size: ['440px', '972px'],
          path: 'panels/managementService/secendLevel/rightThree/index',
          title: '责任关怀',
          zindex: 1,
          visible: true,
          scale: 1,
          class: ['core'],
          closed: false
        }
      ]
    }
  }
};

let useLayout = '3840_1080';
/**
* 皮肤
*/
let theme = 'default';

const config = {
  layout,
  useLayout,
  theme,
};

window.$config = config
// export default config
