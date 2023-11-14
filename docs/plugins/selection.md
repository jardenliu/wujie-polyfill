---
sidebarDepth: 2
---
# SelectionPlugin

该插件修复了Selection在子应用中运行的表现异常

### 已修复问题

- isCollapsed 始终为true的问题，参考文档 [Selection: isCollapsed property](https://developer.mozilla.org/en-US/docs/Web/API/Selection/isCollapsed)

## 使用

```tsx
import { startApp } from 'wujie'
import { SelectionPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [SelectionPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[SelectionPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[SelectionPlugin()]}"
></WujieReact>

```

## 类型定义

```ts

declare const SelectionPlugin: () => wujie.plugin;


```
