import React from "react";

const No5 = () => {
  const numbers = [];

  // Loop from 1 to 10 and push the numbers into the array
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>No.5</h1>
      <p>Select * from appointments</p>
    </div>
  );
};

export default No5;
