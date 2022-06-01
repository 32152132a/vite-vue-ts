/*
 * @Author: 曲永庆
 * @Date: 2022-06-01 16:04:00
 * @LastEditors: 曲永庆
 * @LastEditTime: 2022-06-01 17:32:44
 * @FilePath: /vite-vue-ts/src/router/index.ts
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('../views/layouts/Main.vue'),
      children: [
        { 
          path: '/',
          name: 'hello',
          component: () => import('../components/HelloWorld.vue'),
        },
        { 
          path: '/demo',
          name: 'demo',
          component: () => import('../views/tabs/demo.vue'),
        },
       
      ],
    },

  ],
})

export default router
