import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard/Index'
import Error404Page from '../Error/Error404Page'
import ProtectedRoutes from './ProtectedRoutes'
import OpenRoutes from './OpenRoutes'

const MainRoutes = () => {
  return (
    <div style={{minHeight: '100vh', maxWidth: '100vw'}}>
    <Routes>
      <Route element={<OpenRoutes/>}>
        <Route path='' element={<Authentication />} />
        </Route>
        <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error404Page />}/>

    </Routes>
    </div>
  )
}

export default MainRoutes