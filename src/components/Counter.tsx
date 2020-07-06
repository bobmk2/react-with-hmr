import React, { useState, useCallback } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickPlus = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleClickMinus = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <button onClick={handleClickPlus}>+</button>
      <span
        style={{
          display: "inline-block",
          textAlign: "center",
          minWidth: "2rem",
        }}
      >
        {count}
      </span>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};
