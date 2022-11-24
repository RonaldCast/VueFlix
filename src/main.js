import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//style configuration
import ElementPlus from 'element-plus'
import './assets/main.scss'


const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
