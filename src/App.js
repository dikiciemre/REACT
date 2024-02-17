import React, { Component } from 'react'
import "./App.css";
import User from "./components/Free/User";
import Navbar from './components/Free/Navbar';
import Employe from './components/Props/Employe';
import Props1 from './components/Props/Props1';
import Person from './components/proptypes/Person';
import Fontawesome from './components/Free/Fontawesome';
import State_ex from './components/State_ex';
import Event from './components/Events/Event'
import Event1 from './components/Events/Event1'
import Set_State from './components/Set_State';
import { CustomerProvider } from './components/Customer_info_App/CustomerContext';
import AddCustomerForm from './components/Customer_info_App/AddCustomerForm';
import CustomerList from './components/Customer_info_App/CustomerList';
import ThemeContext from './components/Provider_Consumer_Example/ThemeContext';
import ThemedComponent from './components/Provider_Consumer_Example/ThemedComponent';
import ThemeProvider from './components/Provider_Consumer_Example/ThemeProvider';
import UseState from './components/USESTATE/UseState';
import UseState1 from './components/USESTATE/UseState1';
import UseState2 from './components/USESTATE/UseState2';
import USeEffect from './components/Useeffect/USeEffect';
import ControlledComponentExample from './components/Controlled_Components/Controlled';
import DynamicStylesExample from './components/Dynamic_Css/Dynamic';








class App extends Component {
  render() {

    return (
      <div>
        <h1>User.js Component Form Example</h1>
        <User />

        ************************************************

        <h2 style={{ color: "red", fontSize: "30px" }}>Özellik CSS vermek</h2>

        ************************************************

        <h3 className='Deneme'> Classname ile CSS vermek</h3>

        ************************************************

        <h3 className='container mt-3' >Bootstrap deneme</h3>

        ************************************************

        <div className='container'>
          <h3>Functional Component</h3> <br />
          <Navbar />
        </div>

        ************************************************

        <h3>Props usage example</h3>
        <Employe level="Emplyee 3 level" name="Emre" surname="Dikici" salary="10.000 $" />
        <Props1 Name="Nick" Surname="Furry" Age="54" />

        ************************************************

        <h2>PropTypes Usage Example</h2> <hr></hr>
        <Person title="Something Gonna Happned here" />

        ************************************************

        <h3>Fontawsome Usage Example</h3>
        <Fontawesome />

        ************************************************
        <h3>useState örnekleri</h3>
        <UseState />
        <UseState1 />
        <UseState2 />


        ************************************************

        <h3>useEffect örnekleri</h3>
        <USeEffect />

        ************************************************

        <h3>State Usage Example</h3>
        <State_ex name="Emre" department="IT" salary="10.000 €" />
        <State_ex name="Scarlett" department="Human Resources" salary="7.000 €" />


        ************************************************

        <h3>Event Usage Example</h3>

        <Event name="Osman" department="Human Resources" salary="3.000 €" />
        <Event1 />

        ************************************************

        <h3>Set State Usage Example</h3>

        <Set_State name="Charlie" department="Real Estate" salary="8.000 €" />

        ************************************************

        <h3> Provider Example </h3>

        <CustomerProvider>
          <div>
            <h1>Customer Management App</h1>
            <AddCustomerForm />
            <CustomerList />
          </div>
        </CustomerProvider>

        ************************************************

        <h3> Provider And Consumer Example </h3> <hr></hr> <br />


        <ThemeProvider>
          <div>
            <h1>Themed App</h1> <br />
            <ThemedComponent />
          </div>
        </ThemeProvider>

        ************************************************

        <ControlledComponentExample/>


        ************************************************

        <DynamicStylesExample/>


        


      </div>
    )
  }
}
export default App;
