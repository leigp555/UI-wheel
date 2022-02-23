import {createRouter, createWebHashHistory} from 'vue-router'
import Doc from "../components/Doc.vue";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";
import Intro from "../components/intro.vue";
import Install from "../components/install.vue";
import Switch from "../components/switch.vue";
import Button from "../components/button.vue";
import Dialog from "../components/dialog.vue";
import Tab from "../components/Tab.vue";
import Carousel from "../components/carousel.vue";
import Skeleton from "../components/skeleton.vue";

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {path: "/home", component: Home},
        {path: "/doc", component: Doc,children:[
                {path: "/", component: Intro},
                {path: "/intro", component: Intro},
                {path: "/install", component: Install},
                {path: "/switch", component: Switch},
                {path: "/button", component: Button},
                {path: "/dialog", component: Dialog},
                {path: "/tab", component: Tab},
                {path: "/carousel", component: Carousel},
                {path: "/skeleton", component: Skeleton},
            ]},
        {path: '/:pathMatch(.*)*', component: NotFound},
    ]
})