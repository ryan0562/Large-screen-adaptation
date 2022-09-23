"use strict"

import templates from './templates/index.js'




//使用策略
let useLayout = '1920_1080';
let theme = 'anbao';//使用主题 anbao|huagong
let animate = 'fold'; //使用切屏的动画 fade fold
let screen = 'home'; // ftfx|home
let histroy_screen = [screen]


/**
* 布局
*/
let layout = templates[theme]






const config = {
  useLayout,
  theme,
  layout,
  animate,
  screen,
  histroy_screen,
};

window.$config = config
window.$layout = layout[config.useLayout] || {}
window.$mti_templates = templates
