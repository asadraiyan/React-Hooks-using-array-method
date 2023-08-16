import React, { memo } from "react";

const ChildCallback = ({ fun }) => {
  console.log("Child component rendered");
  return <div></div>;
};

export default memo(ChildCallback);
