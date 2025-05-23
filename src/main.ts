import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';

import '@provetcloud/css/lib/provet.min.css';
import '@provetcloud/web-components';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');

// for working on github pages
const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');
if (redirect) {
  router.replace(redirect);
}
