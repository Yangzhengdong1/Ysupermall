import Vue from 'vue'
import VueRouter from 'vue-router'


//路由懒加载
const Home = () => import ('../views/home/Home.vue')
const CateGory = () => import ('../views/category/CateGory.vue')
const Cart = () => import ('../views/cart/Cart.vue')
const Profile = () => import ('../views/profile/profile.vue')
const Detail = () => import ('../views/detail/Detail.vue')

//1.安装插件
Vue.use(VueRouter)


//2.创建router 实例
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


//3.导出router 实例
export default router