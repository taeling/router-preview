import { createApp } from 'vue';
import './style.css';
import { router } from './router';
import App from './App.vue';

const app = createApp(App);

declare module '@kitbag/router' {
  interface Register {
    router: typeof router
  }
}

app.use(router);

app.mount('#app');
