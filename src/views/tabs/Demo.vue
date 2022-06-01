<!--
 * @Author: 曲永庆
 * @Date: 2022-06-01 17:05:24
 * @LastEditors: 曲永庆
 * @LastEditTime: 2022-06-01 17:15:05
 * @FilePath: /vite-vue-ts/src/views/tabs/demo.vue
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
import Antd from './Antd.vue'
import Elem from './Elem.vue'

const activeKey = ref('1')

</script>

<template>
  <div class="demo">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tab 1"><Antd></Antd></a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render><Elem></Elem></a-tab-pane>
    </a-tabs>
  </div>
</template>
