import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ContentView from '../views/ContentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/content/:name',
      name: 'content',
      component: ContentView,
      props: route => ({ componentName: route.params.name }),
      // children: [
      //   {
      //     path: '/csharp',
      //     name: 'csharp',
      //     component: () => import('../components/content/CSharpComponent.vue')
      //   },
      //   {
      //     path: 'python',
      //     name: 'python',
      //     component: () => import('../components/content/PythonComponent.vue')
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
