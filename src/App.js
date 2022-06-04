import './App.css';
import {movies} from './data'
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetails from './MovieDetails/MovieDetails';


function App  () {
  const [moviesM, setMoviesM] = useState(movies)
  const getNewMovie=(newM)=>{setMoviesM([...moviesM, {...newM,id:moviesM.length}])}
  const [filterName, setFilterName] = useState("")

  return (
    
    <div className="App"> 
    <h1>Movie App</h1>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/movies" element={<div>
        <MovieList movies={moviesM.filter((el)=>el.Title.toLocaleLowerCase().includes(filterName.trim().toLocaleLowerCase()))}/>
        <Filter setFilterName={setFilterName}/><br/> 
        </div>} />

       <Route path="/AddMovie" element={<AddMovie getNewMovie={getNewMovie} />} />
       <Route path="/movieDetails/:id/:x" element={ <MovieDetails movies={moviesM}/> }/>
    </Routes>
    
     </div>

  );
}

export default App;
