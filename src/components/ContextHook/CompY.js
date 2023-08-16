import React, { useContext } from "react";
import { context } from "./UseContext";
const CompY = () => {
  const role = useContext(context).role;
  return (
    <div>
      <h3>{`My current role is ${role}`}</h3>
    </div>
  );
};

export default CompY;
