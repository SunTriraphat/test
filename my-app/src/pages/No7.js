import React from "react";

const No6 = () => {
  const numbers = [];

  // Loop from 1 to 10 and push the numbers into the array
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>No.7</h1>
      <p>Select 
      CONCAT(p.firstname, ' ', p.lastname ) as fullname,
      p.cn_number,
      o.order_id,
      op.payment_no,
      o.total_price,
      op.balance,
      op.stage
      from patient as p 
      left join orders as o on p.cn_number = o.cn_number
      left join order_payments op on o.order_id = op.order_id
      where o.status = 'ค้างชำระ'
      </p>
    </div>
  );
};

export default No6;
