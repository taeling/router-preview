import { createRouter, createRoute, query } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";
import { sortParam } from "./params";

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  component: HomeView 
})

const settings = createRoute({
  name: 'settings',
  path: '/settings',
  query: 'search=[?search]',
  component: () => import('../views/SettingsView.vue')
})

const profile = createRoute({
  parent: settings,
  name: 'profile',
  path: '/profile',
  component: () => import('../views/SettingsProfileView.vue')
})

const keys = createRoute({
  parent: settings,
  name: 'keys',
  path: '/keys',
  query: query('sort=[?sort]', { sort: sortParam }),
  component: () => import('../views/SettingsKeysView.vue')
})

export const router = createRouter([home, settings, profile, keys])