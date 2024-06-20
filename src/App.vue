<script setup>
  import { ref } from 'vue'
</script>
<div class="h-[10px] w-[100px]">

</div>
<template class="bg-[url('/assets/films_bg.png')]">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/singlefilm">All Films</router-link>
  </nav>
  <router-view />
</template>

<script>
  import CsvLoader from './components/CsvLoader.vue';
  // import Papa from 'papaparse';
  

  export default {
    name: 'App',
    components: {
      CsvLoader
    }
  };
</script>
