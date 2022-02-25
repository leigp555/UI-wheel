<template>
  <div class="doc-wrap">
    <div class="doc-nav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-list"></use>
      </svg>
      <router-link to="/home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </router-link>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-github-fill"></use>
        </svg>
      </a>

    </div>
    <div class="content">
      <aside class="doc-aside" @click="toggle">
        <router-link to="/intro">介绍</router-link>
        <router-link to="/install">安装</router-link>
        <router-link to="/switch">switch组件</router-link>
        <router-link to="/button">button组件</router-link>
        <router-link to="/dialog">dialog组件</router-link>
        <router-link to="/tab">tab组件</router-link>
        <router-link to="/carousel">轮播组件</router-link>
        <router-link to="/skeleton">骨架图组件</router-link>
      </aside>
      <main class="doc-main">
        <router-view/>
      </main>
    </div>
  </div>

</template>

<script lang="ts" setup>
const toggle = (e: Event) => {
  const div = e.target as HTMLDivElement
  div.classList.add("selected")
}


</script>

<style lang="scss" scoped>

.doc-wrap {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  top: 0;
  left: 0;

  > .doc-nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
    background: linear-gradient(90deg, rgba(110, 133, 173, 1) 0%, rgba(147, 165, 195, 1) 54%, rgba(153, 169, 200, 1) 100%);
    @media (min-width: 500px) {
      > svg:nth-child(1) {
        display: none;
      }
    }
  }

  > .content {
    display: flex;
    height: calc(100% - 50px);

    > .doc-aside {
      width: 200px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px 0;
      border-right: 1px solid black;
      overflow-y: auto;

      > a {
        display: block;
        text-align: center;
        line-height: 3em;
        text-decoration: none;

        &.selected {
          color: #4bbc89;
        }

        &:hover {
          background-color: #7188af;
        }
      }
    }

    > .doc-main {
      width: 100%;
      padding: 30px 100px;
      overflow-y: auto;
    }
  }
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>