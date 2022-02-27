import {createRouter, createWebHashHistory} from 'vue-router'
import Doc from "../components/Doc.vue";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";
import Intro from "../components/introEg.vue";
import Install from "../components/installEg.vue";
import Switch from "../components/switchEg.vue";
import Button from "../components/buttonEg.vue";
import Dialog from "../components/dialogEg.vue";
import Tab from "../components/tabEg.vue";
import Carousel from "../components/carouselEg.vue";
import Skeleton from "../components/skeletonEg.vue";
import GetStart from "../components/get-start.vue"
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {path: "/home", component: Home},
        {path: "/doc", component: Doc,children:[
                {path: "/intro", component: Intro},
                {path: "/install", component: Install},
                {path: "/get-start", component: GetStart},
                {path: "/switch", component: Switch},
                {path: "/button", component: Button},
                {path: "/dialog", component: Dialog},
                {path: "/tab", component: Tab},
                {path: "/carousel", component: Carousel},
                {path: "/skeleton", component: Skeleton},
                {path: "", component: Intro},
            ]},
        {path: '/:pathMatch(.*)*', component: NotFound},
    ]
})