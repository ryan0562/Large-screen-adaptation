import 'animate.css'
import './custom.less'

import Vue from 'vue'

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
const animateCSS = (element, animation, hasRemove = true) =>

  new Promise((resolve, reject) => {

    const animationName = `${prefix}${animation}`;
    const node = reNode(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();

      if (hasRemove) node.classList.remove(`${prefix}animated`, animationName);
      resolve(element);
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

export default animateCSS