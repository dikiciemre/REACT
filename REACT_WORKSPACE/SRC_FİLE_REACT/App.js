import User from "./components/User"; // component klasörü altındaki User.js  import ettik
import Navbar from "./components/Navbar"; // components klasörü altındaki Navbar.js dahil edildi
import User1 from "./components/User1"; // components klasörü altındaki Navbar.js dahil edildi
import Propnavbar from "./components/Propnavbar"; // components klasörü altındaki Navbar.js dahil edildi
import Userstate from "./components/Userstate"; // components klasörü altındaki Navbar.js dahil edildi
import Event from "./components/Event"; // components klasörü altındaki Navbar.js dahil edildi

import './App.css';


function App() {
  return (
    <div className="App">

// js ifadeleri {} içerisinde yazılır
     <p> 1+3 </p>
     <p> {1+3} </p>
     <br/>
     <hr/>


// components klasörü altında oluşturduğumuz componenti burada istediğimiz kadar kullanabiliriz.
     <User/> 
     <User/>
     <User/>
     <br/>
     <hr/>


// style kullanımı örneği
     <h3 style={{color:'green',fontSize:'30px'}}> Style kullanımı  </h3>
     <br/>
     <hr/>


// class kullanarak css ekleme

      <h3 className='header'> class ile css kullanımı </h3>
      <br/>
      <hr/>


//props kullanımı ( User1 ile dinamik olarak class yapısı kullamarak veriler bastırıldı )
      <div className='container'>
        <h2>Props deneme</h2>
        <Navbar title = "User App 2"/>
        <User/>
        <User1 name = "Emre" surname = "Dikici" age = "20"/>
        <User1 name = "Mustafa" surname = "Deneme" age = "30"/>
      </div>
      <br/>
      <hr/>


//  PropTypes ve Default Props kullanımı <br/>
//  title a değer verirsek o değer bastırılır  Propnavbar altındaki   title : PropTypes.string.isRequired bu kod sayesinde  <br/>
//  title değer vermez isek default olarak değer atamsı yapan kod defaultProps kodudur
      <Propnavbar title = "Deneme başlığı" /> 
      <Propnavbar/>
      <br/>
      <hr/>


// fontawseome iconları kullanımı 
      <h1>icon kullanımı <i class="fa-solid fa-house"></i> </h1>
      <br/>
      <hr/>



// State kullanımı 
      <Userstate name = "Emre" surname = "Dikici"/>
      <Userstate name = "Mustafa" surname = "DEneme"/>
      <Userstate />
      <br/>
      <hr/>
  


// React Event kullanımı
      <Event/>
      <br/>
      <hr/>












    </div>
  );
}

export default App;
