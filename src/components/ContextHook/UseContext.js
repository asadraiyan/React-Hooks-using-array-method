import React, { createContext } from "react";
import CompX from "./CompX";
import CompY from "./CompY";

const context = createContext();
const UseContext = () => {
  return (
    <div>
      <context.Provider value={{ name: "Asad Raiyan", role: "Web developer" }}>
        <h1>useContext Hook</h1>
        <CompX />
        <CompY />
      </context.Provider>
    </div>
  );
};

export default UseContext;
export { context };
