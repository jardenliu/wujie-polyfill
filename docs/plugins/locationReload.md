---
sidebarDepth: 3
---

# LocationReloadPlugin
子应用`location.reload` 在wujie中默认禁用，该插件会将动作作用于主应用，实现窗口重新加载。

::: warning 提示
LocationReloadPlugin 不适用与ESM模式(vite)下, vite 生产构建可以用 ***[@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy)*** 进行转换。
::: 

## 使用

```tsx
import { startApp } from 'wujie'
import { LocationReloadPlugin } from "wujie-polyfill";

// 无框架
setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [LocationReloadPlugin()]
})

// vue
<WujieVue
  width="100%"
  height="100%"
  name="xxx"
  :url="xxx"
  :plugins=“[LocationReloadPlugin()]”
></WujieVue>

// react
<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugin="{[LocationReloadPlugin()]}"
></WujieReact>

```



## 类型定义

```ts
interface LocationReloadPluginOptions {
    match?: (appWindow?: AppWindow) => boolean;
}
declare const LocationReloadPlugin: (config?: LocationReloadPluginOptions) => wujie.plugin;

```

## 配置

### match
匹配规则函数

```tsx

import { LocationReloadPlugin } from "wujie-polyfill";

const config = {
    match: (appWindow) => {
        return appWindow === 'app1' // 仅 name 为 app1 生效
    }
}

<WujieReact
  width="100%"
  height="100%"
  name="xxx"
  url="{xxx}"
  plugin="{[LocationReloadPlugin(config)]}"
></WujieReact>
```