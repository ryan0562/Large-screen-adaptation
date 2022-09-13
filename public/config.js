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


//使用策略
let useLayout = '3840_1080';
let useScreen = 'scence1';//使用策略下的哪个幕布
let theme = 'default';//使用皮肤
let animateIn = 'fadeIn'; //使用切屏的动画
let animateOut = 'fadeOut'; //使用切屏的动画 fadeOut rotateYOut





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
      background: '#000',
      color: '#fff'
    },
    header: {
      visible: true, //默认为true
      title: '黑色主题模板111',
      styles: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        zIndex: 20,
      },
      date: {
        visible: true, //默认为true
        styles: {
          top: '15px',
          left: '80px',
        },
      },
      weather: {
        visible: true, //默认为true
        styles: {
          top: '15px',
          right: '168px',
        },
      },
    },
    map: {
      offset: ['0', '0'], //非空
      size: ['100%', '50%'], //非空
      zindex: 0, //默认为0
      visible: true //默认为true
    },
    dataArea_left: {
      1: {
        visible: true,
        moduleId: 'safe',
        styles: {
          width: '440px',
          height: '972px',
          top: '93px',
          left: '20px',
          zIndex: 1,
        },
      },
      2: {
        visible: true,
        moduleId: 'production',
        styles: {
          width: '440px',
          height: '972px',
          top: '93px',
          left: '472px',
          zIndex: 1,
        },
      },

    },
    dataArea_right: {
      1: {
        visible: true,
        moduleId: 'safe',
        styles: {
          width: '440px',
          height: '972px',
          top: '93px',
          right: '20px',
          zIndex: 1,
        },
      },
      2: {
        visible: true,
        moduleId: 'production',
        styles: {
          width: '440px',
          height: '972px',
          top: '93px',
          right: '472px',
          zIndex: 1,
        },
      },
    },

  },
  "1920_1080": {
    visible: true, //默认为true
    styles: {
      width: "1920px",
      height: "1080px",
      zIndex: "0",
      background: '#000',
      color: '#fff'
    },
    header: {
      visible: true, //默认为true
      title: '黑色主题模板111',
      styles: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        zIndex: 20,
      },
      date: {
        visible: true, //默认为true
        styles: {
          top: '15px',
          left: '80px',
        },
      },
      weather: {
        visible: true, //默认为true
        styles: {
          top: '15px',
          right: '168px',
        },
      },
    },
    map: {
      offset: ['0', '0'], //非空
      size: ['100%', '50%'], //非空
      zindex: 0, //默认为0
      visible: true //默认为true
    },
    dataArea_left: {
      1: {
        visible: true,
        moduleId: 'safe',
        styles: {
          width: '440px',
          height: '972px',
          top: '93px',
          left: '20px',
          zIndex: 1,
        },
      },
    },
    dataArea_right: {
      1: {
        visible: true,
        moduleId: 'safe',
        styles: {
          width: '440px',
          height: '972px',
          top: '93px',
          right: '20px',
          zIndex: 1,
        },
      },
    },
  },
};

// 数据模块
const dataAreaModules = {
  'safe': {
    title: '公共安全',
    modules: [
      {
        showHeader: true,
        title: '实时警情',
        component: {
          is: 'realTimePolice',
        },
        styles: {
          height: "154px",
          marginTop: '12px',
        }
      },
      {
        showHeader: true,
        title: '视频监控',
        styles: {
          height: "242px",
          marginTop: '12px',
        },
        component: {
          is: 'myVideo',
        },
      },
    ]
  },
  'production': {
    title: '生产运行',
    modules: [
      {
        showHeader: true,
        title: '投资促进',
        styles: {
          height: "242px",
          marginTop: '12px',
        },
        component: {
          is: 'bbb',
        },
      },
      {
        showHeader: true,
        title: '经济指标',
        component: {
          is: 'realTimePolice',
        },
        styles: {
          height: "154px",
          marginTop: '12px',
        }
      },
    ]
  },
  'emergency': {
    title: '安全应急',
    modules: [
      {
        showHeader: true,
        title: '应急资源',
        component: {
          is: 'aaa',
        },
        styles: {
          height: "250px",
          marginTop: '12px',
        }
      },
      {
        showHeader: true,
        title: '累计安全天数',
        styles: {
          height: "242px",
          marginTop: '12px',
        },
        component: {
          is: 'bbb',
        },
      },
      {
        showHeader: true,
        title: '接处警情况',
        component: {
          is: 'ccc',
        },
        styles: {
          height: "133px",
          marginTop: '12px',
        }
      },

    ]
  },
}







const config = {
  useLayout,
  useScreen,//使用策略下的哪个幕布
  theme,
  layout,
  animateIn,
  animateOut,
  dataAreaModules
};

window.$config = config
window.$layout = config.layout[config.useLayout]
// export default config
