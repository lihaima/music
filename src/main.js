import { createApp } from 'vue'
import App from './App.vue'

import { Lazyload } from 'vant';
import vantList from './vant'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
vantList(app)
app.use(Lazyload, {
    lazyComponent: true,
  });
app.mount('#app')
