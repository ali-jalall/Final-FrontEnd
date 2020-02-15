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
          @submit.prevent="login"
        >
          <div class="form-group ">
            <label
              class="mt-4"
              style="margin-left: 2px;"
            >
              New Password 
            </label>
            <input
              ref="first-password"
              class="form-control no-border"
              required
              type="email"
              name="email"
              placeholder="Email"
            >
            <label
              class="mt-5"
              style="margin-left: 2px;"
            >
              Re-enter Password
            </label>
            <input
              ref="first-password"
              class="form-control no-border"
              required
              type="email"
              name="email"
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

export default {
  name: 'PasswordRecovery',
  components: { Widget },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
