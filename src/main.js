import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./Vuex/store"
import "./components/Notification/Toast.css"
import NotificationList from "./components/Notification/NotificationList.vue"

const app = createApp(App)
app.use(store)
app.component('notification-list', NotificationList)
app.mount('#app')
