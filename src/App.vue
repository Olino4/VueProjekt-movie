<script setup>
  import { ref } from 'vue'
</script>

<template class="bg-[url('../assets/films_bg.png')]">
  <nav class="w-fit p-3 m-auto bg-white rounded-[12px] mb-6">
    <router-link to="/">Home</router-link> |
    <router-link to="/singlefilm">All Films</router-link>
  </nav>
  <router-view />
</template>

<script>

</script>
