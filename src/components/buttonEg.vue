<template>
  <ol>
    <li>
      <Button>直角</Button>
    </li>
    <li>
      <Button circle>圆角</Button>
    </li>
    <li>
      <Button disabled>禁用</Button>
    </li>
    <li>
      <Button size="big">大按钮</Button>
    </li>
    <li>
      <Button size="small">小按钮</Button>
    </li>
  </ol>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Button from "../lib/Button.vue";
export default defineComponent({
  components: {Button}
})
</script>

<style lang="scss" scoped>
ol{
  li {
    margin-bottom: 10px;
  }
}
</style>