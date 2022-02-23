<template>
  <div class="gulu-skeleton-wrap">
    <div class="gulu-skeleton" :class="{circle:circle}" :style="{width: width+'px',height:height+'px'}">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";

export default defineComponent({
  name: "row",
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 16
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {width, height, circle} = toRefs(props)
    return {width, height, circle}
  }
})
</script>


<style lang="scss" scoped>
.gulu-skeleton-wrap {
  margin-top: 16px;
  > .gulu-skeleton {
    background: linear-gradient(66deg, rgba(232, 232, 232, 1) 0%, rgba(242, 242, 242, 1) 35%, rgba(232, 232, 232, 1) 83%, rgba(232, 232, 232, 1) 100%);
    background-size: 800px 45px;
    animation: shine 1s infinite;
    &.circle {
      clip-path: circle(50%)
    }
  }
}
img{
  width: 100%;
}
@keyframes shine {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}
</style>