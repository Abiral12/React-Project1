import React from 'react'
import { getItem } from '../Utils/Config/storageConfig'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const isAuthenticated = getItem("isAuthenticated")
    const userDetails = JSON.parse(getItem("userDetails"))

    if(!isAuthenticated && !userDetails){
        return(
            <Navigate to="/" replace={true} state={{ from: location.pathname}}/>
        )
    } 
    else return children
  
}

export default ProtectedRoutes