<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Dialog 对话框</h1>
      <h4>在保留当前页面状态的情况下，告知用户并承载相关操作。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge :codeText="dialogCode()">
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>Dialog 弹出一个对话框，适合需要定制性更大的场景。</h4>
          <h4>需要绑定两个回调函数，以及插槽内容，可选属性overflowClose</h4>
        </template>
        <template v-slot:code>
          <pre v-html="html"></pre>
        </template>
        <template v-slot:example>
          <Button @click="toggle" size="normal" style="width:100px">toggle</Button>
          <Dialog v-if="visible" v-model:confirm="confirm" v-model:cancel="cancel" v-model:visible="visible" overflowClose>
            <template v-slot:title>
              <span>标题</span>
            </template>
            <template v-slot:content>
              <span>内容一</span>
              <span>内容二</span>
            </template>
          </Dialog>
        </template>
      </UseAge>
    </template>
  </Show>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";
import {inject, ref} from "vue";
import {codeToHtml} from "./codeHtml";
import {dialogCode} from "../eg/eg";


const visible = ref<boolean>(false)
const updateComponentName=inject("changeComponentName")
updateComponentName("#/dialog")
const toggle = () => {
  visible.value = !visible.value
}
const confirm = () => {
  console.log("ok")
}
const cancel = () => {
  console.log("cancel")
}
const attribute = ref([
  {attribute: "title", tip: "具名插槽title", type: "插槽", options: "--", default: "--"},
  {attribute: "content", tip: "具名插槽content", type: "插槽", options: "--", default: "--"},
  {attribute: "confirm函数", tip: "点击确认时执行的回调设置返回值为false，点击confirm按钮不会关闭组件", type: "回调", options: "--", default: "--"},
  {attribute: "cancel函数", tip: "点击取消时执行的回调，其他同上", type: "回调", options: "--", default: "--"},
  {attribute: "visible", tip: "组件是否显示", type: "boolean", options: "必填", default: "--"},
  {attribute: "overflowClose", tip: "点击遮罩层是否关闭组件", type: "可选", options: "true/false", default: "false"},
])
const html=codeToHtml(dialogCode())

</script>

<style lang="scss" scoped>

</style>