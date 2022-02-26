<template>
  <div class="title-switch">
    <slot name="title"></slot>
  </div>
  <div class="use-show">
    <div class="action">
      <button class="copy" @click="copy">复制代码</button>
      <div class="code-show">
        <button class="code-visible" @click="showCode" v-if="!state.visible">显示代码</button>
        <button class="code-visible" @click="hidden" v-if="state.visible">隐藏代码</button>
      </div>

    </div>
    <div class="example">
      <CodeTip title="复制成功" :codeVisible="codeVisible"/>
      <div class="code" :class="{center:center}">
        <slot name="example"></slot>
      </div>
    </div>
    <div class="code-container" v-if="state.visible" @touchstart.stop="" @touchmove.stop="">
      <h5>示例代码:</h5>
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import Button from "../lib/Button.vue";
import CodeTip from './codeTip.vue'

export default defineComponent({
  name: "UseAge",
  components: {Button,CodeTip},
  props: {
    center: Boolean,
    codeText:String
  },
  setup(props) {
    const state = reactive({
      visible: true,
    })
    const codeVisible=ref<boolean>(false)
    const {center,codeText} = toRefs(props)
    const showCode = () => {
      state.visible = true
    }
    const hidden = () => {
      state.visible = false
    }
    const copy=()=>{
      navigator.clipboard.writeText(codeText.value).then(()=>{
        codeVisible.value=!codeVisible.value
        setTimeout(()=>{
          codeVisible.value=!codeVisible.value
        },1000)
      });
    }
    return {state, center, showCode, hidden,copy,codeVisible}
  }
})
</script>

<style lang="scss" scoped>
.title-switch {
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

    > .code-show {
      position: relative;
      left: 0;

      > button {
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

    > .code {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 15px;

    }

    > .center {
      justify-content: center;
      align-items: center;
    }

  }

  > .code-container {
    width: 100%;
    padding: 10px 30px;
    margin-top: 10px;
    border: 1px solid black;
    overflow-x: scroll;
    >h4{
      margin-bottom: 5px;
    }
  }
}
</style>