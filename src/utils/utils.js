// 返回上页
export const goback = function (fn) {
  // fn返回false 后不执行后续语句
  if (fn() === false) return;
  // 删除最后一个路由
  window.$config.histroy_screen = window.$config.histroy_screen.slice(0, -1);
  // 翻页
  window.$config.screen = window.$config.histroy_screen.at(-1);
}

// 切换页面
export const switchPage = function (pageKey) {
  if (pageKey !== window.$config.screen) {
    // 储存历史记录
    window.$config.histroy_screen.push(pageKey);
    // 翻页
    window.$config.screen = pageKey;
  }
}