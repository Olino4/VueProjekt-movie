<script setup>
  import { ref } from 'vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">All Films</router-link>
  </nav>  
  <router-view />
</template>

<script>
  export default {
    name: 'App',
  };
</script>
