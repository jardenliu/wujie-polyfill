---
sidebarDepth: 3
---

# WindowMessagePlugin
修正了子应用在使用iframe时候 postMessage 异常的问题

## 使用

```tsx
import { startApp } from 'wujie'
import { WindowMessagePlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [WindowMessagePlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[WindowMessagePlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[WindowMessagePlugin()]}"
></WujieReact>

```



## 类型定义

```ts
declare const WindowMessagePlugin: () => wujie.plugin;
```

## 配置
--