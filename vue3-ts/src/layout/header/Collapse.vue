<template>
    <el-icon class="fa-icon" @click="changeIcon">
  <component class="icons" :is="status? Expand: Fold"></component>
</el-icon>
</template>

<script setup lang='ts'>
import { ref,reactive, computed} from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import  { useStore } from '@/store'

const store = useStore()
const status = computed(()=>{
    return store.getters['menu/getCollapse']
})
const changeIcon = ()=> {
    store.commit('menu/setCollapse', !status.value)
}
</script>

<style scoped lang='scss'>
    .fa-icon {
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #303133;
        cursor: pointer;
        margin-right: 15px;
    }

    .icons {
        font-size: 36px;
        color: #303133;
    }
</style>