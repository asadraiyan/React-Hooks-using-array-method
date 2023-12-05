import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("counter")) || 0
  );

  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const bgHandler = () => {
    document.body.style.background = "red";
  };
  useEffect(() => {
    const saveLocalCounter = () => {
      localStorage.setItem("counter", JSON.stringify(count));
    };
    saveLocalCounter();
    // console.log(saveLocalCounter);
  }, [count]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleSubmit = () => {
    if (name === "") {
      alert("Please enter your name first");
    }
    setFullName(name);
    setName("");
  };

  return (
    <>
      <div>
        <h1>counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add </button>
        <button onClick={bgHandler}>click me </button>
      </div>
      <div>
        <h2>Hello {fullName}</h2>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={handleChange}
          value={name}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Counter;
