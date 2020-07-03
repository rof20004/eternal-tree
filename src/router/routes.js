
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },

  {
    path: '/books',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Books.vue') },
      { path: ':bookId', component: () => import('pages/Chapters.vue') },
      { path: ':bookId/chapters/:chapterId', component: () => import('pages/ChapterContent.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LandingPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
