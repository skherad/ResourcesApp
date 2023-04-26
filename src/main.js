import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/TheHeader.vue'

const app = createApp(App)

app.component(TheHeader)

app.mount('#app');
