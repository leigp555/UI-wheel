<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Switch 开关</h1>
      <h4>表示两种相互对立的状态间的切换，多用于触发「开/关」。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge center>
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>绑定 v-model 到一个 Boolean 类型的变量。 可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色</h4>
        </template>
        <template v-slot:code></template>
        <template v-slot:example>
          <div class="carousel">
            <Carousel
                :data="imgSrc"
                :autoPlay="true"
                :duration="3000"
                :initial="0"
                :dot="true"
                direction="forward"
            >
            </Carousel>
          </div>
        </template>
      </UseAge>
    </template>
  </Show>
</template>


<script lang="ts" setup>
import Carousel from "../lib/Carousel.vue";
import {ref} from "vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";

const imgSrc = ref<string[]>(["./public/images/a.jpg",
  "./public/images/b.jpg", "./public/images/c.jpg", "./public/images/d.jpg"])
const attribute = ref([
  {attribute: "loading", tip: "是否显示加载中xxxxxxxxxxxxx", type: "boolean", options: "large", default: "10"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "large", default: "10"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "large", default: "10"},
  {attribute: "loading", tip: "是否显示加载中", type: "boolean", options: "large", default: "10"}
])

</script>

<style lang="scss" scoped>
.carousel {
  width: 520px;
  height: 280px;
}
</style>