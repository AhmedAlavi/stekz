import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/views/Login.vue';
import Main from '@/views/Main.vue'
import store from '@/store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home-view",
    component: Main,
    meta: { requiresAuth: true },
  },
  {
      path: "/login",
      name: "Login-view",
      component: Login,
      meta: { guest: true },
  },
  
  
];
  
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

console.log('isAutheneeeee',store.getters['auth/isAuthenticated'])


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters['auth/isAuthenticated']) {
      console.log('authenticated')
      next()
      return
    }
    console.log('isAutheneeeee',store)
    next('/login')
  } else {
    next()
  }
})


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters['auth/isAuthenticated']) {
      next('/')
      return
    }
    next()
  } else {
    next()
  }
})


  export default router;