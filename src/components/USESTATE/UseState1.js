import React, { useState } from 'react'

function UseState1() {
    const [number, setNumber] = useState(0);

  const Increment = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const Decrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
        <p>Number: {number}</p>
        <button type='button' onClick={Increment}> + </button>
        <button type='button' onClick={Decrement}> - </button>
        
      
    </div>
  )
}

export default UseState1;