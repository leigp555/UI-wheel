<template>
  <div>
    <transition name="fade">
      <div class="gulu-tip" v-if="codeVisible">{{ title }}</div>
    </transition>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";

export default defineComponent({
  name: "codeTip",
  props: {
    title: String,
    codeVisible:Boolean
  },
  setup(props) {
    const {title,codeVisible} = toRefs(props)
    return {title,codeVisible}
  }
})
</script>

<style lang="scss" scoped>
.gulu-tip {
  position: fixed;
  z-index: 1;
  top: 37vh;
  right: 20px;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: rgba(114, 228, 114, .4);
  color: white;
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