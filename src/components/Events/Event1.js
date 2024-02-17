import React, { useState } from 'react'


function Event1() {

    const [yourName, setYourName] = useState('');

    const SayMyName = (event) => {
        setYourName(event.target.value);
    };

    return (
        <div>

            <label>Adınız:</label>
            <input type="text" value={yourName} onChange={SayMyName} />
            <p> Your Name is :  {yourName} </p>

        </div>
    )
}

export default Event1;