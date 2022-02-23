<template>
  <div class="gulu-carousel-wrap">
    <div class="container">
      <div class="items" v-for="(item ,index) in data " :key="index">
        <CarItem :src="item" :selfIndex="index" :currentIndex="currentIndex"/>
      </div>
    </div>
    <Dot :data-length="dataLength" v-model:currentIndex="currentIndex" :dot="dot"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onBeforeUnmount, onMounted,  ref, toRefs} from "vue";
import CarItem from "./carItem.vue"
import Dot from "./dot.vue"
export default defineComponent({
  components: {Dot, CarItem},
  props: {
    data: {
      type: Array
    },
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
  setup(props) {
    const {data, initial, duration, direction, dot} = toRefs(props)
    let currentIndex = ref<number>(initial.value)
    const dataLength = computed(() => {
      return data.value!.length
    })
    let time: number
    onMounted(() => {
      //@ts-ignore
      time = setInterval(() => {
        if (direction.value === "forward") {
          currentIndex.value += 1
          if (currentIndex.value > data.value!.length - 1) {
            currentIndex.value = 0
          }
        } else if (direction.value === "back") {
          currentIndex.value -= 1
          if (currentIndex.value < 0) {
            currentIndex.value = data.value!.length - 1
          }
        }
      }, duration.value)
    })
    onBeforeUnmount(() => {
      clearInterval(time)
      time = -1
    })
    return {data, currentIndex, dataLength, dot}
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
  >.indicator{
    >.left{
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    >.right{
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}

</style>