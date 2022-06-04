import React from 'react'
import './MovieCard.css'
import Stars from "react-rating-stars-component";
import { Link} from 'react-router-dom';



const MovieCard = ({el}) => {
  
  return (
    
    
    <div class="card">
            <img src={el.PosterURL} width="300" alt=""/>
        
      <div class="descriptions">
                <h3 className='title'> {el.Title} </h3>
                <p className='description'>{el.Description} </p>
                  
                <button> 
                  <Stars count={7} edit={false} value={el.Rating}  />
                </button>

           <Link to={`/movieDetails/${el.id}/@p`}> <button>Trailer...</button></Link>
      </div>
    </div>
  )
}

export default MovieCard