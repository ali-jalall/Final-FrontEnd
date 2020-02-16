<template lang="html">
  <Widget>
    <section class="csv-download p-4 text-center">
      <h3 class="mb-4">
        <strong>CSV Report Download</strong>
      </h3>
      <label>Enter Title for your file</label>
      <input
        ref="reportFileName" 
        class="form-control w-25 m-auto"
        type="text"
        label="Report Name"
        placeholder="Report file name"
      > <br>
      <button
        class="btn btn-warning mt-2"
        @click="download"
      >
        Download
      </button>
    </section>
  </Widget>
</template>

<script lang="js">
import { GET_EMOTIONS_CSV_REPORT } from '../graphql/Queries';

const _checkType = fileName => {
  for (let i = fileName.length; i >= 0; i--) {
    if (fileName[i] === '.') {
      fileName = fileName.slice(0, i);
    }
  }
  return fileName + ".csv";
};

  export default  {
    name: 'CSVDownload',
    props: [],
    data () {
      return {

      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {
      async download() {
        try {
          // console.log(this.$refs.reportFileName.value)
          if(!this.$refs.reportFileName.value){
            return alert("Please Provide a Report Name");
          }
          let reportTitle = await _checkType(this.$refs.reportFileName.value);
          let str = await this.$apollo.query({
            query: GET_EMOTIONS_CSV_REPORT
          });
          str = str.data.getEmotionsCsvReport;
          let element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
          element.setAttribute('download', reportTitle);
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        } catch (e) {
          alert("Error With Fetching the Data from the server");
        }
      }
    }
}


</script>

<style scoped lang="scss">
  .csv-download {

  }
</style>
