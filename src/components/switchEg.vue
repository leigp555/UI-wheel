<template>
  <Switch v-model:state="state"></Switch>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Switch from "../lib/Switch.vue";
const state = ref<boolean>(false)
</script>

<style lang="scss" scoped>

</style>