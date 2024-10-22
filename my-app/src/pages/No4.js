import React from "react";

const No4 = () => {
  const numbers = [];

  // Loop from 1 to 10 and push the numbers into the array
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>No.4</h1>
      {numbers.join(",")} {/* Join the numbers array with a comma separator */}
    </div>
  );
};

export default No4;
