<template>
  <div class="show-wrap">
    <div class="title-show">
      <slot name="title"></slot>
    </div>
    <slot name="useAge"></slot>

    <div class="attribute">
      <table>
        <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{ item.attribute?item.attribute:"--" }}</td>
          <td>{{ item.tip?item.tip:"--" }}</td>
          <td>{{ item.type?item.type:"--" }}</td>
          <td>{{ item.options?item.options:"--" }}</td>
          <td>{{ item.default?item.default:"--" }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
export default defineComponent({
  name: "Show",
  props: {
    attribute: Object
  },
  setup(props) {
      type attribute = {
      attribute: string,
      tip: string,
      type: string,
      options: string,
      default: string,
    }
    const data=ref<attribute[]>(props.attribute as attribute[])
    return {data}
  }
})
</script>

<style lang="scss" scoped>
.show-wrap {
  .title-show {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }

  > .attribute {
    margin-top: 80px;
    padding-bottom: 50px;
    > table {
      width: 100%;
      table-layout: auto;
      border-collapse: collapse;
      text-align: center;
      & td,th{
        line-height: 3em;
        border-bottom: 1px solid black;
        @media (max-width: 500px) {
          font-size: 14px;
          line-height: 2.5em;
        }
      }
    }
  }
}
</style>