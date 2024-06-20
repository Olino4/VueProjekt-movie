<template>
  <div class="gap-6 flex flex-wrap" v-if="csvData.length">
    <div  class="gap-4 w-[calc((100%/4)-72px/4)]" v-for="(row, index) in csvData" :key="index">
      <div class="flex-row gap-2">
        <div class="flex-row gap-2">
          <img :src="row.url">
          <h2>{{ row.title }}</h2>
          <p class="w-fit">{{ row.duration }}</p>
          <p class="w-fit">{{ row.age }}</p>
        </div>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      csvData: [],
      row: null,
    };
  },
  mounted() {
    this.loadCsv();;
  },
  methods: {
    loadCsv() {
    fetch('../filmData.csv')
      .then(response => response.text())
      .then(data => {
        Papa.parse(data, {
          complete: (result) => {
            this.csvData = result.data.slice(1);
            console.log(this.csvData);
          },
          header: true
        });
      })
        .catch(error => {
          console.error('Error loading the CSV file:', error);
        });
    }
  }
};

</script>
