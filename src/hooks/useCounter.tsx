import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(Math.max(counter - 1, 1));
  };
  return {
    counter,

    //Methods
    increment,
    decrement,
  };
};
