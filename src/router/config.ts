import React from "react"
import { Routes } from "./type"
export const BASE_URL = "/"
const Home = React.lazy(()=> import('../pages/Home'))
const MovieDetailsPage = React.lazy(()=> import('../pages/MovieDetailsPage'))
const MoviesPage = React.lazy(()=> import('../pages/MoviesPage'))
const NotFoundPage = React.lazy(()=> import('../pages/404'))
export const routes:Routes = [
    {
        id: "home",
        path:BASE_URL,
        element:Home
    },
    {
        id: "MovieDetailsPage",
        path:`${BASE_URL}movies/:id`,
        element:MovieDetailsPage
    },
    {
        id: "MoviesPage",
        path:`${BASE_URL}page/:pageId`,
        element:MoviesPage
    },
    {
        id: "404",
        path:"/*",
        element:NotFoundPage
    }
]