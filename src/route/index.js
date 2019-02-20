import Vue from 'vue'
import VueRouter from 'vue-router'
import bIndex from '../components/Index'
import bToolbar from '../components/Toolbar'
import bLeftDrawer from '../components/LeftDrawer'
// import bRightDrawer from '../components/bRightDrawer'
import bIndexContent from '../components/IndexContent'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/',
      component: bIndex,
      children: [
        { path: '/', components: { toolbar: bToolbar, leftDrawer: bLeftDrawer, rightDrawer: null, content: bIndexContent } }
      ]
    }
  ]
})

export default router
