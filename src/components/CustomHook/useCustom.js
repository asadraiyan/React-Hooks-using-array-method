import { useState } from "react";

const useCustom = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return [count, handleDecrement, handleIncrement];
};

export default useCustom;
