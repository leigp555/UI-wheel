<template>
  <div class="gulu-carousel-wrap" ref="element">
    <transition name="fade">
      <Indicator position="left" class="left" @click="toggleLeft" v-if="visible"/>
    </transition>
    <div class="container">
      <slot/>
    </div>
    <transition name="fade">
      <Indicator position="right" class="right" @click="toggleRight" v-if="visible"/>
    </transition>
    <div class="dot">
      <Dot :dataLength="length" v-model:currentIndex="currentIndex" :dot="dot"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, provide, ref, toRefs} from "vue";
import CarItem from "./carItem.vue"
import Dot from "./dot.vue"
import Indicator from "./Indicator.vue";

export default defineComponent({
  components: {Dot, CarItem, Indicator},
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    initial: {
      type: Number,
      default: 0
    },
    dot: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "forward"
    },
    indicator: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const {autoPlay, duration, initial, dot, direction, indicator} = toRefs(props)
    const currentIndex = ref(initial.value)
    const arr=Array.from(context.slots.default!())[0].children!.length as number
    const length = ref<number>(arr)
    const element = ref<HTMLDivElement>()
    const visible = ref<boolean>(false)
    provide("currentIndex", currentIndex)
    let time:number
    onMounted(() => {
      //@ts-ignore
      time = setInterval(() => {
        if (direction.value === "forward" && autoPlay.value) {
          if (currentIndex.value < length.value - 1) {
            currentIndex.value++
          } else {
            currentIndex.value = 0
          }
        } else if (direction.value === "back" && autoPlay.value) {
          if (currentIndex.value <= 0) {
            currentIndex.value = length.value - 1
          } else {
            currentIndex.value--
          }
        }
      }, duration.value)
    })
    onUnmounted(() => {
      clearInterval(time)
      time = 0
    })
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

    return {currentIndex, length, dot, toggleLeft, toggleRight, indicator, element, visible}
  }

})

</script>


<style lang="scss" scoped>
.gulu-carousel-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  > .container {
    position: relative;
    top: 0;
    left: 0;
  }

  > .left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 1;
  }

  > .right {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>