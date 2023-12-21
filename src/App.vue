<script setup>
import Sidebar from "@/components/SideBar.vue";
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <div class="wrapper">
      <Sidebar />
      <div class="main-content container1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>