<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Switch 开关</h1>
      <h4>表示两种相互对立的状态间的切换，多用于触发「开/关」。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge :codeText="switchCode()">
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>绑定 v-model 到一个 Boolean 类型的变量。 可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色</h4>
        </template>
        <template v-slot:code>
          <pre v-html="html"></pre>
        </template>
        <template v-slot:example>
          <Switch v-model:state="state"></Switch>
          <Switch v-model:state="state" inactive-color="#13ce66" active-color="#ffe846"></Switch>
        </template>
      </UseAge>
    </template>
  </Show>
</template>

<script lang="ts" setup>
import {inject, ref} from "vue";
import Switch from "../lib/Switch.vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";
import {codeToHtml} from "./codeHtml";
import {switchCode} from "../eg/eg"

const state = ref<boolean>(false)
const updateComponentName=inject("changeComponentName")
updateComponentName("#/switch")
const attribute = ref([
  {attribute: "state", tip: "绑定值，必须是布尔值", type: "boolean", options: "true/false", default: "false"},
  {attribute: "active-color", tip: "switch的值为 on 时的颜色", type: "string", options: "--", default: "#409eff"},
  {attribute: "inactive-color", tip: "switch的值为 off 的颜色", type: "string", options: "--", default: "#dcdfe6"},
])

const html=codeToHtml(switchCode())

</script>

<style lang="scss" scoped>

</style>