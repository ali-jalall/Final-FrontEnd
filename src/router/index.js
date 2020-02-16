import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes
});


// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (!localStorage.getItem('X-auth')) {
//       next ({path: '/login'})
//     } else {
//       let getAdmin = JSON.parse(localStorage.getItem('isAdmin'))
//       if(to.matched.some(record => record.meta.isAdmin)) {
//         if ( getAdmin ) {
//           next({ path: '/app/dashboard' })
//         } else {
//           next({ path: '/login' })
//         }
//       } else {
//         next({ path: '/login' })
//       }
//     }
//   } else {
//     next()
//   }
// })

export default router;
