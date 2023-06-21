import React, { useState } from 'react'
import { Users } from './Userdata'

const arr = ["Play cricket", "Play football", "Play hockey", "Play basketball", "Play badminton",]
const Table = () => {
    const [search, setSearch] = useState("")
    const [arrCopy, setarrCopy] = useState(arr)
    const handleDelete = (id) => {
        let filteredArr = arrCopy.filter((elem, index) => {
            return index !== id;
        })
        setarrCopy(filteredArr)
    }

    console.log("search =", search)
    return (
        <>
            <table className='user'>
                <input type="search" placeholder='search...' className='search' onChange={(e) => setSearch(e.target.value)} />
                <tr className='user-list'>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Gender</th>
                </tr>
                {Users.filter((item => {
                    return (item.name.toLowerCase().includes(search) ||
                        item.gender.toLowerCase().includes(search) ||
                        item.role.toLowerCase().includes(search) ||
                        String(item.age).toLowerCase().includes(search))
                })).map((item) => (
                    <tr className='user-data' key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.role}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))

                }
            </table>
            <div className="container" style={{ marginTop: "20px" }}>
                <ul>
                    {arrCopy.map((elem, id) => {
                        return <li>
                            {elem}
                            <button onClick={() => handleDelete(id)}>delete</button>
                        </li>

                    })}

                </ul>
            </div>
        </>
    )
}

export default Table
