<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Button 按钮</h1>
      <h4>常用的操作按钮。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge>
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>使用 theme、cursor、level、circle 和 loading 来定义按钮的样式。</h4>
        </template>
        <template v-slot:code>
          <pre v-html="html"></pre>
        </template>
        <template v-slot:example>
          <div class="button">
            <Button>theme</Button>
            <Button theme="link">theme</Button>
            <Button theme="text">theme</Button>
          </div>
          <div class="button">
            <Button>cursor</Button>
            <Button cursor="help">cursor</Button>
            <Button cursor="wait">cursor</Button>
            <Button cursor="crosshair">cursor</Button>
            <Button cursor="not-allowed">cursor</Button>
          </div>
          <div class="button">
            <Button>level</Button>
            <Button level="main">level</Button>
            <Button level="warning">level</Button>
            <Button level="danger">level</Button>
          </div>
          <div class="button">
            <Button>disabled</Button>
            <Button disabled>disabled</Button>
          </div>
          <div class="button">
            <Button>circle</Button>
            <Button circle>circle</Button>
          </div>
          <div class="button">
            <Button>loading</Button>
            <Button loading>loading</Button>
          </div>
        </template>
      </UseAge>
    </template>
  </Show>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";
import {ref} from "vue";
import {codeToHtml} from "./codeHtml";
import {buttonCode} from "../eg/eg";

const attribute = ref([
  {attribute: "theme", tip: "button类型", type: "string", options: "link/text", default: "--"},
  {attribute: "cursor", tip: "鼠标悬浮样式", type: "string", options: "help/wait/crosshair/not-allowed", default: "--"},
  {attribute: "level", tip: "按钮等级", type: "string", options: "main/warming/danger", default: "button"},
  {attribute: "disabled", tip: "是否可以点击", type: "boolean", options: "true/false", default: "false"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "true/false", default: "false"}
])

const html=codeToHtml(buttonCode())


</script>

<style lang="scss" scoped>
.button {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

ol {
  li {
    margin-bottom: 10px;
  }
}
</style>