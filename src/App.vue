<script setup>
  import { ref } from 'vue'
</script>

<template>
  <nav class="bg-neutral-400">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">All Films</router-link>
  </nav>  
  <router-view />
</template>

<script>
  import CsvLoader from './components/CsvLoader.vue';
  import Papa from 'papaparse';
  

  export default {
    name: 'App',
    components: {
      CsvLoader
    }
  };
</script>
