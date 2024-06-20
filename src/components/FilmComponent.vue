<template>
  <div class="gap-6 flex flex-wrap" v-if="filteredCsvData.length">
    <div class="bg-white p-4 rounded-[12px] gap-4 w-[calc((100%/4)-72px/4)]" 
         v-for="(row, index) in filteredCsvData" 
         :key="index">
      <div class="flex-row gap-2">
        <div class="flex-row gap-2">
          <img :src="row.url" class="rounded-[10px]">
          <h2 class="text-[#121212]">{{ row.title }}</h2>
          <p class="w-fit text-[#121212]">{{ row.duration }}</p>
          <p class="w-fit text-[#121212]">{{ row.age }}</p>
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
  computed: {
    filteredCsvData() {
      return this.csvData.filter(row => row.title || row.url || row.duration || row.age);
    }
  },
  mounted() {
    this.loadCsv();
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