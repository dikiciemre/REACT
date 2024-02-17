import React from 'react'
import { PropTypes } from 'prop-types'

function Person(props) {
  return (
    // PropTypes example file
    <div>
        <h4>{props.title}</h4>

      
    </div>
  )
}



Person.propTypes = {
    title : PropTypes.string.isRequired,
}

// Eğer title değişkenine değer atamasaydık varsayılan olarak aşağıdaki değer yazılır
// If we consider assigning a value to the title variable, the following value is written by default
Person.defaultProps = {
    title: "Default Title"
}
export default Person;