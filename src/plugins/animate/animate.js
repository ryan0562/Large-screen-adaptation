import Vue from 'vue'
import 'animate.css'
import './custom.less'
import { parser } from 'css-math';

// 前缀
const prefix = 'animate__';

/**
* 返回node节点
* @param: el:选择器，node、vnode
*/
function reNode(el) {
  // 字符串
  if (typeof (el) === 'string') {
    return document.querySelector(el);
  }
  // vnode
  if (el instanceof Vue) {
    return el.$el
  }
  // el instanceof HTMLElement
  return el

}

/**
* 
* @param: element:选择器或者node、vnode
* @param: animation:动画名
* @param: hasRemove:前缀
* @use:
  animateCSS('.my-element', 'bounce').then((message) => {
    // Do something after the animation
  }); 
*/
export const animateCSS = (element, animation, hasRemove = true) =>

  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = reNode(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    node.addEventListener('animationend', (event) => {
      setTimeout(() => {
        event.stopPropagation();

        node.classList.remove(`${prefix}animated`, animationName);
        resolve(element);
      }, 0);

    }, { once: true });
  });

// 切换数据区
export const switchDataArea = function (type, index, moduleId) {
  const el = `.dataArea_${type}_${index}`;
  animateCSS(el, window.$config.animateOut).then(() => {
    window.$layout[`dataArea_${type}`][index].moduleId = moduleId;
    animateCSS(el, window.$config.animateIn);
  });
};

/**
     * 折叠动画
     * @param: index:模块区的索引值
     * @param: type:left|right
     */
export const toggleFold = function (type, index) {
  // vfor后ref会返回数组
  const dataAreaAll = window.$layout[`dataArea_${type}`];
  const dataArea = window.$layout[`dataArea_${type}`][index];
  const dataArea_el = document.querySelector(`.dataArea_${type}_${index}`);

  if (dataArea_el.className.indexOf('fold') > -1) {
    animateCSS(dataArea_el, window.$config.animateIn).then((res) => {
      dataArea_el.classList.remove('fold');
    });
    // 动态后续区域
    for (const key in dataAreaAll) {
      const element = dataAreaAll[key];
      if (key > index) {
        element.styles[type] = parser(`${element.styles[type]} + 450px`);
      }
    }
    // mark偏移量
    Vue.set(dataArea, 'markOffset', 0)
  } else {
    animateCSS(dataArea_el, window.$config.animateOut).then((res) => {
      dataArea_el.classList.add('fold');
    });
    // 动态后续区域
    for (const key in dataAreaAll) {
      const element = dataAreaAll[key];
      if (key > index) {
        element.styles[type] = parser(`${element.styles[type]} - 450px`);
      }
    }
    // mark偏移量
    Vue.set(dataArea, 'markOffset', parser(`-200px + 40px*${index}`))

  }
}

export default { animateCSS, switchDataArea, toggleFold }