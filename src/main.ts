import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';

const app = createApp(App);

declare module '@kitbag/router' {
  interface Register {
    router: typeof router
  }
}

app.use(router)

app.mount('#app');
