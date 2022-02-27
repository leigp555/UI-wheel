<template>
  <article class="markdown-body">
    <h3>安装</h3>

    <p>打开终端运行下列命令：</p>
    <p>
      <code>npm install ui-gp</code>
    </p>
    <p>或</p>
    <p>
      <code>yarn add ui-gp</code>
    </p>
    <p>下一节：<a href="/#/get-start">[开始使用]</a></p>

  </article>
</template>

<script lang="ts" setup>
import {inject} from "vue";

const updateComponentName = inject("changeComponentName") as Function
updateComponentName("#/install")
</script>

<style lang="scss" scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 20px;
}
</style>