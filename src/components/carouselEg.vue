<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Carousel 走马灯</h1>
      <h4>在有限空间内，循环播放同一类型的图片、文字等内容</h4>
    </template>
    <template v-slot:useAge>
      <UseAge center :codeText="carouselCode()">
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>结合Carousel与CarItem组件使用</h4>
        </template>
        <template v-slot:code>
          <pre v-html="html"></pre>
        </template>
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
                <img :src="item" alt="" class="image">
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
import {inject, ref} from "vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";
import CarItem from "../lib/CarItem.vue";
import {codeToHtml} from "./codeHtml";
import {carouselCode} from "../eg/eg";
const updateComponentName=inject("changeComponentName")
updateComponentName("#/carousel")
const imageSrc=["../../public/images/a.jpg","../../public/images/b.jpg","../../public/images/c.jpg","../../public/images/d.jpg"]
const attribute = ref([
  {attribute: "autoPlay", tip: "是否自动播放", type: "boolean", options: "true/false", default: "true"},
  {attribute: "duration", tip: "切换间隔事件单位毫秒", type: "time", options: "", default: "2000"},
  {attribute: "initial", tip: "初始图片索引", type: "number", options: "", default: "0"},
  {attribute: "dot", tip: "底部圆点索引", type: "boolean", options: "ture/false", default: "true"},
  {attribute: "direction", tip: "方向", type: "string", options: "forward/back", default: "forward"},
  {attribute: "indicator", tip: "左右方向键", type: "boolean", options: "ture/false", default: "true"},
  {attribute: "需要指定外部宽高", tip: "", type: "", options: "", default: ""},
])
const html=codeToHtml(carouselCode())
</script>

<style lang="scss" scoped>
.carousel {
  width: 300px;
  height: 150px;
}
</style>