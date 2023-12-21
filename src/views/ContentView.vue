<template>
    <div>
      <h1>Content View</h1>
      <component :is="componentName"></component>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const componentName = ref(route.params.name);
  </script>
  
  <style scoped>
  </style>