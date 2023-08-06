import React, { useState } from "react";

const ChildComp = ({ updatedText }) => {
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const [total, setTotal] = useState();

  const handleAdd = () => {
    setTotal(+inputOne + +inputTwo);
  };

  return (
    <>
      <div
        style={{ margin: "20px", border: "2px solid brown", padding: "10px" }}
      >
        <p>Child</p>
        <button onClick={updatedText}>Change Parent value</button>
      </div>
      <h2>Adding two numbers</h2>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          width: "125px",
          gap: "10px",
        }}
      >
        <input
          type="number"
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne}
          placeholder="number"
        />
        <input
          type="number"
          onChange={(e) => setInputTwo(e.target.value)}
          value={inputTwo}
          placeholder="number"
        />
        <button onClick={handleAdd}>Add two numbers</button>
        <p>Total: {total}</p>
      </div>
    </>
  );
};

export default ChildComp;
