import React, { useMemo, useState } from "react";

const Usememohook = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(() => {
    console.log("multiplied run");
    return add * 5;
  }, [add]);

  return (
    <div>
      <h1>useMemo Hook</h1>
      <span>{multiply}</span>
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      <span>{minus}</span>
    </div>
  );
};

export default Usememohook;
