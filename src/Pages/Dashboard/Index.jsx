import React, { useState } from 'react'
import Navbar from '../../Components/Partials/Navbar'
import { getPopularMovies } from './Services'

const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([])

  const getData = async()=>{
    const popularMoviesData = await getPopularMovies()
    setPopularMovies(popularMoviesData.results)
  }
  return (
    <div> 
      <Navbar/>
    </div>
  )
}

export default Dashboard