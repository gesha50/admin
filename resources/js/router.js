
import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

import ExampleComponent from "./components/ExampleComponent";

const routes = [
    {
        path: '/',
        component: 'ExampleComponent'
    }
]

export default new vueRouter({
    mode: "history",
    routes    // тоже самое что и routes: routes
})

