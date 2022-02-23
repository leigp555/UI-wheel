<template>
  <button class="gulu-switch" :class="{'gulu-switch-open':translate}" @click="toggle">
    <span class="gulu-switch-inner" :class="{'gulu-switch-on':translate}"></span>
  </button>
</template>
<script lang="ts" >
import {defineComponent, toRefs} from "vue";

export default defineComponent({
  name:"Switch",
  props:{
    state:{
      type:Boolean,
      default:false,
    }
  },
  setup(props,context){
    const {state} =toRefs(props)
    const  toggle=()=>{
      context.emit("update:state",!state.value)
    }
    return {translate: state,toggle}
  }
})
</script>

<style lang="scss" scoped>
.gulu-switch{
  width: 40px;
  height: 20px;
  background-color: #dcdfe6;
  border-radius: 20px;
  border: none;
  position: relative;
  &-open{
    background-color: #409eff;
  }
  >.gulu-switch-inner{
    display: block;
    background-color: #ffffff;
    width: 16px;
    height: 16px;
    border-radius: 20px;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: all 250ms;
  }
  >.gulu-switch-on{
    transform: translateX(calc(36px - 100%));
  }
}
</style>