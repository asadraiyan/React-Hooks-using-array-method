import React, { useState, useEffect } from "react";
import ChildComp from "./ChildComp";

const CodingChallenge = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [inputFiled, setInputField] = useState("");
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const [inputBar, setInputBar] = useState(10);
  const [showInputData, setShowInputData] = useState(false);
  const [inputFormData, setInputFormData] = useState({
    userName: "",
    fullName: "",
    age: "",
  });
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

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputFormData({
      ...inputFormData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      inputFormData.userName === "" ||
      inputFormData.fullName === "" ||
      inputFormData.age === ""
    ) {
      alert("please fill the required input fields");
      return;
    }
    setShowInputData(!showInputData);
    // setInputFormData("");
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
            height: "200px",
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
      <div>
        <h2>Progress Bar</h2>
        <div className="outer-bar">
          {inputBar >= 0 && inputBar <= 100 ? (
            <div className="inner-bar" style={{ width: `${inputBar}%` }}>
              <h3>{inputBar}%</h3>
            </div>
          ) : (
            alert("please enter the value less than 100 or above than 0")
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <h2>Input Percentage</h2>
          <input
            type="number"
            style={{
              display: "flex",
              alignItems: "center",
              width: "75px",
              height: "30px",
              borderRadius: "15px",
              padding: "5px",
            }}
            onChange={(e) => setInputBar(e.target.value)}
            value={inputBar}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            // alignItems: "center",
          }}
        >
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={inputFormData.userName || ""}
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            // alignItems: "center",
          }}
        >
          <label>Fullname:</label>
          <input
            type="text"
            name="fullName"
            value={inputFormData.fullName || ""}
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            // alignItems: "center",
          }}
        >
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={inputFormData.age || ""}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          Submit
        </button>
        {showInputData && (
          <div>
            <h2>Request sent to DB with below request data</h2>
            <ul>
              <li>Username: {inputFormData.userName.toUpperCase()}</li>
              <li>Fullname: {inputFormData.fullName.toUpperCase()}</li>
              <li>Age: {inputFormData.age}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CodingChallenge;
