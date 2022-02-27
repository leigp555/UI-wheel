<template>
intro
</template>

<script lang="ts" setup>
import {inject} from "vue";

const updateComponentName=inject("changeComponentName") as Function
updateComponentName("#/intro")
</script>

<style lang="scss" scoped>

</style>