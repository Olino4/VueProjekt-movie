<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/vue.svg">
    <HomeViewComponent />
  </div>
</template>

<script>
import HomeViewComponent from '@/components/HomeViewComponent.vue'

export default {
  name: 'HomeViewComponent',
  components: {
    HomeViewComponent
  }
}
</script>
