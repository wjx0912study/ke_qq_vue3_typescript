<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :index="menu.path"
      :key="menu.path"
    >
      <template #title>
        <i v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')" :class="menu.meta.icon"></i>
        <component v-else :is="menu.meta.icon" class="icons"></component>
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item
    style="color: #f4f4f5"
      v-else
      :index="menu.path">
        <i v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')" :class="menu.meta.icon"></i>
        <component v-else :is="menu.meta.icon" class="icons"></component>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
  defineProps(['menuList'])
</script>

<style lang="scss" scoped>
  .icons {
    width: 24px;
    height: 18px;
    margin-right: 5px;
  }
</style>
