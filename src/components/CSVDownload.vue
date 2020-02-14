<template lang="html">
  <Widget>
    <section class="csv-download">
      <h3><strong>File Ready to download</strong></h3>
      <input
        ref="reportFileName" 
        label="Report Name"
      > <br>
      <button
        class="btn btn-success"
        @click="download"
      >
        Download
      </button>
    </section>
  </Widget>
</template>

<script lang="js">

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
