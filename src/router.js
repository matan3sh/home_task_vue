import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home';
import Details from '@/pages/Details';

const routes = [
  { path: '/', name: 'homePage', component: Home },
  { path: '/:id', name: 'detailsPage', component: Details },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
