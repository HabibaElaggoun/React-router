import {Button } from 'react-bootstrap'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './add.css'
import { Link, useNavigate } from 'react-router-dom';



const AddMovie = ({getNewMovie}) => {
    const navigate=useNavigate()

    const [newMovie, setNewMovie] = useState({
          Title: "",
          Description:"",
          Rating: 0,
          PosterURL:"",
         })
    
    const handleClick=()=>{

          if(newMovie.Title){
             getNewMovie(newMovie);
             setNewMovie({
              Title: "",
              Description:"",
              Rating: 0,
              PosterURL:"",  
               });
               navigate("/movies")
            
              }
          else {alert("Title is required")}
            }
    const handleChange=(e)=>{
         // console.log(e.target.name, e.target.value)
       setNewMovie({...newMovie,[e.target.name]:e.target.value})
        }
    


  return (    
      <div className='add'>

          <p>Add New Movie :</p>
          <div className='newmv'>
              <input type="text" name="Title" placeholder="Title.." onChange={handleChange}/> 
              <br/>
              <input type="text" name="Description" placeholder="Desc.." onChange={handleChange}/>
              <br/>
              <input type="url" name="PosterURL" placeholder="URL.." onChange={handleChange}/>
              <br/> 
              <input type="number" name="Rating" placeholder="Rate.." onChange={handleChange}/>
          </div>
  
          <Link to="/movies" > <Button  variant="secondary"> Cancel </Button></Link>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
   </div>
      
  )
}

export default AddMovie
  
