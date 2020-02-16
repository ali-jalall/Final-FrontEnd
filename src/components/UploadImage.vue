<template>
  <div
    id="my-strictly-unique-vue-upload-multiple-image"
    style="display: flex; justify-content: center;"
  >
    <vue-upload-multiple-image
      @on:isUploaded="imageUpdated($event)"
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      @data-change="dataChange"
      @limit-exceeded="limitExceeded"
    />
  </div>
</template>


<script>
import VueUploadMultipleImage from '../components/VueUploadMultipleImage'
export default {
  name: 'UploadImage',
  components: {
    VueUploadMultipleImage
  },
  props: {
    // isUploaded: {
    //   type: Boolean
    // }
  },
  data () {
    return {
    }
  },
  watch: {
    isUploaded: {
      deep: true,

      handler() {
        this.$emit('fileUploaded', { value: true })
      }
    }
  },
  mounted() {
    if (this.isUploaded) {
      this.$emit('fileUploaded', { value: true })
    }
  },
  methods: {
    uploadImageSuccess() {},
    beforeRemove (index, done) {
      const r = confirm("remove image");
      if (r == true) {
        done()
      }
    },
    imageUpdated (isUploaded) {
      this.$emit('imageUploaded', { value: true })
    },
    editImage () {
      // console.log('edit data', formData, index, fileList)
    },
    dataChange () {
      // console.log(data)
    },
    limitExceeded(){
      // console.log(amount)
    }
  }
}
</script>

