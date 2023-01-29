import Theme from 'vitepress/theme'
import wujieHome from './components/wujie-home.vue'
import { h } from 'vue'
import './styles/vars.css'

export default {
    ...Theme,
    Layout () {
        return h(wujieHome, null, {
            'nav-bar-title-before': () => h(wujieHome),
        })
    },
}