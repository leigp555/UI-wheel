<template>
  <div class="title-switch">
    <slot name="title"></slot>
  </div>
  <div class="use-show">
    <div class="action">
      <button class="copy">复制代码</button>
      <div class="code-show">
        <button class="code-visible">显示代码</button>
        <button class="code-visible">隐藏代码</button>
      </div>

    </div>
    <div class="example">
      <div class="code">
        <slot name="example"></slot>
      </div>
    </div>
    <div class="code-container" v-if="state.visible">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import Button from "../lib/Button.vue";

export default defineComponent({
  name: "UseAge",
  components: {Button},
  setup(){
    const state=reactive({
      visible:false
    })

    return {state}
  }
})
</script>

<style lang="scss" scoped>
.title-switch{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
}
.use-show {
  margin-top: 30px;
  > .action {
    display: flex;
    padding: 10px 20px;
    border: 1px solid black;
    height: 55px;
    >.code-show{
      position: relative;
      left: 0;
      >button {
        white-space: nowrap;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    & button {
      padding: 5px 10px;
      background-color: white;
      border: none;
      color: #409eff;

    }
  }
  > .example {
    border: 1px solid black;
    border-top: none;
    padding: 30px;
  }
  >.code-container{
    width: 100%;
    padding: 30px 30px;
    border: 1px solid black;
  }
}
</style>