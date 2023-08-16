import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const fun = useCallback(() => {
    console.log("Have fun");
  }, [count]);
  return (
    <div>
      <h1>useCallback Hook</h1>
      <ChildCallback fun={fun} count={count} />
      <span>{add}</span>
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default UseCallback;
