<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store'

defineProps<{ msg: string }>()

const store = useStore()
const count = ref(0)
const showCount = computed(()=>{
  return store.getters['menu/getCount']
})

const addBtn = ()=>{
  store.commit('menu/setCount', ++count.value)
}
</script>

<template>
  <h1>{{ showCount }}</h1>

  <el-button type="primary" size="default" icon='el-icon-plus'>新增</el-button>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  
  <div class="card">
    <button type="button" @click="addBtn">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
