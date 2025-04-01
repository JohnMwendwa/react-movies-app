import { Router } from "./type"
const BASE_URL = "/";
const routes:Router = [
    {
        path: BASE_URL,
        component: "Home"
    },
    {
        path: `${BASE_URL}movies/:id`,
        component: "MovieDetailsPage"
    },
    {
        path: `${BASE_URL}*`,
        component: "NotFoundPage"
    }
]

export default routes