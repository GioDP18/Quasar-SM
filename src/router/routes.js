
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/add-student',
        name: 'add',
        component: () => import('pages/AddStudent.vue')
      },
      {
        path: '/student-profile/:id',
        name: 'profile',
        component: () => import('pages/Profile.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
