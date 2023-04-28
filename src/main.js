import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/TheHeader.vue'
import BaseCard from './components/UI/BaseCard.vue'
const app = createApp(App)

app.component(TheHeader)
app.component('base-card', BaseCard)

app.mount('#app');
