import React, { useState } from 'react'

const Assignment = () => {
    const [text, setText] = useState("My Arg")
    const [newtext, setNewText] = useState("new arg")
    const [selected, setSelected] = useState()
    const [args, setArgs] = useState([])

    const handleArg = () => {
        setArgs([...args, []])
    }


    return (
        <>
            <div className="container">
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                <select name="" id="value-select">
                    <option value="False">False</option>
                    <option value="True">True</option>
                </select>
            </div>
            {
                args.map((elem, i) => {
                    return (
                        <div className="container">
                            <input type="text" id="text" value={newtext} onChange={(e) => setNewText(e.target.value)} />
                            <select name="" id="value-select">
                                <option value="False">False</option>
                                <option value="True">True</option>
                            </select>
                        </div>
                    )
                })
            }
            <button onClick={handleArg}>+ add arg</button>

            <div className="box">
                <select name="" id="value-select" >
                    <option value="select">select...</option>
                    <option value="constant">constant</option>
                    <option value="arguement">arguement</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>
                <button>+</button>
            </div>
            <h3>result : </h3>
        </>
    )
}

export default Assignment

