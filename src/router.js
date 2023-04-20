import { createRouter, createWebHistory } from 'vue-router';

const routes = [
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
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;