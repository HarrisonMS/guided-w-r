import React from "react";

function Counter(props) {
  return (
    <div>
      <div>The count is {props.currentCount}</div>
      <button onClick={() => props.countChanger(props.currentCount + 1)}>
        increase count
      </button>
    </div>
  );
}
export default Counter;
