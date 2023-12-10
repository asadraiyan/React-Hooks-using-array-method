import React, { useState, useEffect } from "react";
import ChildComp from "./ChildComp";

const CodingChallenge = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [inputFiled, setInputField] = useState("");
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2>No. of clicks untill timer expires</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // height: "100px",
            width: "300px",
            backgroundColor: "#f3a469",
            justifyContent: "space-around",
          }}
        >
          <h3>{count}</h3>
          <h3>Time Left: {timer} seconds</h3>
          {timer !== 0 ? (
            <button onClick={() => setCount(count + 1)}>Click</button>
          ) : null}
          {timer === 0 ? <h3>No. of clicks attempt: {count}</h3> : ""}
        </div>
      </div>
    </>
  );
};

export default CodingChallenge;
