---
sidebarDepth: 3
---

# EventTargetPlugin

插件修复了wujie框架下UI事件由子应用传递时，target会指向到`WUJIE-APP`标签问题。 

## 问题分析
[wujie常见问题#5](https://wujie-micro.github.io/doc/question/#_5%E3%80%81%E5%AD%90%E5%BA%94%E7%94%A8%E5%A4%84%E7%90%86%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E4%BA%8B%E4%BB%B6%E6%97%B6%EF%BC%8Ce-target-%E5%8F%98%E6%88%90%E4%BA%86-wujie-app)

## 特性

- 修正了 target 指向
- 修正了异步获取的 target 指向
- 修复了 chrome 109+版本 event.path 为空

## 使用

```tsx
import { startApp } from 'wujie'
import { EventTargetPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [EventTargetPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[EventTargetPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[EventTargetPlugin()]}"
></WujieReact>

```



## 类型定义

```ts
declare const EventTargetPlugin: () => wujie.plugin;
```

## 配置
--

