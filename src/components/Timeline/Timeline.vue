<template>
  <aside :class="{chat: true, chatOpen}">
    <header class="chatHeader">
      <h4 class="chatTitle">
        Contacts
      </h4>
      <div class="chatSearch">
        <b-input
          size="sm"
          placeholder="Search..."
          @input="handleSearchInput"
        />
        <i class="fa fa-search" />
      </div>
    </header>
    <div :class="{'chatPanel chatContacts': true, chatMessageOpen: chatMessageOpened}">
      <h5 class="navTitle">
        TODAY
      </h5>
      <b-list-group
        id="chat-sidebar-user-group"
        class="chatSidebarUserGroup"
      >
        <b-list-group-item
          v-for="(emotion, index) in emotions"
          :key="index"
          @click="(e) => openMessages(conversation, index)"
        >
          <div>
            <span class="thumb-sm float-left">
              <img
                class="rounded-circle"
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
                alt="..."
              >
            </span>
          </div>
          <div>
            <h6 class="messageSender">
              {{ emotion.userId }}
            </h6>
            <div
              style=" padding-left: 1.7em; padding-bottom: 2em; width: 100%;"
              class="fw-semi-bold p-4 pl-5"
            >
              <b-row>
                <b-col
                  lg="1.5"
                  xs="12"
                >
                  <div>
                    <img
                      class="emoji"
                      width="50px"
                      src="/img/netural.006cc26d.png"
                      alt=""
                    >
                    <h6 class="text-center">
                      <b> {{ emotion.neutral }} </b>
                    </h6>
                  </div>
                </b-col>
                <b-col
                  lg="1.5"
                  xs="12"
                >
                  <div>
                    <div>
                      <img
                        class="emoji"
                        width="50px"
                        src="/img/netural.006cc26d.png"
                        alt=""
                      >
                      <h6 class="text-center">
                        <b> {{ emotion.happy }} </b>
                      </h6>
                    </div>
                  </div>
                </b-col>
                <b-col
                  lg="1.5"
                  xs="12"
                >
                  <div>
                    <div>
                      <img
                        class="emoji"
                        width="50px"
                        src="/img/netural.006cc26d.png"
                        alt=""
                      >
                      <h6 class="text-center">
                        <b> {{ emotion.sad }} </b>
                      </h6>
                    </div>
                  </div>
                </b-col>
                <b-col
                  lg="1.5"
                  xs="12"
                >
                  <div>
                    <div>
                      <img
                        class="emoji"
                        width="50px"
                        src="/img/netural.006cc26d.png"
                        alt=""
                      >
                      <h6 class="text-center">
                        <b> {{ emotion.angry }} </b>
                      </h6>
                    </div>
                  </div>
                </b-col>
                <b-col
                  lg="1.5"
                  xs="12"
                >
                  <div>
                    <div>
                      <img
                        class="emoji"
                        width="50px"
                        src="/img/netural.006cc26d.png"
                        alt=""
                      >
                      <h6 class="text-center">
                        <b> {{ emotion.fearful }} </b>
                      </h6>
                    </div>
                  </div>
                </b-col>
                <b-col
                  lg="1.5"
                  xs="1"
                >
                  <div>
                    <div>
                      <img
                        class="emoji"
                        width="50px"
                        src="/img/netural.006cc26d.png"
                        alt=""
                      >
                      <h6 class="text-center">
                        <b>{{ emotion.disgusted }}</b>
                      </h6>
                    </div>
                  </div>
                </b-col>
                <b-col
                  lg="1.5"
                  xs="12"
                >
                  <div>
                    <div>
                      <img
                        class="emoji"
                        width="50px"
                        src="/img/netural.006cc26d.png"
                        alt=""
                      >
                      <h6 class="text-center">
                        <b>{{ emotion.surprised }}</b>
                      </h6>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div :class="{'chatPanel chatMessages': true, chatMessageOpen: !chatMessageOpened}">
      <h6 class="messagesTitle">
        <a @click="chatMessageOpened = true">
          <i class="fa fa-angle-left mr-xs" />
          {{ conversation.name }}
        </a>
      </h6>
      <!-- <b-list-group>
        <b-list-group-item
          v-for="message in conversation.messages"
          :key="message.id"
          :class="{fromMe: message.fromMe, 'messageItem': true}"
        >
          <span class="thumb-sm">
            <img
              v-if="message.fromMe"
              class="rounded-circle"
              src="../../assets/people/a5.jpg"
              alt="..."
            >
            <img
              v-else
              class="rounded-circle"
              :src="conversation.image"
              alt="..."
            >
          </span>
          <div class="messageBody">
            {{ message.text }}
          </div>
        </b-list-group-item>
      </b-list-group> -->
      <!-- <footer class="chatFooter form-group">
        <input
          class="form-control fs-mini"
          type="text"
          placeholder="Type your message"
          @keydown="addMessage"
        >
      </footer> -->
    </div>
  </aside>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import { FACE_DETECTING_SUBSCRIPTIOM, EMOTIONS_QUERY } from '../../graphql/Mutations'
import { MessageStates } from '../../store/layout';

export default {
  name: 'Timeline',
  data() {
    return {
      messageStates: MessageStates,
      chatMessageOpened: true,
      conversation: Object,
      searchValue: '',
      render: false,
    };
  },
  computed: {
    ...mapState('layout', ['chatOpen', 'chatNotificationMessageState']),
  },
  methods: {
    ...mapActions('layout', ['readMessage']),
    filterConversations(item) {
      const isFindName = item.name.toLowerCase()
        .indexOf(this.searchValue.toLowerCase()) !== -1;
      const isFindMessage = item.lastMessage.toLowerCase()
        .indexOf(this.searchValue.toLowerCase()) !== -1;
      return isFindName || isFindMessage;
    },
    handleSearchInput(value) {
      Vue.set(this, 'searchValue', value);
    },
    openMessages(conversation, index) {
      Vue.set(this, 'conversation', conversation);
      Vue.set(this, 'chatMessageOpened', false);

      if (index === 0) {
        this.readMessage();
      }
    },
    addMessage(e) {
      if (e.key === 'Enter' && e.target.value) {
        const value = {
          text: e.target.value,
          fromMe: true,
        };

        Vue.set(this, 'conversation', Object.assign({}, this.conversation, {
          messages: [
            ...this.conversation.messages || [],
            value,
          ],
        }));

        e.target.value = '';
      }
    },
  },
  apollo: {
    emotions: {
      query: EMOTIONS_QUERY,
      subscribeToMore: {
        document: FACE_DETECTING_SUBSCRIPTIOM,
        updateQuery: (previousData, { subscriptionData }) => {
          // this.render = true
          return {
            emotions: [
              ...previousData.emotions,
              subscriptionData.data.faceDetected
            ]
          }
        }
      }
    }
  }
};
</script>

<style src="./Timeline.scss" lang="scss" />
