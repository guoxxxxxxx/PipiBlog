import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import "@/assets/css/index.css";
import "ant-design-vue/dist/antd.css";
import 'animate.css';

export const baseUrl = "http://192.168.50.37:8080";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
