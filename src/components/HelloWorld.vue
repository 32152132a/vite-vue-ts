<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>

<template>
  <div class="main">
    <div class="aaaaaaa"></div>
    <div></div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-steps :active="active" finish-status="success">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
    <a-divider />
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240);"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => null"
    />
    <a-steps :current="1" size="small">
      <a-step title="Finished" />
      <a-step title="In Progress" />
      <a-step title="Waiting" />
    </a-steps>
  </div>
</template>

<style lang="less" scoped>
.main {
  .el-button {
    color: #ddd;
  }
}
</style>
