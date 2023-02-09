---
sidebarDepth: 3
---

# DocFullScrollPlugin

插件兼容了 `moz` 、`webkit` 、`ms` 等前缀的全屏对象，修复了子应用无法调用全屏的问题。

## 特性

- 兼容 请求全屏函数： `requestFullscreen`、 `mozRequestFullScreen`、 `webkitRequestFullscreen`、 `msRequestFullscreen`;
- 兼容 退出全屏函数： `exitFullscreen`、`mozCancelFullScreen`、 `webkitCancelFullScreen`、 `msExitFullscreen`；
- 兼容 全屏元素获取：`fullscreenElement`、 `webkitFullscreenElement`、 `mozFullScreenElement`、 `msFullscreenElement`；
- 兼容 全屏开关获取：`fullscreenEnabled`、 `webkitFullscreenEnabled`、 `mozFullScreenEnabled`、 `msFullscreenEnabled`。

## 使用


```tsx
import { startApp } from 'wujie'
import { DocFullScrollPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [DocFullScrollPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[DocFullScrollPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[DocFullScrollPlugin()]}"
></WujieReact>

```



## 类型定义

```ts
declare const DocFullScrollPlugin: () => wujie.plugin;
```

## 配置
--

