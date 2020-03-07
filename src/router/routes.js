import Layout from '../components/Layout/Layout'
import Login from '@/pages/Login/Login';

import DetecingCamera from '../components/Cameras/DetectingCamera';
// import ErrorPage from '@/pages/Error/Error';
// Core
// import TypographyPage from '@/pages/Typography/Typography';

import CSVDownload from '../components/CSVDownload';

import Horizontal from '../components/HorizontalStepper/HorizontalStepper';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

import ProbabilitiesTable from '@/pages/ProbabilitiesTable/ProbabilitiesTable'

// Sec Charts
// import WorldPopulation from '../pages/WorldPopulation.vue';


// Maps
// import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import Charts from '@/pages/Charts/Charts';

import UserPage from '../pages/UserPage';

// Ui
// import IconsPage from '@/pages/Icons/Icons';
// import NotificationsPage from '@/pages/Notifications/Notifications';

import EmailForm from '@/pages/ResetPassword/EmailForm'
import PasswordRecovery from '@/pages/ResetPassword/PasswordRecovery'

// import LoginCamera from '../components/Cameras/LoginCamera'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/reset',
    name: 'EmailForm',
    component: EmailForm,
    meta: {
      guest: true
    }
  },
  {
    path: '/recovery/:token',
    name: 'PasswordRecovery',
    component: PasswordRecovery,
    meta: {
      guest: true
    }
  },
  {
    path: '/index',
    name: 'UserPage',
    component: UserPage,
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'AnalyticsPage',
        component: AnalyticsPage,
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts,
      },
      // {
      //   path: 'typography',
      //   name: 'TypographyPage',
      //   component: TypographyPage,
      // },
      // {
      //   path: 'components/icons',
      //   name: 'IconsPage',
      //   component: IconsPage,
      // },
      {
        path: 'probabilities',
        name: 'ProbabilitiesTable',
        component: ProbabilitiesTable
      },
      {
        path: 'tables',
        name: 'TablesBasicPage',
        component: TablesBasicPage,
      },
      {
        path: 'adduser',
        name: 'Horizontal',
        component: Horizontal
      },
      {
        path: 'alldata',
        name: 'CSVDownload',
        component: CSVDownload
      },
      // {
      //   path: 'components/maps',
      //   name: 'GoogleMapPage',
      //   component: GoogleMapPage,
      // },
    ],
  },
]

export default routes;
