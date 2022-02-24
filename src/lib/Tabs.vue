<template>
  <div class="xx">
    <div class="gulu-tab-wrapper" ref="wrap">
      <div class="gulu-title">
        <div v-for="(item,index) in titles" :key="index" :ref="el=>{if(item===selected)element=el}" @click="toggle(item)">{{item}}</div>
      </div>
      <span class="indicator" ref="indicator"></span>
      <div class="gulu-content">
        <component :is="selectedComponent" :key="selectedComponent"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, toRefs, watchEffect} from "vue";
export default defineComponent({
  name: "Tabs",
  props:{
    selected:{
      type:String,
    }
  },
  setup(props,context){
    const {selected}=toRefs(props)
    const element=ref<HTMLDivElement>()
    const indicator=ref<HTMLDivElement>()
    const wrap=ref<HTMLDivElement>()
    const allComponents=context.slots.default!()
    const titles=computed(()=>{
      return allComponents.map(item=>item.props!.title)
    })
    const selectedComponent=computed(()=>{
      return allComponents.filter((item)=>{
        return item.props!.title===selected.value
      })[0]
    })
    const toggle=(item:string)=>{
      context.emit("update:selected",item)
    }
    onMounted(()=>{
      watchEffect(()=>{
        const {width,left:left2}=element.value!.getBoundingClientRect()
        indicator.value!.style.width=width+"px"
        const {left:left1}=wrap.value!.getBoundingClientRect()
        const result=left2-left1
        indicator.value!.style.left=result+"px"
      })
    })
    return {titles,selected,element,selectedComponent,toggle,indicator,wrap}
  }
})
</script>

<style lang="scss" scoped>
.xx{
  box-shadow: 0 0 1px 1px rgba(0,0,0,.2);
  padding: 10px 20px;
  display: inline-block;
  >.gulu-tab-wrapper{
    position: relative;
    >.gulu-title{
      display: inline-flex;
      flex-direction: row;
      gap: 30px;
      margin-bottom: 5px;
      >div:hover{
        color: rgb(113, 192, 255)
      }
    }
    >.gulu-content{
      color: inherit;
      margin-top: 20px;
    }
    >.indicator{
      position: absolute;
      left: 0;
      top: calc(1em + 10px);
      display: block;
      background-color: rgb(64, 158, 255);
      border: 1px solid rgb(64, 158, 255);
      transition: all 250ms;
    }
  }
}

</style>