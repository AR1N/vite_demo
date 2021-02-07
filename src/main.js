import { createApp } from 'vue'
import App from './App'
import './index.css'
import router from './router/index'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).mount('#app')