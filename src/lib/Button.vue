<template>
  <button v-bind="$attrs" class="gulu-button" :class="classButton,{'gulu-disabled':disabled,'gulu-circle':circle}" >
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
    cursor: String,
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme,cursor, level,disabled,loading,circle} = props;
    const classButton = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-cursor-${cursor}`]: cursor,
        [`gulu-level-${level}`]: level,
      };
    })
    return {classButton, loading,disabled,circle}
  }
})
</script>


<style lang="scss" scoped>
.gulu-button{
  display: inline;
  padding: 8px 15px;
  border: none;
  box-shadow: 0 0 1px 1px rgb(0,0,0,.3);
  background: none;
  white-space: nowrap;
  text-align: center;
  &:hover{
    background-color: #ecf5ff;
    color: #66b1ff;
  }
}
.gulu-theme-text{
  box-shadow: none;
  color: #66b1ff;
}
.gulu-theme-link{
  box-shadow: none;
  text-decoration: underline;
  color: #66b1ff;
  &:hover{
    background-color: #ffffff;
  }
}
.gulu-cursor-help{
  cursor: help;
}
.gulu-cursor-wait{
  cursor: wait;
}
.gulu-cursor-crosshair{
  cursor: crosshair;
}
.gulu-cursor-not-allowed{
  cursor: not-allowed;
}
.gulu-level-main{
  background-color: #cde3c3;
  color:#67c23a ;
  &:hover{
    background-color:#67c23a;
    color: #ffffff;
  }
}
.gulu-level-danger{
  background-color: #fef0f0;
  color:#f56c6c ;
  &:hover{
    background-color:#f56c6c;
    color: #ffffff;
  }
}
.gulu-level-warning{
  background-color: #fdf6ec;
  color: #e6be3c;
  &:hover{
    background-color:#e6a23c;
    color: #ffffff;
  }
}
.gulu-disabled{
  background-color: #f56c6c;
  opacity: .5;
  cursor: not-allowed;
  &:hover{
    background-color: #f56c6c;
    color: black;
  }
}
.gulu-circle{
  background-color: #fdf6ec;
  color: #e6be3c;
  border-radius: 2em;
  &:hover{
    background-color:#e6a23c;
    color: #ffffff;
  }
}
.gulu-loadingIndicator{
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: #40a9ff #40a9ff #40a9ff transparent;
  border-style: solid;
  border-width: 2px;
  animation: gulu-spin 1s infinite linear;
}
@keyframes gulu-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>