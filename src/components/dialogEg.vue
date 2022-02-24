<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Switch 开关</h1>
      <h4>表示两种相互对立的状态间的切换，多用于触发「开/关」。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge>
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>绑定 v-model 到一个 Boolean 类型的变量。 可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色</h4>
        </template>
        <template v-slot:code></template>
        <template v-slot:example>
          <Button @click="toggle" size="normal" style="width:100px">toggle</Button>
          <Dialog v-if="visible" v-model:ok="ok" v-model:cancel="cancel" overflowClose>
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
import {ref} from "vue";


const visible = ref<boolean>(false)
const toggle = () => {
  visible.value = !visible.value
}
const ok = () => {
  visible.value = false
  console.log("ok")
}
const cancel = () => {
  visible.value = false
  console.log("cancel")
}
const attribute = ref([
  {attribute: "loading", tip: "是否显示加载中xxxxxxxxxxxxx", type: "boolean", options: "large", default: "10"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "large", default: "10"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "large", default: "10"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "large", default: "10"}
])
</script>

<style lang="scss" scoped>

</style>