<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-gray" />
        Sing App
        <i class="fa fa-circle text-warning" />
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-3'>Reset Your Password</h3>"
        custom-header
      >
        <p class="widget-auth-info mt-2 mb-5">
          Enter Email to recieve Reset Link.
        </p>
        <form
          class="my-3"
          @submit.prevent="login"
        >
          <div class="form-group ">
            <input
              ref="email"
              class="form-control no-border my-3"
              required
              value=""
              type="email"
              name="email"
              placeholder="Email"
            >
          </div>
          <b-button
            type="submit"
            size="sm"
            class="auth-btn my-3"
            variant="inverse"
          >
            Reset
          </b-button>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2019 &copy; The Fifth Team rbktn-01.
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { FORGET_PASSWORD } from '../../graphql/Mutations'

export default {
  name: 'EmailForm',
  components: { Widget },
  data() {
    return {};
  },
  created() {},
  methods: {
    login () {
      const email = this.$refs.email.value;
      console.log(email)

      this.$apollo.mutate({
        mutation: FORGET_PASSWORD,
        variables: {
          email
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  },
};
</script>