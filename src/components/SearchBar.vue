<script setup>
import {ref} from 'vue';

const searchInput = ref('');

const clearSearch = () => {
    searchInput.value = '';
};
</script>

<template>
    <div class="search-container">
        <div class="search-icon" @click="clearSearch">&#128269;</div>
        <input v-model="searchInput" type="text" class="search-bar" placeholder="Search...">
        <div class="clear-icon" @click="clearSearch">&#10006;</div>
    </div>
</template>

<style scoped>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .search-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-bar {
      border-radius: 20px;
      padding: 8px 40px 8px 30px;
      outline: none;
      width: 200px;
      background-color: #3a3a3a;
      color: white;
    }

    .search-icon {
      position: absolute;
      left: 8px;
    }

    .clear-icon {
    cursor: pointer;
  right: 8px;
  top: 50%;
  padding: 0 8px;
  visibility: hidden;
}

.search-bar:focus + .clear-icon,
.clear-icon:hover {
  visibility: visible;
}
    .search-bar:focus + .clear-icon {
      display: block;
    }

    .search-bar::before,
    .search-bar::after,
    .search-bar:focus::before,
    .search-bar:focus::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #3a3a3a;
      border-radius: 50%;
    }

    .search-bar::before {
      top: -2px;
      left: -2px;
    }

    .search-bar::after {
      bottom: -2px;
      left: -2px;
    }

    .search-bar:focus::before {
      top: -4px;
      left: -4px;
    }

    .search-bar:focus::after {
      bottom: -4px;
      left: -4px;
    }
  </style>