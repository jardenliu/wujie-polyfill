---
sidebarDepth: 2
collapsable: false
---

# 快速上手

## 安装

- npm

```bash
$ npm install wujie-polyfill -S
```

or
- yarn
```bash
$ yarn add wujie-polyfill
```

- pnpm
```bash
$ pnpm install wujie-polyfill
```

## 引入

```javascript
import { LocationReloadPlugin, EventTargetPlugin, DocFullScrollPlugin } from "wujie-polyfill";
```

## 使用

**使用示例**

```tsx
import { startApp } from 'wujie'
import { 
    LocationReloadPlugin, 
    EventTargetPlugin, 
    DocFullScrollPlugin 
} from "wujie-polyfill";

setupApp({
    name: '唯一id',
    url: '子应用地址',
    exec: true,
    el: '容器',
    sync: true
    plugins: [
        LocationReloadPlugin(), 
        EventTargetPlugin(), 
        DocFullScrollPlugin()
    ]
})

```

::: details wujie-vue3

```vue
<template>
<div>
    <WujieVue
        width="100%"
        height="100%"
        name="xxx"
        :url="xxx"
        :plugins=“[
            LocationReloadPlugin(), 
            EventTargetPlugin(), 
            DocFullScrollPlugin()
        ]”
        >
    </WujieVue>
</div>
</template>

<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import { 
    LocationReloadPlugin, 
    EventTargetPlugin, 
    DocFullScrollPlugin 
} from "wujie-polyfill";

</script>

```
:::

::: details wujie-vue2

```vue
<template>
<div>
    <WujieVue
        width="100%"
        height="100%"
        name="xxx"
        :url="xxx"
        :plugins=“plugins”
        >
    </WujieVue>
</div>
</template>

<script lang="ts">
import WujieVue from 'wujie-vue2'

import { 
    LocationReloadPlugin, 
    EventTargetPlugin, 
    DocFullScrollPlugin 
} from "wujie-polyfill";

export default {
    name: 'micro-app',
    components: {
        WujieVue: WujieVue
    },
    data () {
        return {
            plugins: [
                LocationReloadPlugin(), 
                EventTargetPlugin(), 
                DocFullScrollPlugin()
            ]
        }
    },

}
</script>

```
:::

::: details wujie-react

```tsx
import Wujie from 'wujie-react'
import { 
    LocationReloadPlugin, 
    EventTargetPlugin, 
    DocFullScrollPlugin 
} from "wujie-polyfill";

export default function App () {
    return (<Wujie 
                width={'100vw'} 
                name="xxx" 
                height={'100vh'} 
                url={xxx} 
                plugins={[LocationReloadPlugin(), EventTargetPlugin(),DocFullScrollPlugin()]}>
            </Wujie>)
}
```
:::
