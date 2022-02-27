<template>
  <div class="gulu-carousel-wrap" ref="element">
    <transition name="fade" mode="out-in">
      <div class="carItem" v-if="selfIndex===currentIndex" >
        <transition name="fadeX">
          <Indicator position="left" class="left" @click="toggleLeft" v-if="visible"/>
        </transition>
        <slot/>
        <transition name="fadeX">
          <Indicator position="right" class="right" @click="toggleRight" v-if="visible"/>
        </transition>
        <div class="dot">
          <Dot :dataLength="length" :currentIndex="currentIndex" :dot="dot" :changeCurrentIndex="changeCurrentIndex"/>
        </div>
      </div>
    </transition>
  </div>

</template>

<script lang="ts">
import {defineComponent, inject, onMounted, Ref, ref, toRefs} from "vue";
import Dot from "./dot.vue"
import Indicator from "./Indicator.vue";
export default defineComponent({
  components:{Indicator,Dot},
  props: {
    index:Number,

  },
  setup(props) {
    const visible = ref<boolean>(false)
    const {index:selfIndex} = toRefs(props)
    const currentIndex=inject("currentIndex")  as Ref
    const length=inject("length") as Ref
    const dot=inject("dot") as Ref
    const indicator=inject("indicator") as Ref
    const changeCurrentIndex=inject("changeCurrentIndex") as Ref


    const element = ref<HTMLDivElement>()
    const toggleLeft = () => {
      if (currentIndex.value === 0) {
        currentIndex.value = length.value - 1
      }
      currentIndex.value -= 1
    }
    const toggleRight = () => {
      if (currentIndex.value === length.value - 1) {
        currentIndex.value = 0
      } else {
        currentIndex.value += 1
      }
    }
    onMounted(() => {
      if (indicator.value) {
        element.value?.addEventListener("mouseover", () => {
          visible.value = true
        })
        element.value?.addEventListener("mouseout", () => {
          visible.value = false
        })
      }
    })
    return {selfIndex, currentIndex,visible,toggleRight,toggleLeft,element,dot,length,changeCurrentIndex}
  }
})
</script>

<style lang="scss" scoped>
.gulu-carousel-wrap{
  width: 100%;
  height: 100%;
  >.carItem {
    position: absolute;
    top: 0;
    left: 0;
    > .left {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 1;
    }
    > .right {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
}
.fadeX-enter-active,
.fadeX-leave-active {
  transition: opacity 0.5s ease;
}
.fadeX-enter-from,
.fadeX-leave-to {
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all 500ms;
}
.fade-enter-from{
  transform: translateX(100%);
}
.fade-leave-to{
  transform: translateX(-100%);
}
</style>