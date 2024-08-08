import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './Routes/MainRoutes'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <MainRoutes />
     </BrowserRouter>
    </>
  )
}

export default App
