// CustomerList.js

import React, { useContext } from 'react';
import { CustomerContext } from './CustomerContext';

const CustomerList = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
