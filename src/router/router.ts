import {createRouter, createWebHashHistory} from 'vue-router'
import Doc from "../components/Doc.vue";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {path: "/home", component: Home},
        {path: "/doc", component: Doc},
        {path: '/:pathMatch(.*)*', component: NotFound},
    ]
})