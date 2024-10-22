import React from 'react';

const No3 = () => {
  const maxRows = 20; // จำนวนแถวทั้งหมด
  const blocks = [20, 19, 18, 17, 16]; // จำนวนดอกจันในแต่ละบล็อกเริ่มต้น
  const blockSpacing = 4; // ช่องว่างระหว่างบล็อก

  const renderPattern = () => {
    let output = [];

    // ลูปแต่ละแถว
    for (let row = 0; row < maxRows; row++) {
      let line = ''; // สร้างบรรทัดว่าง

      // ลูปแต่ละบล็อกในแถวเดียวกัน
      for (let block = 0; block < blocks.length; block++) {
        let starsCount = blocks[block] - row; // ลดจำนวนดอกจันในแต่ละแถวของบล็อก
        if (starsCount > 0) {
          line += '*'.repeat(starsCount); // สร้างดอกจันตามจำนวนที่คำนวณได้
        }

        // เพิ่มช่องว่างระหว่างบล็อก
        line += ' '.repeat(blockSpacing);
      }

      // บันทึกบรรทัดที่สร้างเสร็จแล้ว
      output.push(<pre key={row}>{line}</pre>);
    }

    return output;
  };

  return <div>{renderPattern()}</div>;
};

export default No3;
