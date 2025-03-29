import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State count

  return (
    <div className="p-4 border rounded-lg shadow-md w-60 text-center">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
};

export default Counter;
