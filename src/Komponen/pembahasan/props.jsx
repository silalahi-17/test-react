import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Contoh State & Props</h1>
      <Counter />
    </div>
  );
};

export default App;
