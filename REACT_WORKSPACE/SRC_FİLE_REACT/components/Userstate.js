import React, { Component } from 'react'

class Userstate extends Component { 

    // constructor yapısı ile state tanımlandı
    constructor(props){
        super(props);

        this.state = {
            isVisible : false
        }
    }
       
  render() {

     // js özelliği kullanılarak isimlendirme kolaylığı sağlandı.
    const {name,surname} = this.props;
    const {isVisible} = this.state;

    return (

    // basit bir card yapısı tasarlandı.
      <div className='col-md-8 mb-4'>
            <div className='card'>
                <p> Name : {name} </p>
                <p> surName : {surname} </p>


            </div>

            
            {// visible değeri false ise bu alan çalışmaz 
                isVisible ?  <div className='card'>
                <p> Name : {name} </p>
                <p> surName : {surname} </p>


                 </div> : null
            }

        </div>
    )
  }
}

Userstate.defaultProps = { // default olarak girilecek değerler belirtildi
      name : "Default Name Entry",
      surname : "Default Surname Entry"
  
  }
export default Userstate;