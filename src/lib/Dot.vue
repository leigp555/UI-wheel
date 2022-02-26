<template>
  <div class="gulu-dot" v-if="dot">
    <div class="gulu-dot-item"
         @click="toggle(index)"
         v-for="(item,index) in dataLength"
         :key="index"
         :style="{backgroundColor:index===currentIndex?'#e07948':'#fff' }">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, toRefs} from "vue";

export default defineComponent({
  name: "Dot",
  props: {
    dataLength: Number,
    currentIndex: Number,
    dot: {type: Boolean, default: true},
    changeCurrentIndex: Function
  },
  setup(props, context) {
    const {dataLength, currentIndex, dot, changeCurrentIndex} = toRefs(props)
    const toggle = (index: number) => {
      changeCurrentIndex.value(index)
    }
    return {dataLength, currentIndex, toggle, dot}
  }
})
</script>

<style lang="scss" scoped>
.gulu-dot {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;

  > .gulu-dot-item {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

}
</style>