// AddCustomerForm.js

import React, { useContext, useState } from 'react';
import { CustomerContext } from './CustomerContext';

const AddCustomerForm = () => {
  const { addCustomer } = useContext(CustomerContext);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(newCustomer);
    setNewCustomer({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
        />
      </label>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomerForm;
