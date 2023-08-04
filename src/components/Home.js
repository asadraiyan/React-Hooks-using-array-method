import React, { useReducer } from "react";
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
  const [state, dispatch] = useReducer(reducer, initialState);
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
    </>
  );
};

export default Home;
