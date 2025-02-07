import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('../../c-mind/src/components/views/main.vue'),
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../../c-mind/src/components/views/search.vue'),
        }
    ]
})