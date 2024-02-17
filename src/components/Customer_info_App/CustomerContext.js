// CustomerContext.js

import { createContext, useState } from 'react';

const CustomerContext =  createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Ahmet', email: 'ahmet@example.com' },
    { id: 2, name: 'Ayşe', email: 'ayse@example.com' },
    // ... diğer müşteriler
  ]);

  const addCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };
