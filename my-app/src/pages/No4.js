import React from "react";

const No4 = () => {
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>No.4</h1>
      {numbers.join(",")} 
    </div>
  );
};

export default No4;
