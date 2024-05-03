import React, { createContext, useState } from "react";
import NewCounter from "./NewCounter";

export const context = createContext();

const CreateContext = () => {
  const [count, setCount] = useState(0);
  return (
    <context.Provider value={{ count, setCount }}>
      <NewCounter />
    </context.Provider>
  );
};

export default CreateContext;
