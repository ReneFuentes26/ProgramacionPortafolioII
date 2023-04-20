import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Introduccion',
      name: 'Introduccion',
      component: () =>  import('./components/Introduccion.vue'),
    },
    {
      path: '/ProgramacionPortafolioII',
      name: 'Portada',
      component: () => import('./components/Portada.vue')
    },
    {
      path: '/Investigaciones',
      name: 'Investigaciones',
      component: () => import('./components/Contenidos/Investigaciones.vue')
    },
    {
    path: '/SumariodeContenidos',
    name: 'SumariodeContenidos',
    component: () => import('./components/Contenidos/SumariodeContenidos.vue')
    },
    {
    path: '/Tareas',
    name: 'Tareas',
    component: () => import('./components/Contenidos/Tareas.vue')
    },
    {
      path: '/Jornalizacion',
      name: 'Jornalizacion',
      component: () => import('./components/Contenidos/Jornalizacion.vue')
    }
],
});

export default router;