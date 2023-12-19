import React from "react"; 

// kısa yoldan yapmak istersek rfc tuşuna bas 
function Navbar(props){
    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
export default Navbar;