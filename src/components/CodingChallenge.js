import React, { useState } from "react";
import ChildComp from "./ChildComp";

const CodingChallenge = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [inputFiled, setInputField] = useState("");
  const [item, setItem] = useState([]);
  const [update, setUpdate] = useState(
    "I need to be updated from my below child"
  );

  const handleButton = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const displayInput = (event) => {
    if (input === "") {
      return;
    }
    if (event.key === "Enter") {
      setItem((oldItem) => {
        return [...oldItem, input];
      });
      setInput("");
    }
  };

  const updatedText = () => {
    setUpdate("updated from the child component");
  };

  return (
    <>
      <div className="container" style={{ margin: "20px" }}>
        <button onClick={handleButton}>{show ? "Hide" : "Show"}</button>
        {show ? <p>Toggle challenge</p> : ""}
      </div>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={displayInput}
          value={input}
          placeholder="Enter your message"
        />
        <ol>
          {item.map((curValue, index) => {
            return <li key={index}>{curValue}</li>;
          })}
        </ol>
      </div>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Enter your text"
          onChange={(e) => setInputField(e.target.value)}
          value={inputFiled}
        />
        <button disabled={inputFiled ? false : true}>Submit</button>
      </div>
      <div
        style={{ margin: "20px", border: "2px solid black", padding: "10px" }}
      >
        <p>Parent</p>
        <p>{update}</p>
      </div>
      <ChildComp updatedText={updatedText} />
    </>
  );
};

export default CodingChallenge;
