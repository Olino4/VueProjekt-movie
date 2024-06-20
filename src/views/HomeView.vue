<template>
  <div>
    <div class="flex-wrap">
      <input type="text" class="w-full mb-6 text-[#121212] p-3 bg-white rounded-[12px]">
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
