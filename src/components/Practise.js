import React from 'react'
import { useState } from 'react';

const Practise = (props) => {
    const flname = "Asad Raiyan"
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    const[count, setCount] = useState(0)
    const cricData = [
      {
        id:0, Name: "Virat", Age: 34, Role: "Batsman" 
      },
      {
        id:0, Name: "Shami", Age: 32, Role: "Bowler"
      },
      {
        id:0, Name: "Hardik", Age: 30, Role: "Allrounder"
      },
      {
        id:0, Name: "Aleem Dar", Age: 55, Role: "Umpire"
      },
      {
        id:0, Name: "Dravid",  Age: 44, Role: "Coach"
      }
    ]
    const incNumHandler = () =>{
setCount(count + 1)
    }
    const decNumHandler = () =>{
      setCount(count - 1)
          }
  return (
    <>
        <div>
      <h1>{`My name is ${flname}`}</h1>
      <p style={{fontSize: "25px", backgroundColor: "orange"}}>Today the date is = {currDate} </p>
      <p style={{fontSize: "25px", color: "red"}}>Current time is = {currTime} </p>
      <img src={props.img} alt="randomImages" />
      <h1>{count}</h1>
      <button style={{fontSize: "23px", backgroundColor: "pink", cursor: "pointer"}} onClick ={incNumHandler}>Increment</button>
      <button style={{fontSize: "23px", backgroundColor: "orange", cursor: "pointer", marginLeft: "20px"}} onClick ={decNumHandler}>Decrement</button>
      {cricData.map((curElm) => <h2>Name: {curElm.Name}, Age:{curElm.Age} & Role: {curElm.Role}</h2>)}
      </div>
    </>
  )
}

export default Practise
