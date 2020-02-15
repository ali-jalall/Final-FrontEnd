import Layout from '../components/Layout/Layout'
import Login from '@/pages/Login/Login';

import DetecingCamera from '../components/Cameras/DetectingCamera';
// import ErrorPage from '@/pages/Error/Error';
// Core
// import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

import ProbabilitiesTable from '@/pages/ProbabilitiesTable/ProbabilitiesTable'

// Sec Charts
// import WorldPopulation from '../pages/WorldPopulation.vue';

import UserPage from '../pages/UserPage'

// Maps
// import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import Charts from '@/pages/Charts/Charts';

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
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: PasswordRecovery,
  },
  // {
  //   path: '/error',
  //   name: 'Error',
  //   component: ErrorPage,
  // },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
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
        path: 'seccharts',
        name: 'ProbabilitiesTable',
        component: ProbabilitiesTable
      },
      {
        path: 'tables',
        name: 'TablesBasicPage',
        component: TablesBasicPage,
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
