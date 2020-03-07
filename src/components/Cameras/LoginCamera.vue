<template lang="html">
  <section class="webcam-2">
    <video
      id="video1"
      ref="video1"
      width="100%"
      height="50%"
      autoplay
      muted
    />
    <select
      id="videoSource"
      ref="videoSource"
      style="display: none;"
      @change="startRecognizing"
    />
  </section>
</template>
<script lang="js">
import * as faceapi from "../../../public/face-api.min";
import axios from 'axios';
import { FACE_LOGIN } from '../../graphql/Mutations';

export default {
  name: 'LoginCamera',
  props: [],
  data() {
    return {
      detections: null,
      refreshId: null,
      descriptors: [],
      errorMessage: null,
    }
  },
  watch: {
    descriptors: {
      deep: true,
  
      handler () {
        console.log(this.descriptors)
        this.$apollo.query({
          query: FACE_LOGIN,
          variables: {
            data: this.descriptors
          }
        })
        .then(result => {
          // Assume we have Token
          console.log('Result after login: ', result);
          console.log('Token: ' + result.data.faceLogIn.token)
          localStorage.setItem('X-auth', result.data.faceLogIn.token);
          localStorage.setItem('authenticated', true);
          this.$router.push('/index');
        })
        .catch(err => {
          this.errorMessage = 'User UnRecognized!'
          console.log(err);
        })
      }
    }
  },
  computed: {
  },
  beforeDestroy() {
    const video = this.$refs.video1
    video.pause();
    video.removeAttribute('src');
    video.srcObject.getTracks().forEach(track => {
      track.stop();
    });
    clearInterval(this.refreshId);
  },
  mounted() {
    const videoSelect = this.$refs.videoSource;
    const video = this.$refs.video1;
    navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        if (device.kind === 'videoinput') {
          const option = document.createElement('option');
          option.value = device.deviceId;
          option.text = device.label || `camera ${videoSelect.length + 1}`;
          videoSelect.appendChild(option);
        }
      })
    })
    video.addEventListener('playing', async () => {
      this.refreshId = setInterval(this.detect, 5000)
      this.detect()
    })
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
      faceapi.nets.faceExpressionNet.loadFromUri('./models')
      ])
      .then(() => {
        this.startRecognizing()
      });
  },
  // apollo: {
  //   descriptors: {
  //     query: FACE_LOGIN,
  //     variables: {
  //       data: 'Meow',
  //     },
  //   }
  // },
  
  methods: {
     startRecognizing: function (){
      const video = this.$refs.video1
      navigator.getUserMedia({video: {}},(stream) => video.srcObject = stream, (err) => console.error(err))
    },
    detect: async function(){
      const video = this.$refs.video1
      const displaySize = { width: video.width, height: video.height }
      const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withFaceDescriptor()
        if (detections) {
          /**
           * TODO: 
           * Finish the mutation in the front
           * connect it here
           * save token when user recognized
           * redirect to user page
           * otherwise ..
           * show something refer to an error
           * 
           * @ali-jalal I got this guys ...
           */
          console.log(detections)
          this.descriptors = Array.from(detections.descriptor)

            // this.$apollo.query({
            //   query: FACE_LOGIN,
            //   variables: {
            //     data: Array.from(detections.descriptor)
            //   }
            // })
            // .then(result => {
            //   // Assume we have Token
            //   console.log('Result after login: ', result);
            //   // storage.setItem('X-auth', result);
            // })
            // .catch(err => {
            //   console.error(err);
            // })

          this.detections = detections
          video.pause();
          video.removeAttribute('src');
          video.srcObject.getTracks().forEach(track => {
            track.stop();
          });
          clearInterval(this.refreshId);
        }
    }
  }
}
</script>
