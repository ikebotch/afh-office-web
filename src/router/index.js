import {createRouter, createWebHistory} from 'vue-router'
import OfficeFeed from '../components/OfficeFeed.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: OfficeFeed
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
