import React from 'react'
import './filter.css' 

const Filter = ({setFilterName, el}) => {
  return (
   
   <div className="form_input">
        <label>Search :   </label>
        <input  onChange={(e)=>setFilterName(e.target.value)} type="text" placeholder="Search by Title..."/>
        
   </div>

  )
}

export default Filter