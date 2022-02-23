<template>
  <Skeleton v-if="loaded">
    <Row :circle="true" :width="40" :height="40">
      <img src="../../public/images/a.jpg" alt="">
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
    <Row :circle="true" :width="40" :height="40">
      <img src="" alt="">
    </Row>
    <Row :width="200" :height="16"/>
    <Row :width="400"/>
    <Row/>
    <Row :width="400"/>
    <Row />
  </Skeleton>
</template>

<script lang="ts" setup>
import Row from "../lib/Row.vue";
import Skeleton from "../lib/Skeleton.vue";
import {ref} from "vue";

const loaded=ref<boolean>(false)
const ajax = (url: string) => {
  return new Promise((resolve, reject) => {
    if(url==="baidu.com"){
      setTimeout(()=>{
        resolve("加载完成")
      },3000)
    }
  })
}
ajax("baidu.com").then((result)=>{
  loaded.value=true
},()=>{})
</script>

<style lang="scss" scoped>
.article{
  >p {
    padding: 5px 0;

    &:nth-child(1) {
      margin-top: 20px;
    }
  }
}
</style>