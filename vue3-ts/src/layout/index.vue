<template>
    <el-container class="layout">
      <el-aside width="200px" class="asside">
        <MenuBar></MenuBar>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main class="main">
            <Tabs></Tabs>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>


<script lang="ts" setup>
  import Header from '@/layout/header/Header.vue'
  import MenuBar from '@/layout/menu/MenuBar.vue'
  import Tabs from './tabs/Tabs.vue'
</script>

<style lang="scss" scoped>
.layout {
  margin: 0;
  width: 100%;
  height: 100%;
  .asside {
    background-color: rgb(48, 65, 86);
  }
  .header {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
  }
  .main {
    padding-top: 0px;
  }

  el-header {
    margin: 0px;
  }

  Header{
    margin: 0px;
  }
}
</style>