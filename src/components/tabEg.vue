<template>
  <Show v-model:attribute="attribute">
    <template v-slot:title>
      <h1>Tabs 标签页</h1>
      <h4>分隔内容上有关联但属于不同类别的数据集合。</h4>
    </template>
    <template v-slot:useAge>
      <UseAge>
        <template v-slot:title>
          <h2>基础用法</h2>
          <h4>Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。</h4>
        </template>
        <template v-slot:code>
          <pre v-html="html"></pre>
        </template>
        <template v-slot:example>
          <Tabs v-model:selected="selected">
            <Tab title="标题一">内容一</Tab>
            <Tab title="标题二">内容二</Tab>
          </Tabs>
        </template>
      </UseAge>
    </template>
  </Show>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import Show from "./Show.vue";
import UseAge from "./UseAge.vue";
import {codeToHtml} from "./codeHtml";
import {switchCode, tabCode} from "../eg/eg";

const selected = ref("标题一")
const attribute=ref([
  {attribute:"selected",tip:"绑定值，值为所设置的插槽中的title",type:"string",options:"插槽内的title",default:""},
  {attribute:"Tab组件",tip:"必须结合Tab组件使用",type:"组件",options:"",default:""},
  {attribute:"title",tip:"Tab中必须传title属性",type:"string",options:"",default:""}
])
const html=codeToHtml(tabCode())
</script>

<style lang="scss" scoped>

</style>