//使用策略
let useLayout = '3840_1080';
let theme = 'huagong';//使用主题 anbao|huagong
let animateIn = 'rotateYIn'; //使用切屏的动画
let animateOut = 'rotateYOut'; //使用切屏的动画 fadeOut rotateYOut
let screen = 'ftfx'

/**
* 布局
*/
let layout = {
  /* 化工 */
  huagong: {
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
        title: '蓝色主题模板',
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
        back: {
          visible: true, //默认为true
          styles: {
            top: '16px',
            left: '25px',
          },
        }
      },
      map: {
        offset: ['0', '0'], //非空
        size: ['100%', '50%'], //非空
        zindex: 0, //默认为0
        visible: true //默认为true
      },
      dataArea: {
        home: {
          left: {
            1: {
              visible: true,
              hasMark: true,
              type: 1,
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
              hasMark: true,
              type: 1,
              moduleId: 'production',
              styles: {
                width: '440px',
                height: '972px',
                top: '93px',
                left: '472px',
                zIndex: 1,
              },
            },
            3: {
              visible: true,
              hasMark: true,
              type: 1,
              moduleId: 'emergency',
              styles: {
                width: '440px',
                height: '972px',
                top: '93px',
                left: '932px',
                zIndex: 1,
              },
            },
          },
          right: {
            1: {
              visible: true,
              moduleId: 'safe',
              hasMark: true,

              type: 1,
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
              hasMark: true,

              type: 1,
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
        safe: {
          left: {
            1: {
              visible: true,
              type: 2,
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
              type: 2,
              moduleId: 'safe',
              styles: {
                width: '440px',
                height: '972px',
                top: '93px',
                left: '472px',
                zIndex: 1,
              },
            },
          },
          right: {
            1: {
              visible: true,
              moduleId: 'safe',
              type: 2,
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
              type: 2,
              moduleId: 'safe',
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
        ftfx: {
          left: {
            1: {
              visible: true,
              type: 2,
              moduleId: 'fxft_baseInfo',
              styles: {
                width: '440px',
                height: '935px',
                top: '125px',
                left: '20px',
                zIndex: 1,
              },
            },
            2: {
              visible: true,
              type: 2,
              moduleId: 'fxft_eventInfo',
              styles: {
                width: '440px',
                height: '935px',
                top: '125px',
                left: '472px',
                zIndex: 1,
              },
            },
          },
          right: {
            1: {
              visible: true,
              moduleId: 'fxft_realtime',
              type: 2,
              styles: {
                width: '880px',
                height: '935px',
                top: '125px',
                right: '20px',
                zIndex: 1,
              },
            },
          },
        },
      },
      dataAreaModules: {
        'safe': {
          title: '公共安全',
          modules: [
            {
              showHeader: true,
              hasBox: true,
              title: '视频监控',
              styles: {
                height: "155px",
                marginTop: '12px',
              },
              component: {
                is: 'realTimePolice',
              },
            },
            {
              showHeader: true,
              hasBox: true,
              title: '实时警情',
              component: {
                is: 'myVideo',
              },
              styles: {
                height: "320px",
                marginTop: '12px',
              }
            },
          ]
        },
        'production': {
          title: '生产运行',
          modules: [
            {
              showHeader: true,
              hasBox: true,
              title: '投资促进',
              styles: {
                height: "320px",
                marginTop: '12px',
              },
              component: {
                is: 'investment',
              },
            },
            {
              showHeader: true,
              hasBox: true,
              title: '经济指标',
              component: {
                is: 'aaa',
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
              hasBox: true,
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
              hasBox: true,
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
              hasBox: true,
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
        "video": {
          title: "视频",
          modules: [
            {
              showHeader: false,
              hasBox: true,
              title: '实时警情',
              component: {
                is: 'myVideo',
              },
              styles: {
                height: "320px",
                marginTop: '12px',
              }
            },
          ]
        },
        'fxft_baseInfo': {
          title: '基础信息',
          modules: [
            {
              showHeader: true,
              hasBox: true,
              title: '今日值班',
              type: 2,
              hasBox: true,
              styles: {
                height: "270px",
                marginTop: '10px',
              },
              component: {
                is: 'myImg',
                src: '/demoImg/l_1_1.png',
                style: {
                  width: "100%"
                }
              },
            },
            {
              showHeader: true,
              hasBox: true,
              title: '防汛物资',
              type: 2,
              styles: {
                height: "312px",
                marginTop: '10px',
              },
              component: {
                is: 'myImg',
                src: '/demoImg/l_1_2.png',
                style: {
                  width: "100%"
                }
              },
            },
            {
              showHeader: true,
              hasBox: true,
              title: '防汛队伍',
              type: 2,
              styles: {
                height: "270px",
                marginTop: '10px',
              },
              component: {
                is: 'myImg',
                src: '/demoImg/l_1_3.png',
                style: {
                  width: "100%"
                }
              },
            },

          ]
        },
        'fxft_eventInfo': {
          title: '事件信息',
          modules: [
            {
              showHeader: true,
              title: '防汛预警相应',
              type: 2,
              styles: {
                height: "225px",
                marginTop: '12px',
              },
              component: {
                is: 'myImg',
                src: '/demoImg/l_2_1.png',
                style: {
                  width: "100%"
                }
              },
            },
            {
              showHeader: true,
              type: 2,
              title: '事件列表',
              component: {
                is: 'myImg',
                src: '/demoImg/l_2_2.png',
                style: {
                  width: "100%"
                }
              },
              styles: {
                height: "400px",
                marginTop: '12px',
              }
            },
          ]
        },
        'fxft_realtime': {
          title: '实时气象',
          type: 2,
          modules: {
            left: [{
              showHeader: true,
              title: '防汛预警相应',
              type: 2,
              styles: {
                height: "225px",
                marginTop: '12px',
              },
              component: {
                is: 'myImg',
                src: '/demoImg/r_1_1.png',
                style: {
                  width: "100%"
                }
              },
            },
            {
              showHeader: true,
              type: 2,
              title: '事件列表',
              component: {
                is: 'myImg',
                src: '/demoImg/r_1_2.png',
                style: {
                  width: "100%"
                }
              },
              styles: {
                height: "400px",
                marginTop: '12px',
              }
            }],
            right: {

            }
          }


        },
      },
      menu: {
        visible: true,
        styles: {
          width: '60px',
          top: '93px',
          left: '1390px',
          zIndex: 2,
        },
        children: {
          ftfx: {
            name: '防台防汛',
          },
          fold: {
            name: '折叠',
          }
        }
      },
    },
  },
  /* 安保 */
  anbao: {
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
        title: '安保主题模板',
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
          moduleId: 'video',
          styles: {
            width: '755px',
            height: '420px',
            top: '10px',
            left: '0',
            zIndex: 1,
          },
        },
        2: {
          visible: true,
          hasBox: true,
          moduleId: 'safe',
          styles: {
            width: '366px',
            height: '635px',
            top: '435px',
            left: '0',
            zIndex: 1,
          },
        },
        3: {
          visible: true,
          hasBox: true,
          moduleId: 'production',
          styles: {
            width: '366px',
            height: '635px',
            top: '435px',
            left: '386px',
            zIndex: 1,
          },
        },
        4: {
          visible: true,
          hasBox: true,
          hasYaw: true,
          moduleId: 'production',
          styles: {
            width: '366px',
            height: '1060px',
            top: '10px',
            left: '768px',
            zIndex: 1,
          },
        },

      },
      dataArea_right: {
        1: {
          visible: true,
          moduleId: 'video',
          styles: {
            width: '755px',
            height: '420px',
            top: '10px',
            right: '0',
            zIndex: 1,
          },
        },
        2: {
          visible: true,
          hasBox: true,
          moduleId: 'safe',
          styles: {
            width: '366px',
            height: '635px',
            top: '435px',
            right: '0',
            zIndex: 1,
          },
        },
        3: {
          visible: true,
          hasBox: true,
          moduleId: 'production',
          styles: {
            width: '366px',
            height: '635px',
            top: '435px',
            right: '386px',
            zIndex: 1,
          },
        },
        4: {
          visible: true,
          hasBox: true,
          hasYaw: true,
          moduleId: 'production',
          styles: {
            width: '366px',
            height: '1060px',
            top: '10px',
            right: '768px',
            zIndex: 1,
          },
        },

      },
      dataAreaModules: {
        'safe': {
          title: '公共安全',
          modules: [
            {
              showHeader: true,
              title: '视频监控',
              styles: {
                marginTop: '12px',
              },
              component: {
                is: 'realTimePolice',
              },
            },
            {
              showHeader: true,
              title: '视频监控',
              styles: {
                marginTop: '12px',
              },
              component: {
                is: 'investment',
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
                height: "320px",
                marginTop: '12px',
              },
              component: {
                is: 'investment',
              },
            },
            {
              showHeader: true,
              title: '经济指标',
              component: {
                is: 'aaa',
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
        "video": {
          title: "视频",
          modules: [
            {
              showHeader: false,
              hasBox: false,
              title: '实时警情',
              component: {
                is: 'myVideo',
              },
              styles: {
                width: "100%",
                height: "100%",
              }
            },
          ]
        }
      },

      menu: {
        visible: true,
        styles: {
          width: '45px',
          bottom: '43px',
          left: '1130px',
          zIndex: 2,
        },
        children: ['addressBook', 'fold',]
      },
    },
  },

};






const config = {
  useLayout,
  theme,
  layout,
  animateIn,
  animateOut,
  screen,
};

window.$config = config
window.$layout = config.layout[config.theme][config.useLayout]
