import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard/Index'
import Error404Page from '../Error/Error404Page'

const MainRoutes = () => {
  return (
    <div style={{minHeight: '100vh', maxWidth: '100vw'}}>
    <Routes>
        <Route path='' element={<Authentication />} />
        <Route path='./dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error404Page />}/>
    </Routes>
    </div>
  )
}

export default MainRoutes