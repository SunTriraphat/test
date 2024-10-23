import React, { useState } from "react";

const SortAndRemoveDuplicates = () => {
  const [arr] = useState([1, 5, 7, 4, 3, 2, 1, 5, 9, 0, 4, 2, 4, 5, 7, 2]);

  const uniqueArray = [...new Set(arr)].sort((a, b) => a - b);

  return (
    <div>
      <h2>Original Array:</h2>
      <p>{JSON.stringify(arr)}</p>

      <h2>Sorted Array (Without Duplicates):</h2>
      <p>{JSON.stringify(uniqueArray)}</p>
    </div>
  );
};

const No2 = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>No.2</h1>
      <SortAndRemoveDuplicates />
    </div>
  );
};

export default No2;
