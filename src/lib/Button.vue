<template>
  <button class="gulu-button"
          :class="`gulu-button-${size}`,{
        'gulu-button-circle':circle,
        'gulu-button-disabled':disabled,
    }">
    <slot/>
  </button>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";

export default defineComponent({
  name: "Button",
  props: {
    circle: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(props) {
    const {circle, disabled, size} = toRefs(props)
    return {circle, disabled, size}
  }
})
</script>


<style lang="scss" scoped>
.gulu-button {
  padding: 5px 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, .6);

  &:hover {
    background-color: #ecf5ff;
  }

  &-circle {
    border-radius: 15px;
  }

  &-disabled {
    cursor: not-allowed;
  }
  &-big{
    padding: 5px 25px;
    font-size: 18px;
  }
  &-small {
    padding: 5px 15px;
    font-size: 14px;
  }
}
</style>