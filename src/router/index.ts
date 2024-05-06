import { createRoutes, createRouter } from '@kitbag/router';
import HomeView from '../views/HomeView.vue';

const routes = createRoutes([
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('../views/SettingsView.vue'),
  },
]);

export const router = createRouter(routes);
