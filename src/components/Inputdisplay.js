import React, { useState } from 'react'

const Inputdisplay = () => {
    const [input, setInput] = useState("")
    const [item, setItem] = useState([])
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        setItem((oldItem) => {
            return [...oldItem, input]
        })
        setInput("")

    }
    const deleteHandler = (id) => {
        setItem((oldItem) => {
            return oldItem.filter((curelem, index) => {
                return index !== id
            })
        })

    }

    return (
        <>
            <div className="container" style={{ margin: "10px" }}>
                <input type="text" autoComplete='off' value={input} onChange={handleChange} placeholder='Enter your text' />
                <button style={{ marginLeft: "10px" }} onClick={handleClick}>Submit</button>

                <ol style={{ display: "flex", flexDirection: "column" }}>

                    {
                        item.map((curValue, id) => {
                            return (
                                <>
                                    <div className="item-container" style={{ display: "flex", flexDirection: "row" }}>
                                        <li>{curValue}</li>
                                        <button style={{ marginLeft: "10px", marginTop: "5px" }} onClick={() => deleteHandler(id)}>Delete</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default Inputdisplay
