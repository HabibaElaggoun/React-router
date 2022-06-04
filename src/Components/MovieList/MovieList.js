import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'
import { Link } from 'react-router-dom'


const MovieList = ({movies}) => {
  return (
    <div className='movielist'>
<div className='but_ton'>
       <Link to="/"><button className="back"> Back To Home</button></Link>
       <Link to="/AddMovie"><button className="newMovie">Add New Movie</button></Link>
       </div>
  <div className='list'>
    {movies.map((el)=> <MovieCard el={el} key={el.id}/>)}
  </div>
  </div>
  )
}

export default MovieList