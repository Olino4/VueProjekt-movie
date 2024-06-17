<template>
  <div>
    <table v-if="csvData.length">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in csvData" :key="rowIndex">
          <td>{{ row.title }}</td>
          <td>{{ row.duration }}</td>
          <td>{{ row.age }}</td>
          <td><img :src="row.url" :alt="row.title" width="100"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- <script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      csvData: [],
      headers: ['Title', 'Duration', 'Age', 'Image']
    };
  },
  mounted() {
    this.loadCsv();
  },
  methods: {
    loadCsv() {
      fetch('/data.csv')
        .then(response => response.text())
        .then(data => {
          Papa.parse(data, {
            complete: (result) => {
              this.csvData = result.data;
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
</script> -->
