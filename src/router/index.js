import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [{
        path: '/',
        name: 'Home',
        component: import ('/@views/home'),
    },
    {
        path: '/user',
        name: 'User',
        component: () =>
            import ('/@views/user'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;