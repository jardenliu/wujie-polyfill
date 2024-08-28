---
sidebarDepth: 3
---

# DocElementRectPlugin

插件代理了主应用的documentElement的尺寸

## 特性

- 代理 property： 'clientHeight', 'clientWidth', 'clientTop', 'clientLeft', 'scrollHeight', 'scrollWidth', 'scrollTop', 'scrollLeft', 'offsetHeight', 'offsetWidth', 'offsetTop', 'offsetLeft';
- 代理 getBoundingClientRect

## 使用

```tsx
import { startApp } from 'wujie'
import { DocElementRectPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [DocElementRectPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[DocElementRectPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[DocElementRectPlugin()]}"
></WujieReact>

```

## 类型定义

```ts
declare const DocElementRectPlugin: () => wujie.plugin;
```

## 配置

--
