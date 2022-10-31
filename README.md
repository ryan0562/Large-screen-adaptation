1. 打UMD包的时候需要在包里直接vue install ,所以需要将vue.js前置放入index.html内

### 切换组件属性
1. panelProps:面板属性
2. moduleProps:模块属性
``` js
this.$bus.$emit('changePanelForm', {
  data: OB, // 源对象 
  key:'panelProps', // 组件key
});
```
### 全局打开组件库弹窗
``` js
      this.$bus.$emit('componentsList');

```


### 组件库元数据：用来维护组件
{
  name:'',
  key:'', // 整个包的key,控制升级，唯一值
  modules:[module.json],
  "props":[{ // 配置后台地址或全局的属性
    "name":"标题",
    "key":"",
    "description":"说明",
    "valueType":"string",
  }],
}

``` module.json
{
  "name":"我的组件名称",
  "key":"组件的注册key",
  "type":["aa","b","c",]//类型
  "size":[{ //规格
    "width":"1",
    "height":"1",
  },{
    "width":"2",
    "height":"1",
  }],
  "industry":[''],// 行业
  "scene":[''],// 场景
  "props":[{
    "name":"标题",
    "components":"el-input",
    "key":"",
    "description":"说明",
    "valueType":"string",
  }],
  "emits":[{
    'key':string,
    "name":string
    description:string
  }], //暴露出来可以被全局监听的事件
  "listener":[{
    'key':string,
    "name":string
    description:string
  }], //组件本身可以监听来自vuebus里的哪些事件
}
```-