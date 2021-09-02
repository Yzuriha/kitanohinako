import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Gogo from '@/views/7gogo.vue'
import Blog from '@/views/blog.vue'
import Gallery from "@/views/gallery"
import Media from "@/views/media"
import Profile from "@/views/profile"
import Schedule from "@/views/schedule"
import Works from "@/views/works"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/7gogo',
    name: '7gogo',
    component: Gogo
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
