import React, { useReducer, useState } from "react";
// import { name, role } from "../App";
import { mult, add, sub, div } from "./Calculate";
const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    return state - 1;
  }
};

const Home = ({ name, role }) => {
  const date = new Date();
  const currTime = date.toLocaleTimeString([], { hour12: true });
  const currDate = date.toLocaleDateString();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cTime, setcTime] = useState(currTime);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString([], { hour12: true });
    setcTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <div>
        <h1>
          My name is {name} & my role is {role}
        </h1>
      </div>
      <div className="btn">
        <p className="count">{state}</p>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </div>
      <div>
        <h2>Current Time: {cTime}</h2>
        <h2>Current Date: {currDate}</h2>
      </div>

      <div>
        <ul>
          <li>Sum of Two number is {add(6, 4)}</li>
          <li>Substract of Two number is {sub(10, 7)}</li>
          <li>Divide of Two number is {div(9, 3)}</li>
          <li>Multiply of Two number is {mult(5, 9)}</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
