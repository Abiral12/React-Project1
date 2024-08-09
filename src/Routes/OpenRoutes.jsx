import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getItem } from '../Utils/Config/storageConfig'

const OpenRoutes = () => {
    const isAuthenticated = getItem("isAuthenticated")
    const userDetails = JSON.parse(getItem("userDetails"))
    if(!isAuthenticated && !userDetails){
        return <Outlet />
    }
    else return <Navigate to="/dashboard" replace={true} />
    
  
}

export default OpenRoutes