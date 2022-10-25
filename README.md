### 切换组件属性
1. panelProps:面板属性
2. moduleProps:模块属性
``` js
this.$bus.$emit('changePanelForm', {
  data: OB, // 源对象 
  key:'panelProps', // 组件key
});
```