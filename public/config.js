"use strict"


//使用策略
let useLayout = '3840_1080';
let theme = 'anbao';//使用主题 anbao|huagong
let animate = 'fold'; //使用切屏的动画 fade fold
let screen = '3_3'; // ftfx|home
let histroy_screen = [screen]



const config = {
  useLayout,
  theme,
  animate,
  screen,
  histroy_screen,
};






window.$config = config


