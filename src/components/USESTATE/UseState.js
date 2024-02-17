import React, { useState } from 'react'

 function UseState() {
    const [background, setBackground] = useState("yellow");
    const [color, setColor] = useState("black");


    const ChangeColors = () => {
        // Tek satırda yazılmış if-else yerine, daha okunabilir ve anlaşılır bir yapı kullanıldı
        if (color === "black" && background === "yellow") {
          setBackground("green");
          setColor("white");
        } else {
          setBackground("yellow");
          setColor("black");
        }
      };
      
  return (
    <div style={{background,color}}>
        <h1>My favorite color is</h1>
        <button type='button' onClick={ChangeColors} ></button>
        

      
    </div>
  )
}

export default UseState;