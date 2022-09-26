"use strict"

import templates from './templates/index.js'
import projects from './projects/index.js'




//使用策略
let useLayout = '1920_1080';
let theme = 'anbao';//使用主题 anbao|huagong
let animate = 'fold'; //使用切屏的动画 fade fold
let screen = 'home'; // ftfx|home
let histroy_screen = [screen]




/**
* 布局
*/
let useTemplate = templates[theme]
// let layout = useTemplate[useLayout] || {}

const config = {
  useLayout,
  theme,
  useTemplate,
  animate,
  screen,
  histroy_screen,
  templates,
  projects,
  // layout,
};






window.$config = config
// window.$layout = layout

