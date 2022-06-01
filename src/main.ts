/*
 * @Author: 曲永庆
 * @Date: 2022-05-24 15:11:14
 * @LastEditors: 曲永庆
 * @LastEditTime: 2022-06-01 17:28:20
 * @FilePath: /vite-vue-ts/src/main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义样式
import '@/assets/styles/dark/css-vars.css'
// element icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'

import App from './App.vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)

createApp(App).mount('#app')
