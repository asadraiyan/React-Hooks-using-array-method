import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mount");
  }, []);
  useEffect(() => {
    console.log("component update");
    return () => {
      console.log("component will unmount");
    };
  }, [count]);
  return (
    <div>
      <h1>Hello useEffect hook</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffecthook;
