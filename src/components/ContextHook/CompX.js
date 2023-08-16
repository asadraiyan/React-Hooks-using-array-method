import React, { useContext } from "react";
import { context } from "./UseContext";

const CompX = () => {
  const name = useContext(context).name;
  return (
    <div>
      <h3>{`Hello my name is ${name}`}</h3>
    </div>
  );
};

export default CompX;
