import React, { memo } from "react";

export const CountComponent = memo(({ count, increment }) => {
  console.log("CountComponent component firing - ");
  return (
    <div>
      <h2>Count Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
});
