<p align="center">
  <a href="https://wujie-micro.github.io/doc/" target="_blank">
    <img src="https://vfiles.gtimg.cn/wuji_dashboard/xy/test_wuji_damy/phFSuhUC.png" width="100" height="100" alt="logo">
  </a>
</p>

# wujie-polyfill


由于wujie（无界）采用的是WebComponents + iframe 来是脚本沙箱和样式隔离，该仓库用于弥补该方案的在特定的场景下的不足。

## 文档

文档详见：

[文档](https://wujie-polyfill.github.io/doc/) -- 官方文档

[AI文档](https://zread.ai/jardenliu/wujie-polyfill) -- 由zread.ai生成，辅助食用

## 插件列表

- [ ] LocationSyncPlugin (地址同步插件)
- [X] LocationReloadPlugin （页面刷新插件）
- [X] EventTargetPlugin （事件目标插件）
- [X] WindowGetterPlugin （window获取插件）
- [X] WindowMessagePlugin （window通信插件）
- [X] DocFullscreenPlugin （全屏插件）
- [X] InstanceofPlugin （原型链判定插件）
- [X] DocElementRectPlugin（代理documentElement主应用尺寸插件）

## 使用

- 安装

```bash
    npm i wujie-polyfill -S
```

- 使用

```tsx
import { startApp } from 'wujie'
import { LocationReloadPlugin } from "wujie-polyfill";

// javascript
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
  :plugins="[LocationReloadPlugin()]"
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

![STAR HISTORY](https://api.star-history.com/svg?repos=jardenliu/wujie-polyfill&type=Date)
