---
sidebarDepth: 3
---
# LocationHrefPlugin

子应用 `location.href` 在wujie中无法直接跳出应用之外的地址，本插件针对此问题进行修复


## 使用

```tsx
import { startApp } from 'wujie'
import { LocationHrefPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [LocationHrefPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[LocationHrefPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugins="{[LocationReloadPlugin()]}"
></WujieReact>

```
