import React, { useState, useEffect } from 'react'

const QuoteGen = () => {

  const [quote, setQuote] = useState("")

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length)
        console.log(randomNum)
        setQuote(data[randomNum])
      })

  }
  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className='container' style={{ marginLeft: "10px" }}>
      <h2>
        <span>“</span>
        {quote.text}
        <span>”</span>
      </h2>
      <span>{quote.author}</span>
      <button onClick={getQuotes} style={{ marginLeft: "10px" }}>Next</button>
    </div>
  )
}

export default QuoteGen
