<template>
  <div class="notFound">
    <div class="inner">
      <video width="200" autoplay loop muted>
        <source src="../../public/video.mp4" type="video/mp4"/>
      </video>
      <p>无法访问此网站</p>
      <p>检查网址中是否有拼写错误。</p>
      <p>如果拼写无误，请尝试运行 Windows 网络诊断。</p>
      <p>DNS_PROBE_FINISHED_NXDOMAIN</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "NotFound"
})
</script>

<style lang="scss" scoped>
.notFound {
  position: relative;
  > .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%)translateY(50%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: 'Segoe UI', Arial, 'Microsoft Yahei', sans-serif;
    >video{
      margin-bottom:10px;
    }
  }

}
</style>