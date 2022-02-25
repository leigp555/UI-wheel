<template>
  <transition name="fade" mode="out-in">
    <div class="carItem" v-if="selfIndex===currentIndex">
     <slot/>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, inject, toRefs} from "vue";
export default defineComponent({
  props: {
    index:Number
  },
  setup(props) {
    const {index:selfIndex} = toRefs(props)
    const currentIndex=inject("currentIndex")
    return {selfIndex, currentIndex}
  }
})
</script>

<style lang="scss" scoped>
.carItem {
  position: absolute;
  top: 0;
  left: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all 250ms;
}
.fade-enter-from{
  transform: translateX(100%);
}
.fade-leave-to{
  transform: translateX(-100%);
}
</style>