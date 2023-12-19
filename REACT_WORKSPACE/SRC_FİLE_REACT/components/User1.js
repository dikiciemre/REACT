import React, { Component } from 'react'

class User1 extends Component {
  render() {
    return (
      <div>
        <ul>
            <li> İsim: {this.props.name} </li>
            <li> soyisim: {this.props.surname} </li>
            <li> yaş: {this.props.age} </li>
        </ul>
        
      </div>
    )
  }
}
export default User1;