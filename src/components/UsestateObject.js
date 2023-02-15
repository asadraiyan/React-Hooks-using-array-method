import React from 'react'
import { useState } from 'react'

const UsestateObject = () => {

    const [name, setName] = useState({
        myName: "Asad",
        myAge: "25",
        myRole: "Web Developer"
    })
    const changeObject = () => {
        setName({ ...name, myName: "Harry" })
    }
    return (
        <div>
            <h1>Name : {name.myName}, Age : {name.myAge}, Role : {name.myRole} </h1>
            <button onClick={changeObject}>update</button>
        </div>
    )
}

export default UsestateObject
