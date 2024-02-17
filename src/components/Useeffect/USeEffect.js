import { useState, useEffect } from "react";
import React from 'react'

function USeEffect() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(()=>{
            setCount((count) => count +1);
        },1000);
    });
  return (
    <div>
        <h4>I have counted {count}</h4>
        
      
    </div>
  )
}

export default USeEffect;