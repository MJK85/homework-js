import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import index from './store'

createApp(App).use(router).use(index).mount('#app')
