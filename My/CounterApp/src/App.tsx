import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseHandler() {
    setCount(count + 1);
  }

  function decreaseHandler() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Current Count {count}</p>
      <button onClick={increaseHandler}>Increase by 1</button>
      <button onClick={decreaseHandler}>Decrease by 1</button>
    </>
  );
}

export default App;
