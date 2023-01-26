import React, { useState } from 'react'

const Contact = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phnum, setPhnum] = useState("")
    const[hideData, setHideData] = useState(false)
    const inputName = (e) =>{
        setName(e.target.value)
    }
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPhnum = (e) =>{
        setPhnum(e.target.value)
    }
    const submit = () =>{
        if(name === "" || email === "" || phnum === "") {
            alert("Please fill all the input details")
        } else {
            setHideData(true)
        }
    }
    const reset = () =>{
      setName("")
      setEmail("")
      setPhnum("")
      setHideData("")
    }

  return (
    <>
    <div className='container'>
      <h1 >Contact Us</h1>
      <div className='box'>
      <input className='name' onChange={inputName} value={name} type="text" placeholder='Enter your name' autoComplete='off' />
      <input className='email' onChange={inputEmail} value={email} type="text" placeholder='Enter your email' autoComplete='off' />
      <input className='phnum' onChange={inputPhnum} value={phnum} type="text" placeholder='Enter your phone number' autoComplete='off' />
      <div className="btn">
      <button onClick={submit}>Submit</button>
      <button onClick={reset}>Reset</button>
      </div>
      { hideData ? (
        <h3>Name: {name} <br /> Email: {email} <br /> Phone no: {phnum}</h3>
      ) : <></> }
      </div>
      
    </div>
    </>
  )
}

export default Contact
