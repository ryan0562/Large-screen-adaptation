import axios from 'axios';
import { Message } from 'element-ui';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_APIKEY,
  timeout: 5000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      Message({
        type: 'error',
        message: res.message,
      });
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error); // for debug
    Message({
      type: 'error',
      message: '抱歉，网络或服务器不稳定，请重试',
    });
    return Promise.reject(error);
  },
);
export default service;
