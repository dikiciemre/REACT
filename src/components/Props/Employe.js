import React from 'react'

function Employe(props) {
  return (
    // Props Example File
    <div>
      <h4>{props.level}</h4>
      <hr></hr>
      <ul>
        <li>Name: {props.name} </li>
        <li>Surname: {props.surname} </li>
        <li>Salary: {props.salary} </li>
      </ul>
      
    </div>
  )
}

export default Employe;