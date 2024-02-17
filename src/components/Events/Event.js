import React, { Component } from 'react'

class Event extends Component {
    // Event Usage Example

    constructor(props) {
        super(props);

        this.state = {
            IsVisible: true
        }
    }

    // bind ile "onclick" fonksiyonu içine verdiğimiz değeri bu şekilde alabiliriz.
    // We can retrieve the value passed into the 'onclick' function like this with 'bind'
    OnClickEvent = (number, e) => {
        console.log(number);

    }

    render() {
        const { name, department, salary } = this.props;
        const { IsVisible } = this.state;

        return (
            <div className='container col-md-8 mb-4'>
                <div className='card'>
                    <div className='card-header d-fex justify-content-between'>
                        <h4 className='d-inline' onClick={this.OnClickEvent.bind(this,34)}> {name} </h4>
                        <i class="fa-regular fa-trash-can" style={{ cursor: "pointer" }}></i>

                    </div>

                    
                    {IsVisible ?
                     <div className='card-body'>
                        <p className='card-text'>Department: {department}</p>
                        <p className='card-text'>Salary: {salary} </p>
                    </div> 
                    : null}

                </div>
            </div>
        )
    }
}

export default Event;