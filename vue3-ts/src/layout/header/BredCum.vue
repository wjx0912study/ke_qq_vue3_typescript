<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in tabs">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang='ts'>
import { userInfo } from 'os';
import { ref,watch, Ref} from 'vue'
import { useRoute, RouteLocationMatched } from 'vue-router'

const tabs: Ref<RouteLocationMatched[]> = ref([])
const route = useRoute()
const getBredCurm = ()=>{
    console.log('route.matched:', route.matched)
    let mached = route.matched.filter(item => item.meta && item.meta.title)
    const first = mached[0]
    if (first.path != '/dashboard') {
        mached = [{path: '/dashboard', meta: {title: '首页'}} as any].concat(mached)
    }
    tabs.value = mached
}
getBredCurm()

watch(()=>route.path, ()=>getBredCurm())
</script>

<style scoped lang='scss'>
</style>