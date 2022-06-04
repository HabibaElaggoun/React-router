import './MovieDetails.css'
import { Button } from 'react-bootstrap'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetails =({movies}) => {

    const obj=useParams()
    console.log(movies.find(el=>el.id==Number(obj.id)))   
    return (
      <div>
          <div><Link to="/movies" > <Button className='butt_back'> Back To Movies </Button></Link>
          </div>
       
          <div className='titr'>  
               <p>{movies.find(el=>el.id==obj.id).Title}</p>
          </div>
          <iframe width="750" height="500"
             src={movies.find(el=>el.id==obj.id).Trailer} 
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe> 
        
        
      </div>

    )
}

export default MovieDetails;