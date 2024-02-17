import React from 'react'

function Props1(props) {
  return (
    <div>
        <ol>
            <li>Name: {props.Name}</li>
            <li>Surname: {props.Surname}</li>
            <li>Age: {props.Age}</li>
        </ol>
      
    </div>
  )
}

export default Props1;
