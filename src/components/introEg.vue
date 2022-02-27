<template>
  <article class="markdown-body">
    <h3>介绍</h3>

    <p>这是是一款基于Vue 3和TypeScript开发的UI组件库。</p>
    <p> 这款组件库是我为了总结自己所学到的知识而写的，所有代码都是自己写的，尽量不采用第三方库，包括你现在看到的这个官网也都是我自己写的。
    </p>
    <p> 这个UI库还是有很多亮点的，源代码放在了github仓库上
      <a href="https://github.com/leigp555/UI-wheel.git">源码地址</a>，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例，运行方法见
      README.md。
    </p>

    <p>下一节：<a href="/#/install">安装</a></p>
  </article>
</template>

<script lang="ts" setup>
import {inject} from "vue";

const updateComponentName = inject("changeComponentName") as Function
updateComponentName("#/intro")
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