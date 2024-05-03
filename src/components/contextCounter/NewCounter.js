import React, { useContext } from "react";
import { context } from "./CreateContext";

const NewCounter = () => {
  const { count, setCount } = useContext(context);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default NewCounter;
