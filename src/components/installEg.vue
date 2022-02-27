<template>
install
</template>

<script lang="ts" setup>
import {inject} from "vue";

const updateComponentName=inject("changeComponentName") as Function
updateComponentName("#/install")
</script>

<style lang="scss" scoped>

</style>