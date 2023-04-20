import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/Portafolio/Introduccion',
      name: 'Introduccion',
      component: () =>  import('./components/Introduccion.vue'),
    },
    {
      path: '/Portafolio/',
      name: 'Portada',
      component: () => import('./components/Portada.vue')
    },
    {
      path: '/Portafolio/Investigaciones',
      name: 'Investigaciones',
      component: () => import('./components/Contenidos/Investigaciones.vue')
    },
    {
    path: '/Portafolio/SumariodeContenidos',
    name: 'SumariodeContenidos',
    component: () => import('./components/Contenidos/SumariodeContenidos.vue')
    },
    {
    path: '/Portafolio/Tareas',
    name: 'Tareas',
    component: () => import('./components/Contenidos/Tareas.vue')
    },
    {
      path: '/Portafolio/Jornalizacion',
      name: 'Jornalizacion',
      component: () => import('./components/Contenidos/Jornalizacion.vue')
    }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;