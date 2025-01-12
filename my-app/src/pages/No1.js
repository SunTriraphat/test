import React from "react";

const ChristmasTree = () => {
  const rows = 10; 
  const tree = [];

  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);  
    const leafs = "*".repeat(i * 2 - 1);  
    tree.push(
      <div key={i} >
        {spaces + leafs}
      </div>
    );
  }

  return <div>{tree}</div>;
};

const No1 = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
       <h1>No.1</h1>
      <h1>Christmas Tree</h1>
      <ChristmasTree />
    </div>
  );
};

export default No1;
