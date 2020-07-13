import React, { useState } from "react";

const fname = "harrison";
const lname = "seaborn";
//change
const Greet = (props) => {
  // takes data => returns elements
  const [count, setCount] = useState(0); // useState returns an array

  const id = "firstReactApp";
  return (
    <div id={id} className="greet">
      <div>
        Hello World! My name is {fname} {lname}
      </div>
      <div>The count is {count}</div>
      <button onClick={(evt) => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default Greet;
