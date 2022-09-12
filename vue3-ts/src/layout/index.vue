<template>
    <el-container class="layout">
      <el-aside width="200px" class="asside">
        <MenuBar></MenuBar>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
</template>


<script lang="ts" setup>
  import Header from '@/layout/header/Header.vue'
  import MenuBar from '@/layout/menu/MenuBar.vue'
</script>

<style lang="scss" scoped>
.layout {
  margin: 0;
  width: 100%;
  height: 100%;
  .asside {
    //background-color: aquamarine;
  }
  .header {
    background-color: blueviolet;
  }
  .main {
    background-color: darkgray;
  }
}
</style>