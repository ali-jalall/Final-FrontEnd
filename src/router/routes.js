import Layout from '../components/Layout/Layout'
import Login from '@/pages/Login/Login';


import CSVDownload from '../components/CSVDownload';

import Horizontal from '../components/HorizontalStepper/HorizontalStepper';

import ProbabilitiesTable from '@/pages/ProbabilitiesTable/ProbabilitiesTable'

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import Charts from '@/pages/Charts/Charts';

import UserPage from '@/pages/UserPage';

import EmailForm from '@/pages/ResetPassword/EmailForm'

import PasswordRecovery from '@/pages/ResetPassword/PasswordRecovery'


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
    // meta: {
    //   requiresAuth: true,
    //   isAdmin: true
    // },
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
      {
        path: 'probabilities',
        name: 'ProbabilitiesTable',
        component: ProbabilitiesTable
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
    ],
  },
]

export default routes;
