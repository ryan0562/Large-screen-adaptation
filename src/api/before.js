import request from '@/utils/axios/request.js';


// 获取模板数据
export async function getTemplateList(params) {
  return request({
    baseURL:'',
    url: `/templates/api.json`,
    method: 'GET',
    params,
  });
}

// 获取项目列表
export async function getProjectList(params) {
  return request({
    url: `/config/project/list`,
    method: 'GET',
    params,
  });
}

// 保存项目
export async function projectSave(data) {
  return request({
    url: `/config/project/save`,
    method: 'POST',
    data,
  });
}
