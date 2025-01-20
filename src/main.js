import { createApp } from 'vue';
import App from './App.vue';

// Importa Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importa los estilos de Vuetify
import router from './router'; // Importa el router

// Si usas Material Design Icons:
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify(); // Crea la instancia de Vuetify

const app = createApp(App);

app.config.debug = true;

app.use(vuetify); // Usa Vuetify en tu aplicación
app.use(router); // Usa el router en la aplicación

app.mount('#app');
