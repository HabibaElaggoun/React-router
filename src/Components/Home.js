import './Home.css';
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Welcome to our Movie App</h1>
    <br/>
    <Link to="movies"><button className='butt'>Movies Anywhere</button></Link>
    </div>
  )
}

export default Home