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
                :autoPlay="true"
                :duration="3000"
                :initial="0"
                :dot="true"
                direction="forward"
                :indicator="true"
            >
              <CarItem v-for="(item,index) in imageSrc" :key="index" :index="index">
                <img :src="item" alt="">
              </CarItem>
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
import CarItem from "../lib/CarItem.vue";
const imageSrc=["../../public/images/a.jpg","../../public/images/b.jpg","../../public/images/c.jpg","../../public/images/d.jpg"]
const attribute = ref([
  {attribute: "autoPlay", tip: "是否自动播放", type: "boolean", options: "true/false", default: "true"},
  {attribute: "duration", tip: "切换间隔事件单位毫秒", type: "time", options: "", default: "2000"},
  {attribute: "initial", tip: "初始图片索引", type: "number", options: "", default: "0"},
  {attribute: "dot", tip: "底部圆点索引", type: "boolean", options: "ture/false", default: "true"},
  {attribute: "direction", tip: "方向", type: "string", options: "forward/back", default: "forward"},
  {attribute: "indicator", tip: "左右方向键", type: "boolean", options: "ture/false", default: "true"},
])

</script>

<style lang="scss" scoped>
.carousel {
  width: 520px;
  height: 280px;
}
</style>