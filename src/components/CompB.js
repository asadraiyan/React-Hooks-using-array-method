import React, { useContext } from 'react'
import { FirstName } from './CompA'
import CompC from './CompC'

const CompB = () => {
    const name = useContext(FirstName)
    return (
        <div>
            <h1>Msy favourite person is {name}</h1>
            <CompC />
        </div>
    )
}

export default CompB
