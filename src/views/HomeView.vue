  <!-- <script setup>import FilmComponent from '../views/FilmComponent.vue'</script> -->

<template>
  <div class="flex gap-6">
    <div class="w-[calc((100% / 4) - 72px / 4)]">
      <FilmComponent />
    </div>
  </div>
</template>

<script>
  import FilmComponent from '../components/FilmComponent.vue';

  export default {
    name: "app",
    components: {
      FilmComponent,
    },
  };
</script>
