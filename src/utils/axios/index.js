"use strict";
import Axios from "axios";
import { Message } from "element-ui";

import getQueryParam from '@/utils/getQueryParam.js';

import Vue from "vue";
import Vuex from "vuex";
import store from "../../store";
// import Cookie from "@/utils/cookie.js";

Vue.use(Vuex);
let showMessage = "";
// 发起request 拦截器
Axios.interceptors.request.use(
  (config) => {
    // 加上统一用户需要的Headers
    // config.headers["Content-Type"] = "application/json";
    // config.headers['x-app-code'] = 'udm'
    config.headers["x-end-point"] = "40";
    if (sessionStorage.getItem('isNotSingleLogin') !== 'true') {
      config.headers["ticket"] = sessionStorage.getItem('ticket') || getQueryParam('ticket');
      config.headers["allow_redirects"] = 'False';
    }
    // 为每个http header都加上token
    let _token = sessionStorage.getItem("token");
    if (_token && config.url.indexOf("uum/login") < 0 && config.url.indexOf("/aqcbs/api/jk4aqsct") < 0) {
      config.headers["Authorization"] = `${_token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 收到response 拦截器
Axios.interceptors.response.use(
  (response) => {
    if (response.request.responseType === "blob") {
      return response.data;
    }
    const data = response.data;
    // console.log('[' + response.config.url +"]接口，服务器返回：", data)
    // 统一用户成功返回状态码为'000000'
    if (data.code === 200 || data.code === "000000") {
      return data.data || {} // 解决data.data为null时不返回bug
    };
    if (data.code === 100001) {
      Message({
        type: "error",
        message: data.data,
      });
      store.dispatch("logOut", {
        status: true
      });
      return false;
    }
    // if(data.code === 417){
    Message({
      type: "error",
      message: data.message,
    });
    // }
    return new Promise(() => { });
  },
  (err) => {
    if (err && err.response && err.response.status && (err.response.status === 401)) { // 重定向
      window.location.href = err.response.headers.location;
      return;
    }
    if (showMessage) {
      clearTimeout(showMessage);
    }
    showMessage = setTimeout(() => {
      console.log("[失败]服务器返回：", err);
      Message({
        type: "error",
        message: "抱歉，网络或服务器不稳定，请重试",
      });
      showMessage = null;
    }, 1000);

    return new Promise(() => { });
  }
);

export default Axios;
