export default {
  ALARM: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', scale: '1,1', url: 'icon_jingqing.png' },
            active: { anchor: '0.5,1', scale: '1,1', url: 'zy_icon_jingqing_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '预警',
    multiState: 0,
    detail: {
      path: 'popup-alarm',
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    }
    // "selected": 0
  },
  PENWARNING: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', scale: '1,1', url: 'pen_warning.png' },
            active: { anchor: '0.5,1', scale: '1,1', url: 'act_pen_warning.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '电子围栏预警',
    multiState: 0,
    detail: {
      path: '',
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    }
    // "selected": 0
  },
  TRICKSTYLE: [
    {
      value: 'endPoint',
      style: {
        image: {
          src: require(`../../../public/statics/mapicon/endpoint.png`),
          scale: 0.6,
          rotateWithView: true,
          anchor: [0.65, 0.4]
        },
        zIndex: 5
      }
    },
    {
      value: 'startPoint',
      style: {
        image: {
          src: require(`../../../public/statics/mapicon/startpoint.png`),
          scale: 0.6,
          rotateWithView: true,
          anchor: [0.6, 0.6]
        },
        zIndex: 5
      }
    },
    {
      style: {
        arrowLine: {
          animate: true,
          color: '#FE7A15',
          width: 7,
          arrowSize: [5, 6],
          arrowLineWidth: 1,
          arrowLineColor: '#fff',
          arrowInterval: 15
        },
        zIndex: 4
      }
    }
  ],

  // 警情列表
  ALERT: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', scale: '1,1', url: 'icon_jingqing.png' },
            active: { anchor: '0.5,1', scale: '1,1', url: 'zy_icon_jingqing_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '警情',
    multiState: 0,
    detail: {
      path: 'popup-alert',
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    }
  },
  // 危化企业达标统计-一级
  COMPANY_REACH_THE_STANDARD_1: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'weihuaqiye_ji1.png' },
            active: { anchor: '0.5,1', url: 'weihuaqiye_ji1_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '危化企业一级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 危化企业达标统计-二级
  COMPANY_REACH_THE_STANDARD_2: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'weihuaqiye_ji2.png' },
            active: { anchor: '0.5,1', url: 'weihuaqiye_ji2_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '危化企业二级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 危化企业达标统计-三级
  COMPANY_REACH_THE_STANDARD_3: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'weihuaqiye_ji3.png' },
            active: { anchor: '0.5,1', url: 'weihuaqiye_ji3_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '危化企业三级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 重大危险源企业-一级
  COMPANY_DANGER_SOURCE_1: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zhongdaweixianyuanqiye_ji1.png' },
            active: { anchor: '0.5,1', url: 'zhongdaweixianyuanqiye_ji1_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '重大危险源企业一级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 重大危险源企业-二级
  COMPANY_DANGER_SOURCE_2: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zhongdaweixianyuanqiye_ji2.png' },
            active: { anchor: '0.5,1', url: 'zhongdaweixianyuanqiye_ji2_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '重大危险源企业二级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 重大危险源企业-三级
  COMPANY_DANGER_SOURCE_3: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zhongdaweixianyuanqiye_ji3.png' },
            active: { anchor: '0.5,1', url: 'zhongdaweixianyuanqiye_ji3_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '重大危险源企业三级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 重大危险源企业-四级
  COMPANY_DANGER_SOURCE_4: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zhongdaweixianyuanqiye_ji4.png' },
            active: { anchor: '0.5,1', url: 'zhongdaweixianyuanqiye_ji4_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '重大危险源企业四级',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 重点危化品企业
  COMPANY_DANGER_PRODUCT: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'shejiweihuaqiye.png' },
            active: { anchor: '0.5,1', url: 'shejiweihuaqiye_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '重点危化品涉及企业',
    multiState: 0,
    detail: {
      path: 'popup-enterprise',
      request: {
        method: 'get',
        params: '{}',
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
    // "selected": 0
  },
  // 空气监测站
  AIR_MONITORING: {
    // onMap: {
    //   '0': {
    //     Point: {
    //       status: {
    //         default: {
    //           anchor: '0.5,0.5',
    //           url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/00/CqgEmGB_oSWAZ_RPAAAHEboijSs647.png'
    //         },
    //         active: {
    //           anchor: '0.5,1',
    //           url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/00/CqgEmGB_oSqAJpuyAAAMEOB7qcM863.png'
    //         }
    //       }
    //     }
    //   },
    //   dark: {
    //     Point: {
    //       status: {
    //         default: {
    //           anchor: '0.5,0.5',
    //           url: null
    //         },
    //         active: {
    //           anchor: '0.5,1',
    //           url: null
    //         }
    //       }
    //     }
    //   }
    // },
    name: '空气监测站',
    multiState: 0,
    id: '581535218540740608',
    detail: {
      path: 'popup-monitoring-other',
      request: {
        // url: 'shjspj/aqyj/query/findMonitoringStationDetail/',
        url: 'shjspj/environmentalMonitor/query/selectMonitorByName/',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 1,
      dataLoad: 1
    }
  },
  // 网格化管理
  GRIDDING: {
    // onMap: {
    //   '0': {
    //     Point: {
    //       status: {
    //         default: {
    //           anchor: '0.5,0.5',
    //           url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/02/CqgEmGCbl8CAP_hWAAAFKocImPA700.png'
    //         },
    //         active: {
    //           anchor: '0.5,1',
    //           url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/02/CqgEmGCbl8aADX4HAAAKXlwMcdw209.png'
    //         }
    //       }
    //     }
    //   },
    //   dark: {
    //     Point: {
    //       status: {
    //         default: {
    //           anchor: '0.5,0.5',
    //           url: null
    //         },
    //         active: {
    //           anchor: '0.5,1',
    //           url: null
    //         }
    //       }
    //     }
    //   }
    // },
    name: '网格化管理',
    multiState: 0,
    id: '602247061672296448',
    detail: {
      path: 'popup-grid',
      request: {
        url: 'shjspj/planbuild/query/gridDetail',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0
    }
  },
  // 网格化系统 - 事件
  GRIDDING_EVENT: {
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'shijian_nor.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'shijian_pre.png'
            }
          }
        }
      },
      dark: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '事件',
    multiState: 0,
    id: '602247061672296448',
    detail: {
      path: 'popup-grid',
      request: {
        url: 'shjspj/planbuild/query/gridDetail',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0
    }
  },
  // 网格化系统 - 部件
  GRIDDING_PART: {
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'bujian_nor.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'bujian_pre.png'
            }
          }
        }
      },
      dark: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '部件',
    multiState: 0,
    id: '602247061672296448',
    detail: {
      path: 'popup-grid',
      request: {
        url: 'shjspj/planbuild/query/gridDetail',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0
    }
  },
  // 水文监测站
  WATER_STATION: {
    request: {
      url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
      method: 'get',
      params: '{"resourceType":"water_level"}'
    },
    cluster: 1,
    name: '水文监测站',
    multiState: 0,
    id: '602238631662321664',
    detail: {
      path: 'popup-shuiwen',
      request: {
        url: '',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  // 气象监测站
  WEATHER_STATION: {
    request: {
      url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
      method: 'get',
      params: '{"resourceType":"pump_station"}'
    },
    cluster: 1,
    name: '气象监测站',
    multiState: 0,
    id: '602238689015234560',
    detail: {
      path: 'popup-weatherControl',
      request: {
        url: '',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  // 闸门
  GATE_STATION: {
    request: {
      url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
      method: 'get',
      params: '{"resourceType":"gate"}'
    },
    cluster: 1,
    name: '闸门',
    multiState: 0,
    id: '602238749044113408',
    detail: {
      path: 'popup-floodControl',
      request: {
        url: 'shjspj/aqyj/query/findFloodPreventionDetail/',
        method: 'get',
        params: ' {}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    },
    selected: 0
  },
  // 仓库
  STROE: {
    request: {
      url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
      method: 'get',
      params: '{"resourceType":"storage"}'
    },
    cluster: 0,
    // "onMap": {
    //   "'0'": {
    //     "Line": {
    //       "status": {
    //         "default": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": ""
    //         },
    //         "active": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": ""
    //         }
    //       }
    //     },
    //     "Point": {
    //       "status": {
    //         "default": {
    //           "anchor": "0.5,0.5",
    //           "url": "http://yjzh.mti-sh.cn/file/group1/M00/00/05/CqgEmGDiWb6Ae1IKAAAJGAIDM0c566.png"
    //         },
    //         "active": {
    //           "anchor": "0.5,1",
    //           "url": "http://yjzh.mti-sh.cn/file/group1/M00/00/05/CqgEmGDiWceADQMvAAANpy-ZaxI473.png"
    //         }
    //       }
    //     },
    //     "Polygon": {
    //       "status": {
    //         "default": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": "",
    //           "fill": "#DBEFFF"
    //         },
    //         "active": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": "",
    //           "fill": "#DBEFFF"
    //         }
    //       }
    //     }
    //   },
    //   "dark": {
    //     "Line": {
    //       "status": {
    //         "default": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": ""
    //         },
    //         "active": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": ""
    //         }
    //       }
    //     },
    //     "Point": {
    //       "status": {
    //         "default": {
    //           "anchor": "0.5,0.5",
    //           "url": null
    //         },
    //         "active": {
    //           "anchor": "0.5,1",
    //           "url": null
    //         }
    //       }
    //     },
    //     "Polygon": {
    //       "status": {
    //         "default": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": "",
    //           "fill": "#DBEFFF"
    //         },
    //         "active": {
    //           "color": "#4265ED",
    //           "width": "2",
    //           "dash": "",
    //           "fill": "#DBEFFF"
    //         }
    //       }
    //     }
    //   }
    // },
    code: null,
    name: '仓库',
    multiState: 0,
    id: '608002528000344064',
    detail: {
      path: 'popup-store',
      request: {
        url: 'shjspj/planbuild/query/findFloodSupplies/',
        method: 'get',
        params: ' {}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 0
    }
  },
  // 基础台帐 - 投产运行企业
  OPERATIONAL_ENTERPRISE: {
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/05/CqgEmGDiWmiARZbDAAAJFdB56iM857.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/05/CqgEmGDiWm2ABscAAAAN9kPGjxM929.png'
            }
          }
        }
      },
      dark: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '投产运行企业',
    multiState: 0,
    id: '589926484148224000',
    detail: {
      path: 'popup-enterprise',
      request: {
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0
    }
  },
  // 服务管理-班车
  BUS_BANCHE: {
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'zy_banche_nor.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'zy_banche_pre.png'
            }
          }
        }
      },
      dark: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '班车',
    multiState: 0,
    id: '589926484148224001',
    detail: {
      path: 'popup-bus',
      request: {
        url: 'shjspj/managerService/selectBusDetail',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0,
      popupOffset: [15, -25]
    }
  },
  // 服务管理-短驳车
  BUS_DUANBO: {
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'zy_duanboche_nor.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'zy_duanboche_pre.png'
            }
          }
        }
      },
      dark: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '短驳车',
    multiState: 0,
    id: '589926484148224001',
    detail: {
      path: 'popup-bus',
      request: {
        url: 'shjspj/managerService/selectBusDetail',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0,
      popupOffset: [15, -25]
    }
  },
  // 服务管理-园区穿梭车
  BUS_YUANQU: {
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'zy_chuansuoche.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'zy_chuansuoche_pre.png'
            }
          }
        }
      },
      dark: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '园区穿梭车',
    multiState: 0,
    id: '589926484148224001',
    detail: {
      path: 'popup-bus',
      request: {
        url: 'shjspj/managerService/selectBusDetail',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0,
      popupOffset: [15, -25]
    }
  },
  // 掘（占）路施工管理
  DIGGING_ROAD: {
    // request: {
    //   url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
    //   method: 'get',
    //   params: '{"resourceType":"water_level"}'
    // },
    cluster: 0,
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    name: '掘（占）路施工管理',
    multiState: 0,
    id: ['624972371207389184', '624972313388908544'],
    detail: {
      path: 'popup-roadwork',
      request: {
        url: 'shjspj/resource/query/findRoadExcavationDetail/',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 1,
      dataLoad: 1
    },
    selected: 0
  },

  PROJECT_LIST_PENDING: {
    // request: {
    //   url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
    //   method: 'get',
    //   params: '{"resourceType":"water_level"}'
    // },
    cluster: 0,
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#51f1b1', width: '2', dash: '', fill: 'rgba(81, 241, 177, 0.2)' },
            active: { color: '#51f1b1', width: '2', dash: '', fill: 'rgba(81, 241, 177, 0.2)' }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    name: '工程清单-准备',
    multiState: 0,
    id: '665919787527831552',
    detail: {
      path: 'popup-project',
      // request: {
      //   url: 'shjspj/resource/query/findRoadExcavationDetail/',
      //   method: 'get',
      //   params: '{}'
      // },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  PROJECT_LIST_WORKING: {
    // request: {
    //   url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
    //   method: 'get',
    //   params: '{"resourceType":"water_level"}'
    // },
    cluster: 0,
    onMap: {
      0: {
        Line: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: ''
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: ''
            }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/0F/CqgEmGHERu-AI6QoAAAHDUhc90Y271.png'
            },
            active: {
              anchor: '0.5,0.5',
              url: 'http://yjzh.mti-sh.cn/file/group1/M00/00/0F/CqgEmGHERu-AI6QoAAAHDUhc90Y271.png'
            }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#0DDFFF',
              width: '2',
              dash: '',
              fill: '#0DDFFF'
            },
            active: {
              color: '#0DDFFF',
              width: '2',
              dash: '',
              fill: '#0DDFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    name: '工程清单-施工',
    multiState: 0,
    id: '665919787527831552',
    detail: {
      path: 'popup-project',
      // request: {
      //   url: 'shjspj/resource/query/findRoadExcavationDetail/',
      //   method: 'get',
      //   params: '{}'
      // },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  PROJECT_LIST_PAUSE: {
    // request: {
    //   url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
    //   method: 'get',
    //   params: '{"resourceType":"water_level"}'
    // },
    cluster: 0,
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#ffa400', width: '2', dash: '', fill: 'rgba(255, 164, 0, 0.2)' },
            active: { color: '#ffa400', width: '2', dash: '', fill: 'rgba(255, 164, 0, 0.2)' }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    name: '工程清单-停工',
    multiState: 0,
    id: '665919787527831552',
    detail: {
      path: 'popup-project',
      // request: {
      //   url: 'shjspj/resource/query/findRoadExcavationDetail/',
      //   method: 'get',
      //   params: '{}'
      // },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  PROJECT_LIST_DONE: {
    // request: {
    //   url: 'shjspj/aqyj/query/findTYResourceInfoByDto',
    //   method: 'get',
    //   params: '{"resourceType":"water_level"}'
    // },
    cluster: 0,
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#6e8bff', width: '2', dash: '', fill: 'rgba(110, 139, 255, 0.2)' },
            active: { color: '#6e8bff', width: '2', dash: '', fill: 'rgba(110, 139, 255, 0.2)' }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    name: '工程清单-竣工',
    multiState: 0,
    id: '665919787527831552',
    detail: {
      path: 'popup-project',
      // request: {
      //   url: 'shjspj/resource/query/findRoadExcavationDetail/',
      //   method: 'get',
      //   params: '{}'
      // },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  IMPORTANT_DANGER_SOURCE: {
    request: {
      url: 'shjspj/resource/query/findImportantDangerSource',
      method: 'get',
      params: '{}'
    },
    id: '656558638327922688',
    cluster: 1,
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'zy_zhongdaweixianyuan.png'
            },
            active: {
              anchor: '0.5,1',
              url: 'zy_zhongdaweixianyuan_pre.png'
            }
          }
        }
      },
      1: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '重大危险源',
    multiState: 0,
    detail: {
      path: 'popup-gas-alert',
      request: {
        url: '',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  SAFE_PARAMS_SOURCE: {
    id: '656558638327922111',
    cluster: 1,
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'weihuaqiye_ji3.png',
              labelOffsetY: 30,
              clusterOffsetY: 40
            },
            active: {
              anchor: '0.5,1',
              url: 'weihuaqiye_ji3_pre.png',
              labelOffsetY: 20
            }
          }
        }
      },
      1: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '安全参数',
    multiState: 0,
    detail: {
      path: 'popup-safe-params-alert',
      request: {
        url: '',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      popPosition: 'top-center',
      popupOffset: [0, 0],
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },
  SPECIALTY_ENTERPRISE: {
    id: '656558638327923124',
    cluster: 1,
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'zy_shehui_yingjijiuyuan_nor.png',
              labelOffsetY: 30,
              clusterOffsetY: 40
            },
            active: {
              anchor: '0.5,1',
              url: 'zy_shehui_yingjijiuyuan_pre.png',
              labelOffsetY: 20
            }
          }
        }
      },
      1: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '社会专业队伍',
    multiState: 0,
    detail: {
      path: 'popup-em-society',
      request: {
        url: '',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },

  SOCIETY_ENTERPRISE: {
    id: '656558638327967890',
    cluster: 1,
    onMap: {
      0: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: 'zy_qiyeyingjijiuyuan_nor.png',
              labelOffsetY: 30,
              clusterOffsetY: 40
            },
            active: {
              anchor: '0.5,1',
              url: 'zy_qiyeyingjijiuyuan_pre.png',
              labelOffsetY: 20
            }
          }
        }
      },
      1: {
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: {
              anchor: '0.5,1',
              url: null
            }
          }
        }
      }
    },
    name: '企业专业队伍',
    multiState: 0,
    detail: {
      path: 'popup-em-enterprise',
      request: {
        url: 'shjspj/aqyj/query/getBusinessResourceDetail/',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      openType: 0,
      dataLoad: 0
    },
    // detail: {

    // path: '',
    // request: {
    //   url: '',
    //   method: 'get',
    //   params: '{}'
    // },
    // mutex: 0,
    // title: null,
    // popPosition: 'top-center',
    // popupOffset: [0, 0],
    // follow: 0,
    // openType: 0,
    // dataLoad: 1
    // },
    selected: 0
  },

  // 应急资源-消防站
  FIRE_STATION: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zy_xiaofangzhan_nor.png' },
            active: { anchor: '0.5,1', url: 'zy_xiaofangzhan_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '应急资源-消防站',
    id: '589926484148124200',
    multiState: 0,
    detail: {
      path: 'popup-fire-station',
      // request: {
      //   method: 'get',
      //   params: '{}',
      //   url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
      // },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
    selected: 0
  },

  // 应急资源-医疗站
  MEDICAL_STATION: {
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zy_yixiaozhan_nor.png' },
            active: { anchor: '0.5,1', url: 'zy_yixiaozhan_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    code: null,
    children: [],
    name: '应急资源-医疗站',
    id: '589926484148124201',
    multiState: 0
    // detail: {
    //   path: 'popup-enterprise',
    //   request: {
    //     method: 'get',
    //     params: '{}',
    //     url: 'shjspj/aqyj/query/getBusinessResourceDetail/'
    //   },
    //   mutex: 0,
    //   title: null,
    //   follow: 0,
    //   openType: 0,
    //   dataLoad: 0
    // }
    // "selected": 0
  },

  // 掘占路备案
  RECORDING_OF_ROAD_DIGGING: {
    id: '703243674904952832',
    onMap: {
      0: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: { anchor: '0.5,0.5', url: 'zy_yixiaozhan_nor.png' },
            active: { anchor: '0.5,1', url: 'zy_yixiaozhan_pre.png' }
          }
        },
        Polygon: {
          status: {
            default: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            },
            active: {
              color: '#4265ED',
              width: '2',
              dash: '',
              fill: '#DBEFFF'
            }
          }
        }
      },
      dark: {
        Line: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '' },
            active: { color: '#4265ED', width: '2', dash: '' }
          }
        },
        Point: {
          status: {
            default: {
              anchor: '0.5,0.5',
              url: null
            },
            active: { anchor: '0.5,1', url: null }
          }
        },
        Polygon: {
          status: {
            default: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' },
            active: { color: '#4265ED', width: '2', dash: '', fill: '#DBEFFF' }
          }
        }
      }
    },
    multiState: 0,
    // 弹窗
    detail: {
      path: 'popup-roadwork',
      request: {
        url: 'shjspj/resource/query/findRoadExcavationDetail/',
        method: 'get',
        params: '{}'
      },
      mutex: 0,
      title: null,
      follow: 0,
      openType: 0,
      dataLoad: 1
    },
  },
  // 大型工地
  LARGE_CONSTRUCTION_SITE: {
    id: '',
    onMap: {},
    multiState: null,
    // 弹窗
    detail: {},
  },
  // 一般工地
  GENERAL_CONSTRUCTION_SITE: {
    id: '',
    onMap: {},
    multiState: null,
    // 弹窗
    detail: {},
  }
};
