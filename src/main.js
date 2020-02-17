
import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import BootstrapVue from 'bootstrap-vue';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import Toasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';
import store from './store';

import Vuelidate from 'vuelidate' 
Vue.use(Vuelidate)

import VueUploadMultipleImage from '../src/components/VueUploadMultipleImage';

import { onError } from 'apollo-link-error'

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import VueApollo from 'vue-apollo';

import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

Vue.config.productionTip = false

import SweetAlertIcons from 'vue-sweetalert-icons';
import './registerServiceWorker'
Vue.use(SweetAlertIcons);
Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const apolloClient = new ApolloClient({
  // link: createUploadLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    if (!localStorage.token) {
      localStorage.setItem('token', '');
    }
    operation.setContext({
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
  },
  link,
  onError: (e) => { console.log(e) },
  connectToDevTools: true
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.use(Trend);
Vue.use(Toasted, { duration: 10000 });
Vue.component('apexchart', VueApexCharts);

export const eventBus = new Vue()


Vue.component('VueUploadMultipleImage', VueUploadMultipleImage);

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
}).$mount('#app')