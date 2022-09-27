import request from '@/utils/axios/request.js';
const mock = '/mock' //mock


// 获取模板数据
export async function getTemplateList(params) {
  return request({
    url: `${mock}/getTemplateList`,
    method: 'GET',
    params,
  });
}
