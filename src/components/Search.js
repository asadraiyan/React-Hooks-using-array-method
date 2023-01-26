import React, { useState } from 'react'
import Searchresult from '../Searchresult'
const Search = () => {
  const[img, setImg] = useState("")
  const text = (e)=>{
    setImg(e.target.value)
  }
  
  return (
    <>
    <div className='searchbar'>
        <input type="text" value={img} onChange ={text} placeholder='search anything' autoComplete='off' />
    </div>
    { img === "" ? null : <Searchresult name = {img}/>}
    </>
  )
}

export default Search
