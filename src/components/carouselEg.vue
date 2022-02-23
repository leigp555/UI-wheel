<template>
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

<script lang="ts" setup>
import Carousel from "../lib/Carousel.vue";
import {ref} from "vue";
const imgSrc = ref<string[]>(["./public/images/a.jpg",
  "./public/images/b.jpg", "./public/images/c.jpg", "./public/images/d.jpg"])
</script>

<style lang="scss" scoped>
.carousel {
  width: 520px;
  height: 280px;
}
</style>