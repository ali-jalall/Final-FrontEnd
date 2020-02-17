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
        title="<h3 class='mt-3'>Password Recovery</h3>"
        custom-header
      >
        <form
          class="my-3"
          @submit.prevent="recovery"
        >
          <div class="form-group ">
            <label
              class="mt-4"
              style="margin-left: 2px;"
            >
              New Password 
            </label>
            <input
              ref="firstPassword"
              class="form-control no-border"
              required
              type="password"
              name=""
              placeholder="Email"
            >
            <label
              class="mt-5"
              style="margin-left: 2px;"
            >
              Re-enter Password
            </label>
            <input
              ref="secondPassword"
              class="form-control no-border"
              required
              type="password"
              name=""
              placeholder="Email"
            >
          </div>
          <b-button
            type="submit"
            size="sm"
            class="auth-btn mt-5"
            variant="inverse"
          >
            Reset Password
          </b-button>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2019 &copy; The Fifth Team .
    </footer>
  </div>
</template>


<script>
import Widget from '@/components/Widget/Widget';
import { CHECK_TOKEN, RESET_PASSWORD } from '../../graphql/Mutations';

export default {
  name: 'PasswordRecovery',
  components: { Widget },
  data() {
    return {
      hashedToken: ''
    };
  },
  mounted () {
    console.log(this.$route.params.token)
    this.$apollo.mutate({
      mutation: CHECK_TOKEN,

      variables: {
        token: this.$route.params.token
      }
    })
    .then(token => {
      console.log(token)
      this.hashedToken = token
    })
    .catch(err => {
      console.log(err);
    })
  },
  created() {},
  methods: {
    recovery() {
      console.log(this.$refs.firstPassword.value)
      console.log(this.hashedToken.data.checkToken.token)
      this.$apollo.mutate({
        mutation: RESET_PASSWORD,

        variables: {
          token: this.hashedToken.data.checkToken.token,
          password: this.$refs.firstPassword.value
        }
      })
      .then(({ data }) => {
        localStorage.setItem('X-auth', data.resetPassword.token)
        localStorage.setItem('isAdmin', true)
        localStorage.setItem('authenticated', true)
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
};
</script>

<style scoped lang="scss"></style>
