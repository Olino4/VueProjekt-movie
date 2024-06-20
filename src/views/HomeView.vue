<template>
  <div class="flex-wrap gap-6 bg-[url('../films_bg.png')]">
    <div class="flex-wrap">
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
