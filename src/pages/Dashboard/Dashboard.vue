<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>
        Dashboard
      </b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Dashboard
    </h1>
    <div>
      <b-row>
        <b-col
          lg="4"
          sm="6"
          xs="12"
          class="widgets"
        >
          <div class="pb-xlg h-100">
            <Widget
              class="h-100 mb-0 text-center p-4"
              title="Happy"
            >
              <img
                src="../../assets/img/happy.png"
                width="120px"
                alt="netural-face"
              >
              <h3><strong>30%</strong></h3>
            </Widget>
          </div>
        </b-col>

        <b-col
          lg="4"
          sm="6"
          xs="12"
          class="widgets"
        >
          <div class="pb-xlg h-100">
            <Widget
              class="h-100 mb-0 text-center p-4"
              title="Netural"
            >
              <img
                src="../../assets/img/netural.png"
                width="120px"
                alt="netural-face"
              >
              <h3><strong>23%</strong></h3>
            </Widget>
          </div>
        </b-col>

        <b-col
          lg="4"
          sm="6"
          xs="12"
          class="widgets"
        >
          <div class="pb-xlg h-100">
            <Widget
              class="h-100 mb-0 text-center p-4"
              title="Sad"
            >
              <img
                src="../../assets/img/sad.png"
                width="120px"
                alt="sad-face"
              >
              <h3><strong>47%</strong></h3>
            </Widget>
          </div>
        </b-col>
      </b-row>
    </div>
    <Widget>
      <b-row>
        <b-col>
          <Horizontal />
        </b-col>
      </b-row>
    </Widget>
    <Widget>
      <b-row>
        <b-col>
          <TimelineComponent />
        </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
// import UploadImage from '@/components/UploadImage';
// import FacialDiscriptorExtractor from '@/components/FacialDiscriptorExtractor';
import Horizontal from '../../components/HorizontalStepper/HorizontalStepper';
import TimelineComponent from '../../components/TimelineComponent';
// import LoginCamera from '../../components/Cameras/LoginCamera'
// import { Chart } from 'highcharts-vue';

export default {
  name: 'Dashboard',
  components: {
    Widget,
    Horizontal,
    TimelineComponent
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style src="./Dashboard.scss" lang="scss" scoped />
