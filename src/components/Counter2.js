import React, { useEffect, useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("counter")) || 0
  );

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    // console.log(count);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const saveLocalCounter = () => {
      localStorage.setItem("counter", JSON.parse(count));
    };
    saveLocalCounter();
    // fetchData();

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [count]);
  console.log(count);

  return (
    <>
      <div>
        <p>Count:{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter2;
