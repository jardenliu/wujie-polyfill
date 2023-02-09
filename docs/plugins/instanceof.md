---
sidebarDepth: 2
---

# InstanceofPlugin

该插件修复了某些情况下在主应用界面下生成对象原型链不匹配的问题。

## 问题分析
由于子应用的UI界面是从iframe内部移动至主应用的某个WebComponents标签内，所以由UI创建的新DOM节点，触发的事件都是由主应用的构造函数创建的。

例如内部的 iframe DOM元素移动到外部WebComponents后，我们触发一个鼠标事件，但此时在子应用中执行 `event instanceof MouseEvent` 为 false。因为鼠标事件 MouseEvent 是从主应用触发的，所以上面语句中的 `MouseEvent` 为 子应用 window.MouseEvent 而不是主应用的 parentWindow.MouseEvent，最终导致判断异常。

参考 [wujie#256](https://github.com/Tencent/wujie/issues/256)

## 使用

```tsx
import { startApp } from 'wujie'
import { InstanceofPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [InstanceofPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[InstanceofPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[InstanceofPlugin()]}"
></WujieReact>

```



## 类型定义

```ts
interface InstanceofPluginOptions {
    patchList?: string[];
}
declare const InstanceofPlugin: (config?: InstanceofPluginOptions) => wujie.plugin;


```

## 配置

### patchList
额外需要打补丁的构造函数

```tsx

import { InstanceofPlugin } from "wujie-polyfill";

const config = {
    patchList: ['DocumentFragment'] // instanceof DocumentFragment 判断会得到修复
}

<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[InstanceofPlugin(config)]}"
></WujieReact>
```