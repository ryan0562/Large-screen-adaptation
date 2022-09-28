"use strict"

// import templates from './templates/index.js'
const templates = {}
// import projects from './projects/index.js'
const projects = {}




//使用策略
let useLayout = '3840_1080';
let theme = 'huagong';//使用主题 anbao|huagong
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

