import request from '@/utils/axios/request.js';
const mock = '/mock' //mock


// 获取模板数据
export async function getTemplateList(params) {
  return request({
    url: `/templates/api.json`,
    method: 'GET',
    params,
  });
}

// 获取项目列表
export async function getProjectList(params) {
  return request({
    url: `/projects/api.json`,
    method: 'GET',
    params,
  });
}
