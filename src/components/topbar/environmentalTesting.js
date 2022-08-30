import Axios from '@/axios';
const CONFIG = window.MTI[process.env.NODE_ENV];

export default {
  // 环境监督 - 空气质量
  getAirQuality: () => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectParkMonitor');
  },
  // 环境监督 - 环境监测
  getEnvironmentalMonitor: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/aqyj/query/findTYwtgEnvironmentalMonitor', param);
  },
  // 环境监督 - 挥发有机物
  // getVolatileGas: (param) => {
  //   return Axios.post(
  //     CONFIG.apiUrl + "shjspj/aqyj/query/findVolatileGas",
  //     param
  //   );
  // },
  // 二级-园区环境空气质量监控-监测站列表
  monitoringStationList: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/monitoringStationList', param);
  },
  // 二级-园区环境空气质量监控-常规因子
  getGeneralParamsData: param => {
    return Axios.post(
      CONFIG.apiUrl +
        // "shjspj/environmentalMonitor/query/conventionalFactor_cgyz",
        '/shjspj/environmentalMonitor/query/conventionalFactor_qxsj',
      param
    );
    // return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/conventionalFactor_cgyz', {
    //   params: {
    //     ...param
    //   }
    // });
  },
  // 二级-园区环境空气质量监控-气象数据
  getWeatherData: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/conventionalFactor_qxsj', param);
    // return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/conventionalFactor_qxsj', {
    //   params: {
    //     ...param
    //   }
    // });
  },
  // 二级-园区环境空气质量监控-VOCs(废弃)
  parkVocs: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/parkVocs', param);
    // return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/conventionalFactor_qxsj', {
    //   params: {
    //     ...param
    //   }
    // });
  },
  // 环境监管二级-园区空气质量监控-VOCS
  selectAirVocsMonitor: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectAirVocsMonitor', param);
  },
  // 查询污染物玫瑰图
  selectRose: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectRose', param);
  },
  // 二级-专项管理-环境应急预案统计
  contingencyPlanNum: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/contingencyPlanNum', param);
  },
  // 二级-专项管理-环境应急预案列表
  contingencyPlan: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/contingencyPlan', param);
  },
  // 二级-专项管理-查询公司对应预案列表
  contingencyPlanByName: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/contingencyPlanByName', { params });
  },
  // 二级-专项管理-辐射管理-射源企业
  // countRadioactiveSource: param => {
  //   return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/countRadioactiveSource', param);
  // },
  countRadioactiveSource: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/countRadioactiveSourceNew', param);
  },
  // 二级-探伤备案文档-删除
  deleteRadiationRecordDoc: param => {
    return Axios.get(CONFIG.apiUrl + `shjspj/geodata/doc/delRadiationRecordDoc?id=${param.id}`, param);
  },
  // 环境监督-探伤备案文档-查询
  getRadiationRecordDoc: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/geodata/doc/selectRadiationRecordDoc', param);
  },
  // 环境监督-探伤备案文档-保存
  saveRadiationRecordDoc: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/geodata/doc/saveRadiationRecordDoc', param);
  },
  // 查询企业列表
  getBusinessList: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/aqyj/query/getBusinessList', param);
  },
  // 按污染源类别查询公司
  findWasteResourceInfo: params => {
    // return Axios.get(CONFIG.apiUrl + 'shjspj/resource/query/findWasteResourceInfo', { params });
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectInfectantEntList', { params });
  },
  // 查询环保投入
  selectEnvironmentalProtectionInvestment: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnvironmentalProtectionInvestment', param);
  },

  // 查询企业污染源监控
  selectEnterpriseWaste: param => {
    // return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnterpriseWaste', param);
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEntInfectantAlarmByType', param);
  },

  // 查询企业污染源监控趋势图
  findEnterpriseWaste: param => {
    // return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/findEnterpriseWaste', param);
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEntInfectantAlarmByPort', param);
  },

  // 查询企业污染源在线预警
  selectBusinessAlarmInformation: param => {
    // return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectBusinessAlarmInformation', param);
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEntInfectantAlarm', param);
  },
  // 查询空气质量预警情况
  selectStationAlarmInformation: param => {
    // return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectStationAlarmInformation', param);
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectAlarmInformationByStation', param);
  },

  // 查询二氧化碳排放量
  carbonFootprint: () => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/carbonFootprint');
  },

  // 查询监测站平均aqi
  selectAqi: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectAqi', { params });
  },

  // 通过名称查询监测站数据(废弃)
  selectMonitorByName: params => {
    return Axios.get(CONFIG.apiUrl + `shjspj/environmentalMonitor/query/selectMonitorByName/${params.name}`, { params });
  },

  // 通过名称查询监测站数据（新）
  selectMonitorByNameNew: params => {
    return Axios.get(CONFIG.apiUrl + `shjspj/environmentalMonitor/query/selectMonitorByNameNew/${params.name}`, { params });
  },

  // 环境监督一级 - 项目环评数量
  selectProjectEiaNum: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectProjectEiaNum', param);
  },

  // 环境监督一级 - 项目环评数量（新）
  selectProjectEiaNewNum: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectProjectEiaNewNum', param);
  },

  // 查询项目环评（新）
  selectProjectEiaNew: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectProjectEiaNew', {
      params
    });
  },

  // 查询项目环评
  selectProjectEia: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectProjectEia', {
      params
    });
  },

  // 环境监督一级 - 查询废弃物数量
  selectHazardousWastes: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectHazardousWastes', param);
  },

  // 环境监督一级 - 查询当年污染物排放量
  selectPollutantDischargeLevel: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectPollutantDischargeLevel', param);
  },
  // 环境监督二级 - 查询报告文档树
  getReportDocumentTree: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/getReportDocumentTree', {
      params: {
        ...param
      }
    });
  },
  // 查询环境监管双随机情况
  selectLawEnforcementInspection: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectLawEnforcementInspection', param);
  },

  // 查询执法处置情况
  selectLawEnforcement: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectLawEnforcement', param);
  },
  // 查询企业危度实时数据(废弃)
  selectEnterpriseRisk: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnterpriseRisk', param);
  },
  // 查询企业危度月数据
  selectEnvEnterpriseHandleRisk: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnvEnterpriseHandleRisk', param);
  },
  // 查询危废处置企业实时数据(废弃)
  selectHazardousWasteDisposal: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectHazardousWasteDisposal', param);
  },
  // 查询危废处置企业月数据
  selectEnvEnterpriseRisk: param => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnvEnterpriseRisk', param);
  },
  // 查询企业危度统计图(废弃)
  selectEnterpriseRiskTable: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnterpriseRiskTable', { params });
  },
  // 查询企业危度统计图
  selectEnvEnterpriseRiskByName: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectEnvEnterpriseRiskByName', { params });
  },
  // 查询原辅材料
  selectAuxiliaryMaterials: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectAuxiliaryMaterials', { params });
  },

  // 托盘监测站 - 雨水详情
  findEnterpriseRainWaterDetail: param => {
    return Axios.get(CONFIG.apiUrl + `shjspj/resource/query/findEnterpriseRainWaterDetail/${param.creditCode}`, param);
  },

  // 托盘监测站 - 废气详情
  findEnterpriseWasteGasDetail: param => {
    return Axios.get(CONFIG.apiUrl + `shjspj/resource/query/findEnterpriseWasteGasDetail/${param.creditCode}`, param);
  },
  // 查询LDAR执行情况
  selectLdarlmpIementation: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectLdarlmpIementation', { params });
  },
  // 托盘监测站 - 废水详情
  findEnterpriseWastewaterDetail: param => {
    return Axios.get(CONFIG.apiUrl + `shjspj/resource/query/findEnterpriseWastewaterDetail/${param.creditCode}`, param);
  },
  // 查询移动检测车走航
  selectInspectionVehicle: params => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectInspectionVehicle', { params });
  },
  // 托盘监测站 - 重大危险源资源撒点详情
  findImportantDangerSourceDetail: param => {
    return Axios.get(CONFIG.apiUrl + `shjspj/resource/query/findImportantDangerSourceDetail/${param.name}`, param);
  },

  // 查询现场执法
  selectOnSiteLawEnforcement: () => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectOnSiteLawEnforcement', {});
  },
  // 查询污染物玫瑰图生成图片地址
  selectImagesRose: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectImagesRose', param);
  },

  // 查询探伤备案
  selectFlawDetectionRecord: () => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectFlawDetectionRecord', {});
  },

  // // 查询废弃物数量
  // selectHazardousWastes: () => {
  //   return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectHazardousWastes', {});
  // },

  // 站点常规因子检测
  selectAirMonitor: param => {
    return Axios.post(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectAirMonitor', param);
  },
  // 首页-科思创站空气检测
  selectKscAir: () => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectKscAir');
  },
  // 首页-环境监管-联合路站aqi
  selectLhlAqi: () => {
    return Axios.get(CONFIG.apiUrl + 'shjspj/environmentalMonitor/query/selectLhlAqi');
  }
};
