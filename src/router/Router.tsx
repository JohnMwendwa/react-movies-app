import React from 'react'
import {Routes, Route} from "react-router-dom"
import { BASE_URL } from './config'
const Home = React.lazy(()=> import('../pages/Home'))
const MovieDetailsPage = React.lazy(()=> import('../pages/MovieDetailsPage'))
const MoviesPage = React.lazy(()=> import('../pages/MoviesPage'))
const NotFoundPage = React.lazy(()=> import('../pages/404'))
const Router = () => {
  return (
    <React.Fragment>
        <React.Suspense fallback={null}>
            <Routes>
                <Route path={BASE_URL} element={<Home />} />
                <Route
                    path={`${BASE_URL}movies/:id`}
                    element={<MovieDetailsPage />}
                />
                <Route path={`${BASE_URL}page/:pageId`} element={<MoviesPage />} />

                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </React.Suspense>
    </React.Fragment>
  )
}

export default Router