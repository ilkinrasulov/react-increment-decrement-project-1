import React, { useState } from "react";

function MinPlus() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={plusCount}>+</button>
      <h1>{count}</h1>
      <button onClick={minusCount}>-</button>
    </div>
  );
}

export default MinPlus;
