<template>
  <div class="gulu-indicator-wrap">
    <div class="gulu-indicator" :class="position==='left'?'left':'right'">
  </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Indicator",
  props: {
    position: String
  },
  setup(props){
    const position=ref<string>(props.position)
    return {position}
  }
})
</script>

<style lang="scss" scoped>
.gulu-indicator-wrap{
  background-color:rgba(226, 230, 234,.6);
  display: inline-block;
  padding: 12px;
  border-radius: 50%;
}
.gulu-indicator {
  width: 10px;
  height:10px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  &.left{
    transform: rotate(-45deg);
  }
  &.right{
    transform: rotate(135deg);
  }
}
</style>