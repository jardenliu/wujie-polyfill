---
sidebarDepth: 3
---

# WindowGetterPlugin
该插件修复了chrome 85以下版本，子应用执行window.window报错。


## 问题分析
[wujie#208](https://github.com/Tencent/wujie/issues/280)

## 使用

```tsx
import { startApp } from 'wujie'
import { WindowGetterPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [WindowGetterPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[WindowGetterPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[WindowGetterPlugin()]}"
></WujieReact>

```



## 类型定义

```ts
declare const WindowGetterPlugin: () => wujie.plugin;
```

## 配置
--