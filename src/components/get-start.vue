<template>
  <article class="markdown-body">
    <h3>开始使用</h3>
    <p>请先 <a href="#/doc/install">开始使用</a>本组件库。</p>

    <p>然后在你的代码中引入组件</p>
    <p>例如:</p>
    <p><code>
      import {Button, Tabs, Tab, Switch, Dialog ...} from "ui-gp"

    </code>
    </p>
    <p> 就可以使用我提供的组件了。</p>


  </article>
</template>

<script lang="ts" setup>
import {inject} from "vue";

const updateComponentName = inject("changeComponentName") as Function
updateComponentName("#/get-start")
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