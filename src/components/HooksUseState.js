import React, { useEffect, useState } from 'react'

const HooksUseState = () => {
  const[object, setObject] = useState({
    myName: "Asad", myAge: 27, myDegree: "B.tech", myRole: "Web Dev"
  })
  const updateHandler = () =>{
setObject({...object, myName: "Ravi", myAge: 30, myDegree: "MCA", myRole: "Data Scientist"})
  }
  const[count, setCount] = useState(0)
  useEffect(() =>{
    if(count >= 1){
document.title = `Chats (${count})`
    }
    else{
      document.title = `Chats`
    }
  })
  const incHandler = () =>{
    setCount(count + 1)
  }

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
  let time = new Date().toLocaleTimeString()
  const[currtime ,setCurrtime] = useState(time)
  const Ctime = () =>{
    time = new Date().toLocaleTimeString();
    setCurrtime(time)
  }
  setInterval(Ctime, 1000);
  return (
    <>
    <div>
      {cricData.map((curElm) => <h2>Name: {curElm.Name}, Age:{curElm.Age} & Role: {curElm.Role}</h2>)}
      <br />
      <h2>Name: {object.myName}, Age: {object.myAge}, Degree: {object.myDegree} & Role: {object.myRole}</h2>
      <button onClick={updateHandler}>Update</button>
      <br />
      <h1>{count}</h1>
      <button onClick={incHandler}>Click me</button>
      <br />
      <h1>{currtime}</h1>
    </div>
    </>
  )
}

export default HooksUseState

