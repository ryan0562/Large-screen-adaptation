export default {
  "name": '安保模板',
  "key":"anbao",
  "thumbnail": '/templates/anbao/img.png',
  "3840_1080": {
    "visible": true,
    "styles": {
      "width": "3840px",
      "height": "1080px",
      "zIndex": "0",
      "background": "#000",
      "color": "#fff"
    },
    "header": {
      "title": "安保主题模板"
    },
    "map": {
      "offset": [
        "0",
        "0"
      ],
      "size": [
        "100%",
        "50%"
      ],
      "zindex": 0,
      "visible": true
    },
    "dataArea_left": {
      "1": {
        "visible": true,
        "moduleId": "video",
        "styles": {
          "width": "755px",
          "height": "420px",
          "top": "10px",
          "left": "0",
          "zIndex": 1
        }
      },
      "2": {
        "visible": true,
        "hasBox": true,
        "moduleId": "safe",
        "styles": {
          "width": "366px",
          "height": "635px",
          "top": "435px",
          "left": "0",
          "zIndex": 1
        }
      },
      "3": {
        "visible": true,
        "hasBox": true,
        "moduleId": "production",
        "styles": {
          "width": "366px",
          "height": "635px",
          "top": "435px",
          "left": "386px",
          "zIndex": 1
        }
      },
      "4": {
        "visible": true,
        "hasBox": true,
        "hasYaw": true,
        "moduleId": "production",
        "styles": {
          "width": "366px",
          "height": "1060px",
          "top": "10px",
          "left": "768px",
          "zIndex": 1
        }
      }
    },
    "dataArea_right": {
      "1": {
        "visible": true,
        "moduleId": "video",
        "styles": {
          "width": "755px",
          "height": "420px",
          "top": "10px",
          "right": "0",
          "zIndex": 1
        }
      },
      "2": {
        "visible": true,
        "hasBox": true,
        "moduleId": "safe",
        "styles": {
          "width": "366px",
          "height": "635px",
          "top": "435px",
          "right": "0",
          "zIndex": 1
        }
      },
      "3": {
        "visible": true,
        "hasBox": true,
        "moduleId": "production",
        "styles": {
          "width": "366px",
          "height": "635px",
          "top": "435px",
          "right": "386px",
          "zIndex": 1
        }
      },
      "4": {
        "visible": true,
        "hasBox": true,
        "hasYaw": true,
        "moduleId": "production",
        "styles": {
          "width": "366px",
          "height": "1060px",
          "top": "10px",
          "right": "768px",
          "zIndex": 1
        }
      }
    },
    "dataAreaModules": {
      "safe": {
        "title": "公共安全",
        "modules": [
          {
            "showHeader": true,
            "title": "视频监控",
            "styles": {
              "marginTop": "12px"
            },
            "component": {
              "is": "realTimePolice"
            }
          },
          {
            "showHeader": true,
            "title": "视频监控",
            "styles": {
              "marginTop": "12px"
            },
            "component": {
              "is": "investment"
            }
          }
        ]
      },
      "production": {
        "title": "生产运行",
        "modules": [
          {
            "showHeader": true,
            "title": "投资促进",
            "styles": {
              "height": "320px",
              "marginTop": "12px"
            },
            "component": {
              "is": "investment"
            }
          },
          {
            "showHeader": true,
            "title": "经济指标",
            "component": {
              "is": "aaa"
            },
            "styles": {
              "height": "154px",
              "marginTop": "12px"
            }
          }
        ]
      },
      "emergency": {
        "title": "安全应急",
        "modules": [
          {
            "showHeader": true,
            "title": "应急资源",
            "component": {
              "is": "aaa"
            },
            "styles": {
              "height": "250px",
              "marginTop": "12px"
            }
          },
          {
            "showHeader": true,
            "title": "累计安全天数",
            "styles": {
              "height": "242px",
              "marginTop": "12px"
            },
            "component": {
              "is": "bbb"
            }
          },
          {
            "showHeader": true,
            "title": "接处警情况",
            "component": {
              "is": "ccc"
            },
            "styles": {
              "height": "133px",
              "marginTop": "12px"
            }
          }
        ]
      },
      "video": {
        "title": "视频",
        "modules": [
          {
            "showHeader": false,
            "hasBox": false,
            "title": "实时警情",
            "component": {
              "is": "myVideo"
            },
            "styles": {
              "width": "100%",
              "height": "100%"
            }
          }
        ]
      }
    },
    "menu": {
      "visible": true,
      "styles": {
        "width": "45px",
        "bottom": "43px",
        "left": "1130px",
        "zIndex": 2
      },
      "children": [
        "addressBook",
        "fold"
      ]
    }
  },
  "1920_1080": {
    "visible": true,
    "styles": {
      "width": "1920px",
      "height": "1080px",
      "zIndex": "0",
      "background": "#000",
      "color": "#fff"
    },
    "header": {
      "title": "安保主题模板"
    },
    "map": {
      "offset": [
        "0",
        "0"
      ],
      "size": [
        "100%",
        "50%"
      ],
      "zindex": 0,
      "visible": true
    },
    "dataArea_left": {
      "1": {
        "visible": true,
        "hasBox": true,
        "moduleId": "safe",
        "styles": {
          "width": "366px",
          "height": "1060px",
          "top": "10px",
          "left": "20px",
          "zIndex": 1
        }
      },
      "2": {
        "visible": true,
        "hasBox": true,
        "hasYaw": true,
        "moduleId": "production",
        "styles": {
          "width": "366px",
          "height": "1060px",
          "top": "10px",
          "left": "400px",
          "zIndex": 1
        }
      }
    },
    "dataArea_right": {
      "1": {
        "visible": true,
        "hasBox": true,
        "moduleId": "safe",
        "styles": {
          "width": "366px",
          "height": "1060px",
          "top": "10px",
          "right": "20px",
          "zIndex": 1
        }
      },
      "2": {
        "visible": true,
        "hasBox": true,
        "hasYaw": true,
        "moduleId": "production",
        "styles": {
          "width": "366px",
          "height": "1060px",
          "top": "10px",
          "right": "400px",
          "zIndex": 1
        }
      }
    },
    "dataAreaModules": {
      "safe": {
        "title": "公共安全",
        "modules": [
          {
            "showHeader": true,
            "title": "视频监控",
            "styles": {
              "marginTop": "12px"
            },
            "component": {
              "is": "realTimePolice"
            }
          },
          {
            "showHeader": true,
            "title": "视频监控",
            "styles": {
              "marginTop": "12px"
            },
            "component": {
              "is": "investment"
            }
          }
        ]
      },
      "production": {
        "title": "生产运行",
        "modules": [
          {
            "showHeader": true,
            "title": "投资促进",
            "styles": {
              "height": "320px",
              "marginTop": "12px"
            },
            "component": {
              "is": "investment"
            }
          },
          {
            "showHeader": true,
            "title": "经济指标",
            "component": {
              "is": "aaa"
            },
            "styles": {
              "height": "154px",
              "marginTop": "12px"
            }
          }
        ]
      },
      "emergency": {
        "title": "安全应急",
        "modules": [
          {
            "showHeader": true,
            "title": "应急资源",
            "component": {
              "is": "aaa"
            },
            "styles": {
              "height": "250px",
              "marginTop": "12px"
            }
          },
          {
            "showHeader": true,
            "title": "累计安全天数",
            "styles": {
              "height": "242px",
              "marginTop": "12px"
            },
            "component": {
              "is": "bbb"
            }
          },
          {
            "showHeader": true,
            "title": "接处警情况",
            "component": {
              "is": "ccc"
            },
            "styles": {
              "height": "133px",
              "marginTop": "12px"
            }
          }
        ]
      },
      "video": {
        "title": "视频",
        "modules": [
          {
            "showHeader": false,
            "hasBox": false,
            "title": "实时警情",
            "component": {
              "is": "myVideo"
            },
            "styles": {
              "width": "100%",
              "height": "100%"
            }
          }
        ]
      }
    },
    "menu": {
      "visible": true,
      "styles": {
        "width": "45px",
        "bottom": "43px",
        "left": "1130px",
        "zIndex": 2
      },
      "children": [
        "addressBook",
        "fold"
      ]
    }
  },
}