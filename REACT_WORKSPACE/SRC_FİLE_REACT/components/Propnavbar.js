import React from 'react'
import PropTypes from 'prop-types';

function Propnavbar(props) {
  return (
    <div>
        <h3>{props.title}</h3>
    </div>
  )
}
Propnavbar.propTypes = {
  title : PropTypes.string.isRequired
}

Propnavbar.defaultProps = {
    title : "Default olarak title"

}

export default Propnavbar;