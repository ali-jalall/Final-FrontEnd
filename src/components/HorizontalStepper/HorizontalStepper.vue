<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8 is-offset-2 w-100 h-100">
        <horizontal-stepper
          :steps="demoSteps"
          @completed-step="completeStep"
          @active-step="isStepActive"
          @stepper-finished="alert"
        />
      </div>
    </div>
  </div>
</template>

<script>
   import HorizontalStepper from 'vue-stepper';
 
    // This components will have the content for each stepper step.
    import StepOne from './StepOne.vue';
    import StepTwo from './StepTwo.vue';
    import StepThree from './StepThree.vue';
 
    export default {
        components: {
            HorizontalStepper
        },
        data(){
            return {
                demoSteps: [
                    {
                        icon: 'mail',
                        name: 'first',
                        title: 'User Data',
                        subtitle: 'Please Enter Youer information',
                        component: StepOne,
                        completed: false
 
                    },
                    {
                        icon: 'report_problem',
                        name: 'second',
                        title: 'Face Descriptors',
                        subtitle: 'Upload 3 images for descriptors',
                        component: StepTwo,
                        completed: false
                    },
                    {
                        icon: 'report_problem',
                        name: 'second',
                        title: 'User Photo',
                        subtitle: 'Upload Photo for User',
                        component: StepThree,
                        completed: false
                    }
                ]
            }
        },
        methods: {
            // Executed when @completed-step event is triggered
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            // Executed when @active-step event is triggered
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            // Executed when @stepper-finished event is triggered
            alert(payload) {
                alert('User Added !')
            }
        }
    }
 
</script>

<style src="./HorizontalStepper.scss" scoped lang="scss">
</style>
<style scoped>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
      format("woff2");
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
.container {
    max-width: 100%;
    }
</style>