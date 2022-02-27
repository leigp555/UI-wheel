<template>
intro
</template>

<script lang="ts" setup>
import {inject} from "vue";

const updateComponentName=inject("changeComponentName")
updateComponentName("#/intro")
</script>

<style lang="scss" scoped>

</style>