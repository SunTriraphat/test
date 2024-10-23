import React from "react";

const No6 = () => {
  const numbers = [];

  // Loop from 1 to 10 and push the numbers into the array
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>No.6</h1>
      <p>Select 
      CONCAT(a.date, '-',a.start_time) as date_time
      o.order_id,
      op.order_payment_id,
      CONCAT(p.firstname, ' ', p.lastname ) as fullname,
      p.cn_number,
      TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) AS age,
      o.status,
      o.total_price,
      op.payment_channel_id,
      op.price
      from appointments as a 
      left join patient as p on p.cn_number = a.cn_number
      left join orders as o on p.cn_number = o.cn_number
      left join order_payments op on o.order_id = op.order_id
      </p>
    </div>
  );
};

export default No6;
