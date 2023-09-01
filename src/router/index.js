import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/tasksLists.vue"),
        },
        {
            path: "/task/:id",
            name: "task",
            component: () => import("../views/taskAbout.vue"),
        },
    ],
});

export default router;
