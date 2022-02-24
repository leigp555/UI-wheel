<template>
  <div class="gulu-carousel-wrap">
    <div class="container">
      <slot/>
    </div>
    <div class="dot">
      <Dot :dataLength="length" v-model:currentIndex="currentIndex" :dot="dot"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, provide, ref, toRefs} from "vue";
import CarItem from "./carItem.vue"
import Dot from "./dot.vue"

export default defineComponent({
  components: {Dot, CarItem},
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
    }
  },
  setup(props, context) {
    const {autoPlay, duration, initial, dot, direction} = toRefs(props)
    const currentIndex = ref(initial.value)
    const length = ref<number>(Array.from(context.slots.default())[0].children.length)
    provide("currentIndex", currentIndex)
    let time
    onMounted(() => {
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
    return {currentIndex, length, dot}
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

  > .indicator {
    > .left {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    > .right {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}

</style>