<template lang="html">
  <div style="padding: 2rem 3rem; text-align: left;">
    <div class="field form-group">
      <label class="label">Username</label>
      <div class="control">
        <input
          v-model="form.username"
          :class="['form-control', 'input', ($v.form.username.$error) ? 'is-danger' : '']"
          type="text"
          placeholder="Enter Username"
          aria-describedby="emailHelp"
        >
      </div>
      <p
        v-if="$v.form.username.$error"
        class="help text-danger"
      >
        This username is invalid
      </p>
    </div>
    <div class="field form-group">
      <label class="label">Email</label>
      <div class="control">
        <input
          v-model="form.demoEmail"
          :class="['form-control', 'input', ($v.form.demoEmail.$error) ? 'is-danger' : '']"
          type="text"
          placeholder="Email input"
        >
      </div>
      <p
        v-if="$v.form.demoEmail.$error"
        class="help text-danger"
      >
        This email is invalid
      </p>
    </div>
    <div class="field form-group">
      <label class="label">Message</label>
      <div class="control">
        <textarea
          v-model="form.message"
          :class="['form-control', 'textarea', ($v.form.message.$error) ? 'is-danger' : '']"
          placeholder="Textarea"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';


  export default  {
    name: 'StepOne',
    mixins: [validationMixin],
    props: ['clickedNext', 'currentStep'],
    data() {
        return {
            form: {
              username: '',
              demoEmail: '',
              message: ''
            }
        }
    },
    validations: {
        form: {
            username: {
                required
            },
            demoEmail: {
                required,
                email
            },
            message: {
                required
            }
        }
    },
    watch: {
      $v: {
        handler: function (val) {
          if(!val.$invalid) {
            this.$emit('can-continue', {value: true});
          } else {
            this.$emit('can-continue', {value: false});
          }
        },
        deep: true
      },
      clickedNext(val) {
        if(val === true) {
          this.$v.form.$touch();
        }
      }
    },
    mounted() {
      if(!this.$v.$invalid) {
        this.$emit('can-continue', {value: true});
      } else {
        this.$emit('can-continue', {value: false});
      }
    },
    methods: {
      handleChange (event) {
        this.$store.commit('handleChange', event)
      },
      addGender (event) {
        if (event.target.selectedOptions[0].label !== 'Chose One ...') {
          this.$store.commit('addGender', event.target.selectedOptions[0].label)
        }
      }
    }
}


</script>

<style scoped lang="scss">
.step-one {
  padding-top: 2.5em;
  padding-bottom: 2.8em;
}
.is-danger {
  border: 1px solid rgb(255, 77, 77);
  // outline: 2px solid green;
}
.text-danger {
  color: red;
}
</style>
