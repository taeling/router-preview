import { createRouter, createRoute, query } from "@kitbag/router";
import HomeView from "../views/HomeView.vue";
import { sortParam } from "./params";
import { defineAsyncComponent } from "vue";

const home = createRoute({ 
  name: 'home', 
  path: '/', 
  component: HomeView 
})

const settings = createRoute({
  name: 'settings',
  path: '/settings',
  query: 'search=[?search]',
  component: defineAsyncComponent(() => import('../views/SettingsView.vue'))
})

const profile = createRoute({
  parent: settings,
  name: 'profile',
  path: '/profile',
  component: defineAsyncComponent(() => import('../views/SettingsProfileView.vue'))
})

const keys = createRoute({
  parent: settings,
  name: 'keys',
  path: '/keys',
  query: query('sort=[?sort]', { sort: sortParam }),
  component: defineAsyncComponent(() => import('../views/SettingsKeysView.vue'))
})

export const router = createRouter([home, settings, profile, keys], {
  base: '/p'
})