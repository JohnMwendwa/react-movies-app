import React from 'react'
import {Routes, Route} from "react-router-dom"
import { routes } from './config'

const Router = () => {
  return (
    <React.Fragment>
        <React.Suspense fallback={null}>
            <Routes>
              {
                routes.map(route=>
                  <Route key={route.id} path={route.path} element={<route.element/>}/>
                )
              }
            </Routes>
        </React.Suspense>
    </React.Fragment>
  )
}

export default Router