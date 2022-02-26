<template>
  <div class="gulu-carousel-wrap">
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, provide, ref, toRefs} from "vue";
import CarItem from "./carItem.vue"


export default defineComponent({
  components: {CarItem},
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
    const arr = Array.from(context.slots.default!())[0].children!.length as number
    const length = ref<number>(arr)
    const changeCurrentIndex=(index)=>{
      currentIndex.value=index
    }
    provide("currentIndex", currentIndex)
    provide("length", length)
    provide("dot", dot)
    provide("indicator", indicator)
    provide("changeCurrentIndex",changeCurrentIndex)
    let time: number
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
    return {currentIndex, length}
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
}

</style>