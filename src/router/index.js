import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/loginPage.vue';
import Home from '../views/homePage.vue';
import Evaluacion from '../views/evaluacionPage.vue';
import AppLayout from '../layouts/AppLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'evaluaciones',
        name: 'Evaluacion',
        component: Evaluacion,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Exportar el router por defecto
export default router;