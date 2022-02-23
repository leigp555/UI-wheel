<template>
  <Button @click="toggle">toggle</Button>
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

<script lang="ts" setup>
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
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

</script>

<style lang="scss" scoped>

</style>