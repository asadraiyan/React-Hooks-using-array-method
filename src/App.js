import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import HooksUseState from './components/HooksUseState';
// import './components/Miniproject.css'
// import Miniproject from './components/Miniproject';
// import Practise from './components/Practise';
const App = () => {
const name = "Asad Raiyan"
const role = "Web Dev"
  return (
    <>
    <Router>
      <Navbar/>
    <div>
      <Routes>
        <Route exact path="/" element={<Home myName = {name} myRole={role}/>}/>
        <Route exact path="/Search" element={<Search/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
     {/* <Practise img = "https://picsum.photos/400"/> */}
     {/* <Miniproject/> */}
     {/* <HooksUseState/> */}
     </Routes>
    </div>
    </Router>
    </>
  )
}
export default App

