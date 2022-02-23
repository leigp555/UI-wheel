<template>
  <transition name="fade" mode="out-in">
    <div class="carItem" v-if="selfIndex===currentIndex">
      <img :src="src" alt="">
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";
export default defineComponent({
  props: {
    src: String,
    selfIndex: Number,
    currentIndex: Number
  },
  setup(props) {
    const {src, selfIndex, currentIndex} = toRefs(props)
    return {src, selfIndex, currentIndex}
  }
})
</script>

<style lang="scss" scoped>
img{
  width: 100%;
}
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