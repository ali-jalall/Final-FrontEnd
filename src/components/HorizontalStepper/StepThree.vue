<template lang="html">
  <section class="step-three">
    <b-col
      lg="12"
      xs="12"
    >
      <UploadImage />
    </b-col>
  </section>
</template>

<script lang="js">
import UploadImage from '@/components/UploadImage';

  export default  {
    name: 'StepThree',
    props: {
      fileUploaded: {
        type: Boolean
      },
      clickedNext,
      currentStep
    },
    watch: {
      fileUploaded: {
        deep: true,

        handler () {
          this.$emit('can-continue', {value: true});
        }
      }
    },
    mounted() {
      // console.log(this.fileUploaded)
    },
    components: {
      UploadImage
    },
    data () {
    },
    computed: {

    },
    mounted () {
      
    },
    methods: {

    }
}


</script>

<style scoped lang="scss">
  .step-three {
    // padding-top: .1em;
    padding-bottom: 2.3em;
  }
</style>
