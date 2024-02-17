import React, { useState } from 'react';

export default function UseState2() {
  const [fontSize, setFontSize] = useState("12");

  const changeSize = () => {
    // Eğer fontSize 30 ise fontSize'u 12 yap, değilse fontSize'u 30 yap
    setFontSize(fontSize === "30" ? "12" : "30");
  };

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>Example for fontsize </p>
      <button type='button' onClick={changeSize}>
        Make it bigger
      </button>
    </div>
  );
}
