import React, { Component } from 'react'

class Event extends Component { 

  onClickEvent(e){

    console.log(e.target);
    console.log("Test");
  }

  
  
       
  render() {

    
    

    return (

    // basit bir card yapısı tasarlandı.
      <div className='col-md-8 mb-4'>
            <div className='card'>
                <p onClick={this.onClickEvent}> Click Me !   </p>

            </div>

        </div>
    )
  }
}

export default Event;