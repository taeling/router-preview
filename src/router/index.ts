import { createRoutes, createRouter, query } from '@kitbag/router';
import HomeView from '../views/HomeView.vue';
import { sortParam } from './params';

const routes = createRoutes([
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'settings',
    path: '/settings',
    query: 'search=[?search]',
    component: () => import('../views/SettingsView.vue'),
    children: createRoutes([
      {
        name: 'profile',
        path: '/profile',
        component: () => import('../views/SettingsProfileView.vue'),
      },
      {
        name: 'keys',
        path: '/keys',
        query: query('sort=[?sort]', { sort: sortParam }),
        component: () => import('../views/SettingsKeysView.vue'),
      },
    ])
  },
]);

export const router = createRouter(routes);
