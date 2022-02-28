<template>
  <div class="outer">
    <div class="home-wrap">
      <nav class="home-nav">
        <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-logo"></use>
          </svg>
        </div>
        <ol>
          <li><a href="tel:17397015285"> 联系我</a></li>
          <li>
            <router-link to="/doc"> 文档</router-link>
          </li>
        </ol>
      </nav>
      <main class="home-main">
        <div class="container">
          <ol class="article">
            <li><p>UI组件库</p></li>
            <li><p>基于vue3开发，简单易上手</p></li>
            <li>
              <button>
                <router-link to="/doc">
                  开始使用
                </router-link>
              </button>
              <button>
                <a href="https://github.com/leigp555/UI-wheel.git">github</a>
              </button>
            </li>
          </ol>
          <div class="png">
            <img src="../../public/a.jpg" alt="">
          </div>
        </div>
      </main>
      <footer class="footer">
        <ol>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Vue"></use>
            </svg>
            <p>vue3</p>
            <p>基于vue3开发</p>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ts"></use>
            </svg>
            <p>typescript</p>
            <p>使用typescript书写</p>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-easy"></use>
            </svg>
            <p>easy</p>
            <p>简单明了易上手</p>
          </li>
        </ol>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Home"
})
</script>

<style lang="scss" scoped>
.outer {
  height: 100%;
  background-color: #ccd4df;
  position: relative;
}
.home-wrap {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  top: 0;
  left: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
  transform: translateX(-50%) ;
  height: 100%;
  @media (max-width: 1200px) and(min-width: 900px) {
    width: 900px;
  }
  @media (max-width: 900px) and(min-width: 600px) {
    width: 800px;
  }



  > .home-nav {
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 50px 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: linear-gradient(90deg, rgba(110, 133, 173, 1) 0%, rgba(147, 165, 195, 1) 54%, rgba(153, 169, 200, 1) 100%);
    @media (max-width: 600px) {
      margin-top: 0;
      border-radius: 0;
      padding: 40px 30px;
    }

    & .icon {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    > ol {
      display: flex;
      gap: 20px;
    }
  }

  > .home-main {
    width: 100%;
    height: 300px;
    background: linear-gradient(90deg, rgba(110, 133, 173, 1) 0%, rgba(147, 165, 195, 1) 54%, rgba(153, 169, 200, 1) 100%);
    @media (max-width: 600px) {
      height: 200px;
    }

    > .container {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;

      > ol {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-150%);
        @media (max-width: 600px) {
          top: 10px;
          transform: translateX(-50%);
          text-align: center;
        }

        & li {
          margin-bottom: 30px;
          @media (max-width: 600px) {
            margin-bottom: 15px;
          }
        }

        & li:first-child {
          color: #f8fcfd;
          font-size: 2em;

        }

        & li:nth-child(2) {
          color: #cedbe9;

          white-space: nowrap;
        }

        & li:nth-child(3) {
          color: #cedbe9;
          @media (max-width: 600px) {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          > button {
            padding: 6px 12px;
            line-height: 1.5em;
            text-align: center;
            white-space: nowrap;
            margin-right: 20px;
            border-radius: 10px;
            border: none;
            background-color: #13192e;
            color: #d6d9e0;
            @media (max-width: 600px) {
              margin-right: 0;
              font-size: 14px;
            }
          }
        }
      }

      > .png {
        max-width: 330px;
        position: absolute;
        top: 35%;
        right: 250px;
        transform: translateY(-50%);
        @media (max-width: 1200px) and(min-width: 900px) {
          max-width: 280px;
          right: 180px;
          top: 40%;
        }
        @media (max-width: 900px) and(min-width: 600px) {
          max-width: 260px;
          right: 160px;
          top: 42%;
        }

        > img {
          max-width: 100%;
          @media (max-width: 600px) {
            display: none;
          }
        }
      }
    }
  }

  > .footer {
    margin-top: 50px;
    @media (max-width: 600px) {
      margin: 30px 30px 0 30px;
    }

    > ol {
      display: flex;
      justify-content: center;
      gap: 20px;
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }

      > li {
        background-color: #f0f3fd;
        width: 400px;
        display: inline-grid;
        grid-template-columns: 4em 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
        padding: 0 25px;
        @media (max-width: 900px) and(min-width: 600px) {
           grid-gap: 20px;
        }
        @media (max-width: 600px) {
          width: 100%;
          grid-template-columns: 80px;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          gap: 5px;
          border-radius: 10px;
        }

        > .icon {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 5;
          width: 4em;
          height: 4em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }

        > p:nth-child(2) {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
        }

        > p:nth-child(3) {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 4;
        }

        > p {
          white-space: nowrap;
        }
      }
    }

  }
}


</style>