import React, { useRef, useState } from "react";

const Userefhook = () => {
  const inputRef = useRef("");
  const [name, setName] = useState("Asad");

  const reset = () => {
    setName("");
    inputRef.current.focus();
  };
  const inputHandler = () => {
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "skyblue";
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset </button>
      <button onClick={inputHandler}>click me </button>
    </div>
  );
};

export default Userefhook;
