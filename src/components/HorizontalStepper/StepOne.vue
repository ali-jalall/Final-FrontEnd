<template lang="html">
  <div style="padding: 2rem 3rem; text-align: left;">
    <div class="field form-group">
      <label> FirstName: </label>
      <input
        v-model="form.firstname"
        :class="['form-control', 'input', ($v.form.firstname.$error) ? 'is-danger' : '']"
        placeholder="Enter Firstname"
        value=""
        name="firstName"
        type="text"
        required
        @input="handleChange"
      >
      <p
        v-if="$v.form.firstname.$error"
        class="help text-danger"
      >
        Please Enter First name
      </p>
    </div>
    <div class="field form-group">
      <label> LastName: </label>
      <input
        v-model="form.lastname"
        :class="['form-control', 'input', ($v.form.lastname.$error) ? 'is-danger' : '']"
        placeholder="Enter LastName"
        value=""
        name="lastName"
        type="text"
        required
        @input="handleChange"
      >
      <p
        v-if="$v.form.lastname.$error"
        class="help text-danger"
      >
        Please Enter Last name
      </p>
    </div>
    <div class="field form-group">
      <label> Age: </label>
      <input
        v-model="form.age"
        :class="['form-control', 'input', ($v.form.age.$anyError) ? 'is-danger' : '']"
        placeholder="Enter Age"
        value=""
        name="age"
        type="number"
        required
        @input="handleChange"
      >
      <p
        v-if="$v.form.age.$anyError"
        class="help text-danger"
      >
        Please Enter Valid age
      </p>
    </div>
    <div class="field form-group">
      <label> Gender: </label> <br>
      <select
        class="btn btn-primary dropdown-toggle dropdown-toggle-split"
        name="gender"
        @input="addGender"
      >
        <option
          class="dropdown-item"
          name="Option"
          value="Select One"
        >
          Chose One ...
        </option>                    
        <option
          class="dropdown-item"
          name="gender"
          value=""
        >
          Male
        </option>
        <option
          class="dropdown-item"
          name="gender"
          value=""
        >
          Female
        </option>
      </select>
      <p
        v-if="$v.form.age.$anyError"
        class="help text-danger"
      >
        Please Enter Valid age
      </p>
    </div>
  </div>
</template>

<script lang="js">
import { validationMixin } from 'vuelidate';
import { required, email, between } from 'vuelidate/lib/validators';


  export default  {
    name: 'StepOne',
    mixins: [validationMixin],
    props: ['clickedNext', 'currentStep'],
    data() {
        return {
            form: {
              firstname: '',
              lastname: '',
              age: 0,
              gender: '',
            }
        }
    },
    validations: {
      form: {
        firstname: {
          required
        },
        lastname: {
          required
        },
        age: {
          between: between(20, 30)
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
