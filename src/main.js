import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from 'axios';
import '@/assets/css/style.css';

axios.defaults.baseURL = 'http://159.203.95.1'


createApp(App).use(store).use(router, axios).mount('#app')

