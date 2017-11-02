import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Home from '@/page/home/home';
import Login from '@/page/login/login';
import Role from '@/page/role/role';
import User from '@/page/user/user';
import NotFound from '@/page/404/404';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/404',
    name: '404',
    component: NotFound
  }, {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/home/user/:funcId',
        name: 'user',
        component: User
      },
      {
        path: '/home/role/:funcId',
        name: 'role',
        component: Role
      }
    ]
  }]
});
