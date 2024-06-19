<template>
  <div class="w-full gap-4">
    <img :src="row.url" class="rounded-[24px]">
    <div class="flex-row gap-2" v-if="csvData.Lenght" >
      <div v-for="(row, rowIndex) in csvData" :key="rowIndex">
        <h2>{{ row.title }}</h2>
        <div class="flex-row gap-2">
          <img :src="row.url">
          <p class="w-fit">{{ dur }}</p>
        </div>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
// import Papa from 'papaparse';

export default {
  data() {
    return {
      csvData: [],
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
              // Skip the header row if necessary and set the csvData
              this.csvData = result.data.slice(1); // Assuming the first row is the header
              console.log(this.csvData); // Debugging line to check data structure
            },
            header: false
          });
        })
        .catch(error => {
          console.error('Error loading the CSV file:', error);
        });
    }
  }
};

</script>
<!-- 
<template>
  <div class="w-full gap-4">
    <div v-if="csvData.length">
      <div v-for="(row, rowIndex) in csvData" :key="rowIndex">
        <h2>{{ row[0] }}</h2>
        <div class="flex-row gap-2">
          <img :src="row[3]" class="rounded-[24px]">
          <p class="w-fit">{{ row[1] }}</p>
        </div>
        <p>{{ row[2] }}</p>
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
              // Skip the header row if necessary and set the csvData
              this.csvData = result.data.slice(1); // Assuming the first row is the header
              console.log(this.csvData); // Debugging line to check data structure
            },
            header: false
          });
        })
        .catch(error => {
          console.error('Error loading the CSV file:', error);
        });
    }
  }
};
</script> -->
