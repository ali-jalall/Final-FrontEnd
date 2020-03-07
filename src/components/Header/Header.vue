<template>
  <b-navbar class="header d-print-none">
    <b-nav>
      <b-nav-item>
        <a
          id="barsTooltip"
          class="d-md-down-none px-2"
          href="#"
          @click="toggleSidebarMethod"
        >
          <i class="la la-bars la-lg" />
        </a>
        <b-tooltip
          target="barsTooltip"
          placement="bottom"
        >
          Turn on/off <br> sidebar <br> collapsing
        </b-tooltip>
        <a
          class="fs-lg d-lg-none"
          href="#"
          @click="switchSidebarMethod"
        >
          <span class="rounded rounded-lg bg-gray text-white d-md-none">
            <i class="la la-bars la-lg" />
          </span>
          <i class="la la-bars la-lg d-sm-down-none ml-4" />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav class="ml-auto">
        <b-dropdown-item disabled="disabled" class="pt-1">
          <span class="avatar thumb-sm float-left mr-2">
            <img
              class="rounded-circle"
              src="../../assets/people/user.png"
              alt="..."
            >
          </span>
          <div class="pt-2 px-4">
          <span class="medium">Control <span class="fw-semi-bold">Pannel</span></span>
          </div>
        </b-dropdown-item>
      <b-dropdown-item-button @click="logout">
        <i class="la la-sign-out" style="padding-top: 5.7px; font-size: 20pt;" />
      </b-dropdown-item-button>
      <b-nav-item>
        <a
          id="toggle-chat"
          class="d-sm-down-none px-2"
          href="#"
          @click="toggleChat"
        >
          <i class="la la-globe" />
        </a>
        <i
          v-if="chatNotificationIcon"
          class="chat-notification-sing animated bounceIn"
        />
      </b-nav-item>
      <b-nav-item class="fs-lg d-md-none">
        <a
          href="#"
          @click="toggleChat"
        >
          <span class="rounded rounded-lg bg-gray text-white"><i class="la la-globe" /></span>
        </a>
      </b-nav-item>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  components: {  },
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic', 'chatNotificationIcon', 'chatNotificationPopover']),
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'toggleChat', 'switchSidebar', 'changeSidebarActive', 'initApp']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      window.localStorage.clear()
      this.$router.push('/login');
    },
  },
  created() {
    if (window.innerWidth > 576) {
      this.initApp();
    }
  },
};
</script>

<style src="./Header.scss" lang="scss" scoped />
