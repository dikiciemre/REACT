import React, { Component } from 'react'

class State_ex extends Component {
    // State Usage Example

    constructor(props) {
        super(props);

        this.state = {
            IsVisible: true
        }
    }

    render() {
        const { name, department, salary } = this.props;
        const { IsVisible } = this.state;

        return (
            <div className='container col-md-8 mb-4'>
                <div className='card'>
                    <div className='card-header d-fex justify-content-between'>
                        <h4 className='d-inline'> {name} </h4>
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

export default State_ex;