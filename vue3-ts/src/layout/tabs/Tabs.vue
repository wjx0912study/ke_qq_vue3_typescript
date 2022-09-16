<template>
  <el-tabs v-model="activeTab" @tab-click="clickBtn" type="card" class="demo-tabs" closable @tab-remove="removeTab">
    <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.title" :name="item.path"> </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch,onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ITable } from '@/store/type'

const route = useRoute()
const router = useRouter()
const store = useStore()
const tabsList = computed(() => {
  return store.getters['tabs/getTabs']
})
const activeTab = ref('')
const setActiveTab = () => {
  console.log('setActiveTab():', route.path)
  activeTab.value = route.path
}
const removeTab = (targetName: string) => {
  if (targetName === '/dashboard') return

  const tabs = tabsList.value
  let activeName = activeTab.value
  if (activeName === targetName) {
    console.log(activeName)
    console.log(targetName)
    tabs.forEach((tab: ITable, index: number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        console.log(nextTab)
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  activeTab.value = activeName
  store.state.tabs.tabsList = tabs.filter((tab: ITable) => tab.path !== targetName)
  router.push({ path: activeName })
}

const addTab = () => {
  const { path, meta } = route
  const tab: ITable = { path: path, title: meta.title as string }
  store.commit('tabs/addTab', tab)
}

watch(
  () => route.path,
  () => {
    setActiveTab(), addTab()
  }
)
const beforeRefresh = ()=>{
    window.addEventListener('beforeunload', ()=>{
        sessionStorage.setItem('tabsView', JSON.stringify(tabsList.value))
    })
    let tabSession = sessionStorage.getItem('tabsView')
    if (tabSession) {
        let oldTabs = JSON.parse(tabSession)
        if (oldTabs.length > 0) {
            store.state.tabs.tabsList = oldTabs
        }
    }
}
onMounted(()=>{
    beforeRefresh(), setActiveTab(), addTab()
})
const clickBtn = (tab: any) => {
  const { props } = tab
  console.log('clickBtn.props:', props)
  router.push({ path: props.name })
}
</script>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  margin: 0px;
}
:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  margin: 0px 3px !important;
  color: #495060;
  font-size: 12px !important;
  padding: 0xp 10px !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.is-active) {
  border-bottom: 1px solid transparent !important;
  border: 1px solid #42b983 !important;
  background-color: #42b983 !important;
  color: #fff !important;
}
:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}
:deep(.is-active:hover) {
  color: #fff !important;
}
</style>
