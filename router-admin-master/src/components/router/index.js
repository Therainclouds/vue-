import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   routes: [
      { path: '/login', component: Login },
      { path: '/', redirect: '/login' },
      {
         path: '/home',
         component: Home,
         children: [
            { path: '/home', redirect: 'users' },
            { path: 'users', component: Users },
            { path: 'rights', component: Rights },
            { path: 'userinfo/:id', component: UserDetail, props: true }
         ]
      }
   ]
})

// 声明前置守卫导航
router.beforeEach((to, from, next) => {
   // 禁止在导航栏中输入地址，跳转至后台页面
   if (to.path !== '/login') {
      const token = localStorage.getItem('token')
      if (token) return next()
      else return next('/login')
   } else {
      localStorage.removeItem('token')
      next()
   }
})

export default router

