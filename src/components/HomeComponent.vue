<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })

import { ref, onMounted, onUnmounted } from 'vue';
import ApiService from '@/services/ApiService';

const squares = [
  {
    text: 'text1',
    color: '#3498db',
    route: 'csharp'
  },
  {
    text: 'text2',
    color: '#3498db',
    route: 'csharp'
  },
  {
    text: 'text3',
    color: '#3498db',
    route: 'csharp'
  },
  {
    text: 'text4',
    color: '#3498db',
    route: 'csharp'
  },
  {
    text: 'text5',
    color: '#3498db',
    route: 'csharp'
  },
  {
    text: 'text6',
    color: '#3498db',
    route: 'python'
  },
  {
    text: 'text7',
    color: '#3498db',
    route: 'python'
  },
  {
    text: 'text8',
    color: '#3498db',
    route: 'python'
  },
  {
    text: 'text9',
    color: '#3498db',
    route: 'python'
  },
  {
    text: 'text10',
    color: '#3498db',
    route: 'python'
  }
];

onMounted(async () => {
  try {
    console.log('pasa');

    const response = await ApiService.fetchTest();

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const json = await response.json();
      console.log(json);
    } else {
      console.log('Non-JSON Content:', await response.text());
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
});

</script>

<template>
  <div class="">
    <h3>
      Welcome!
    </h3>
    <div class="squares-container">
      <div v-for="square in squares" :key="square.id">
        <RouterLink :to="'/content/' + square.route" class="square" :style="{ backgroundColor: square.color, borderRadius: '10%' }">
          <p class="square-text">{{ square.text }}</p>
        </RouterLink>
      </div>
      <RouterLink to="/content/{{ square.route }}" v-for="square in squares" class="square" :style="{ backgroundColor: square.color, borderRadius: '10%' }">
        <p class="square-text">{{ square.text }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.squares-container {
  display: flex;
  flex-wrap: wrap;
}

.square {
  width: 12rem;
  height: 12rem;
  margin: 8px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
}

.square-text {
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>