import React from 'react'
import './Searchresult.css'

const Searchresult = (props) => {
    const img =`https://source.unsplash.com/random/600x400/?${props.name}`;
  return (
    <div>
      <img src ={img} alt="search" />
    </div>
  )
}

export default Searchresult
