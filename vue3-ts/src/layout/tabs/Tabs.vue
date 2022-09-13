<template>
     <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import { ref,reactive,computed,watch} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ITable } from '@/store/type'

const route = useRoute()
const router = useRouter()
const store = useStore()
const tabsList = computed(()=>{
    return store.getters['getTabs']
})
const activeTab = ref('')
const setActiveTab=()=>{
    activeTab.value = route.path
}
const removeTab = ()=>{

}

const addTab = ()=>{
    const { path, meta } = route
    const tab: ITable = { path: path, title: meta.title as string}
    store.commit('addTab', tab)
}


watch(()=>route.path, ()=>{
    setActiveTab(),
    addTab()
})
</script>

<style scoped lang='scss'>
</style>