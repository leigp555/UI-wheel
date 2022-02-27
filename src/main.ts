import { createApp } from 'vue'
import "../src/icon/icon"
import App from './App.vue'
import {router} from "./router/router";
import "./index.scss"
import "github-markdown-css/github-markdown.css"

createApp(App)
    .use(router)
    .mount('#app')
