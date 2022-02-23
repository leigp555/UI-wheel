<template>
  <Tabs v-model:selected="selected">
    <Tab title="标题一">内容一</Tab>
    <Tab title="标题二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
const selected = ref("标题一")
</script>

<style lang="scss" scoped>

</style>