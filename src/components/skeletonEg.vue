<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Skeleton 骨架屏</h1>
      <h4>在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge :codeText="skeletonCode()">
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>结合Skeleton和Row组件就能自定义一张骨架图</h4>
        </template>
        <template v-slot:code>
          <pre v-html="html"></pre>
        </template>
        <template v-slot:example>
          <Skeleton v-if="loaded">
            <Row :circle="true" width="40px" height="40px">
              <img src="../../public/images/e.jpg" alt="">
            </Row>
            <div class="article">
              <p> 水调歌头·明月几时有</p>
              <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。</p>
              <p>我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。</p>
              <p>转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？</p>
              <p>人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟</p>
            </div>
          </Skeleton>
          <Skeleton v-else>
            <Row :circle="true" width="40px" height="40px">
              <img src="" alt="">
            </Row>
            <Row width="40vw" />
            <Row width="80vw"/>
            <Row width="80vw"/>
            <Row width="80vw"/>
            <Row/>
            <Row width="50vw"/>
            <Row/>
          </Skeleton>
        </template>
      </UseAge>
    </template>
  </Show>
</template>


<script lang="ts" setup>
import Row from "../lib/Row.vue";
import Skeleton from "../lib/Skeleton.vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";
import {ref} from "vue";
import {codeToHtml} from "./codeHtml";

import {skeletonCode} from "../eg/eg";

const loaded = ref<boolean>(false)
const ajax = (url: string) => {
  return new Promise((resolve, reject) => {
    if (url === "baidu.com") {
      setTimeout(() => {
        resolve("加载完成")
      }, 3000)
    }
  })
}
ajax("baidu.com").then((result) => {
  loaded.value = true
}, () => {
})
const attribute = ref([
  {attribute: "Row", tip: "Skeleton插槽内容", type: "组件", options: "", default: ""},
  {attribute: "width", tip: "Row组件属性设置单行骨架宽度", type: "string", options: "", default: "80vw"},
  {attribute: "height", tip: "Row组件属性设置单行骨架高度", type: "string", options: "--", default: "16px"},
  {attribute: "circle", tip: "Row组件属性可将骨架设置为圆形，也可以裁剪图片", type: "boolean", options: "true/false", default: "false"}
])
const html=codeToHtml(skeletonCode())
</script>

<style lang="scss" scoped>
.article {
  > p {
    padding: 5px 0;

    &:nth-child(1) {
      margin-top: 20px;
    }
  }
}
</style>