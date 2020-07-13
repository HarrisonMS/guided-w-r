import React, { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import RockPaperScissors from "./components/RockPaperScissors";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Greet />
      <RockPaperScissors />
      <Counter countChanger={setCount} currentCount={count} />
    </div>
  );
}

export default App;
