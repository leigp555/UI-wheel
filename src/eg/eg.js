
export const switchCode=()=>`
<template>
  <Switch v-model:state="state"></Switch>
  <Switch v-model:state="state" inactive-color="#13ce66" active-color="#ffe846"></Switch>

</template>

<script lang="ts" setup>
import Switch from "../lib/Switch.vue";
import {ref} from "vue";
const state = ref<boolean>(false)

</script>

<style lang="scss" scoped>

</style>
`
export const buttonCode=()=>`
<template>
  <div class="button">
    <Button>theme</Button>
    <Button theme="link">theme</Button>
    <Button theme="text">theme</Button>
  </div>
  <div class="button">
    <Button>cursor</Button>
    <Button cursor="help">cursor</Button>
    <Button cursor="wait">cursor</Button>
    <Button cursor="crosshair">cursor</Button>
    <Button cursor="not-allowed">cursor</Button>
  </div>
  <div class="button">
    <Button>level</Button>
    <Button level="main">level</Button>
    <Button level="warning">level</Button>
    <Button level="danger">level</Button>
  </div>
  <div class="button">
    <Button>disabled</Button>
    <Button disabled>disabled</Button>
  </div>
  <div class="button">
    <Button>circle</Button>
    <Button circle>circle</Button>
  </div>
  <div class="button">
    <Button>loading</Button>
    <Button loading>loading</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
`
export const dialogCode=()=>`
<template>
  <Button @click="toggle" size="normal" style="width:100px">toggle</Button>
  <Dialog v-if="visible" v-model:confirm="confirm" v-model:cancel="cancel" v-model:visible="visible" overflowClose>
    <template v-slot:title>
      <span>标题</span>
    </template>
    <template v-slot:content>
      <span>内容一</span>
      <span>内容二</span>
    </template>
  </Dialog>

</template>

<script lang="ts" setup>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
const visible = ref<boolean>(false)
const toggle = () => {
  visible.value = !visible.value
}
const confirm = () => {
  console.log("ok")
}
const cancel = () => {
  console.log("cancel")
}
</script>

<style lang="scss" scoped>

</style>
`
export const tabCode=()=>`
<template>
  <Tabs v-model:selected="selected">
    <Tab title="标题一">内容一</Tab>
    <Tab title="标题二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {ref} from "vue";
const selected = ref("标题一")

</script>

<style lang="scss" scoped>

</style>
`
export const carouselCode=()=>`
<template>
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

<script lang="ts" setup>
import Carousel from "../lib/Carousel.vue";
import CarItem from "../lib/CarItem.vue";
const imageSrc=["../../public/images/a.jpg","../../public/images/b.jpg","../../public/images/c.jpg","../../public/images/d.jpg"]

</script>

<style lang="scss" scoped>
.carousel {
  width: 520px;
  height: 280px;
}

</style>
`
export const skeletonCode=()=>`
<template>
  <Skeleton v-else>
    <Row :circle="true" :width="40" :height="40">
      <img src="" alt="">
    </Row>
    <Row :width="200" :height="16"/>
    <Row :width="400"/>
    <Row/>
    <Row :width="400"/>
    <Row/>
  </Skeleton>

</template>

<script lang="ts" setup>
import Skeleton from "../lib/Skeleton.vue";
import Row from "../lib/Row.vue";
</script>

<style lang="scss" scoped>

</style>
`