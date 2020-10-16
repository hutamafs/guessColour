import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import GameOver from '../views/GameOver.vue'
import Win from '../views/Win.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/game-over',
    name: 'GameOver',
    component: GameOver
  },
  {
    path: '/win',
    name: 'Win',
    component: Win
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.playerone) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.playerone) next({ name: 'Home' })
  else next()
})

export default router
