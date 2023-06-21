import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("counter")) || 0)
    const bgHandler = () => {
        document.body.style.background = "red"
    }
    useEffect(() => {
        const saveLocalCounter = () => {
            localStorage.setItem("counter", JSON.stringify(count))
        }
        saveLocalCounter()
        console.log(saveLocalCounter)
    }, [count])


    return (
        <div>
            <h1>counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add </button>
            <button onClick={bgHandler}>click me </button>
        </div>
    )
}

export default Counter
