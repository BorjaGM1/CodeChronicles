<script setup>
import HomeComponent from '../components/HomeComponent.vue'
import SearchBar from '../components/SearchBar.vue'
import Login from '../components/LoginComponent.vue'

const query = '';

const search = () => {
  this.$router.push(query);
}

</script>

<template>
  <main class="container1">
    <div class="main-header">
      <SearchBar/>
      <Login/>
    </div>
    <HomeComponent/>
  </main>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>