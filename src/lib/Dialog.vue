<template>
  <teleport to="body">
    <div class="gulu-dialog-wrapper" @click="close">
      <div class="gulu-dialog">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
        <div class="event">
          <button @click="ok">确认</button>
          <button @click="cancel">取消</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";
export default defineComponent({
  name: "Dialog",
  props:{
    ok:Function,
    cancel:Function,
    overflowClose:{
      type:Boolean,
      default: false
    }
  },
  setup(props){
    const{ok,cancel,overflowClose}=toRefs(props)
    const close=()=>{
      if(overflowClose.value){cancel.value!()}
    }
    return {ok,cancel,close}
  }
})
</script>

<style lang="scss" scoped>
.gulu-dialog-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(127, 127, 127,.5);
  > .gulu-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform:translateX(-50%) translateY(calc(-70%));
    display: inline-flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    min-width: 280px;
    align-items: start;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 17%);
    background-color: #ffffff;
    > .content {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: start;
      gap: 10px;
      margin-bottom: 20px;
    }

    > .event {
      display: flex;
      width: 100%;
      justify-content: end;
      gap: 50px;
      > button {
        padding: 3px 15px;
        border-radius: 8px;
        border: none;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 17%);
        background-color: #409eff;
        &:hover {
          background-color: rgb(151, 177, 255);
        }
      }

    }
  }

}

</style>