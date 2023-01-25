import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
    <div className='navlink'>
      <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link> 
    </div>
    </nav>
    </>
  )
}

export default Navbar
