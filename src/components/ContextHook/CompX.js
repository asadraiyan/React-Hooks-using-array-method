import React, { useContext } from "react";
import { context } from "./UseContext";

const CompX = () => {
  const { name, role } = useContext(context);
  return (
    <div>
      <h3>{`Hello my name is ${name} and i am a ${role}`}</h3>
    </div>
  );
};

export default CompX;
