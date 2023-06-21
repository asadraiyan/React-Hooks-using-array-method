import React, { useMemo, useState } from 'react'

const Usememohook = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)
    const multicount = useMemo(() => {
        console.log("count")
        return count * 5
    }, [count])

    return (
        <div>
            <h1>useMemo Hook</h1>
            <h1>Count : {count}</h1>
            <h1>Item : {item}</h1>
            <h1>{multicount}</h1>
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <button onClick={() => setItem(item * 5)}>Update item</button>
        </div>
    )
}

export default Usememohook
