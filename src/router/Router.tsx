import React from 'react'
import {Routes, Route} from "react-router-dom"
import routes from './config'
const Router = () => {
  return (
    <React.Fragment>
        <React.Suspense fallback={null}>
            <Routes>
                {
                    routes.map(route=>
                        <Route key={route.component} path={route.path} component={React.lazy(()=>import(`../pages/${route.component}`))}/>
                    )
                }
            </Routes>
        </React.Suspense>
    </React.Fragment>
  )
}

export default Router