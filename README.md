<p align="center">
  <a href="https://wujie-micro.github.io/doc/" target="_blank">
    <img src="https://vfiles.gtimg.cn/wuji_dashboard/xy/test_wuji_damy/phFSuhUC.png" width="100" height="100" alt="logo">
  </a>
</p>


# wujie-polyfill
由于wujie（无界）采用的是WebComponents + iframe 来是脚本沙箱和样式隔离，该仓库用于弥补该方案的在特定的场景下的不足。

## 文档
文档详见：[文档](https://wujie-polyfill.github.io/doc/)

## 插件列表
- [ ] LocationSyncPlugin (地址同步插件)
- [x] LocationReloadPlugin （页面刷新插件）
- [x] EventTargetPlugin （事件目标插件）
- [x] WindowGetterPlugin （window获取插件）
- [x] WindowMessagePlugin （window通信插件）
- [x] DocFullScrollPlugin （全屏插件）
- [x] InstanceofPlugin （原型链判定插件）

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
  :plugins=“[LocationReloadPlugin()]”
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