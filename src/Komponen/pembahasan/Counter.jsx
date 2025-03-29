import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State count

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
};

export default Counter;
