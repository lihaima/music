import { createApp } from 'vue'
import App from './App.vue'

import vantList from './vant'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
vantList(app)
app.mount('#app')
