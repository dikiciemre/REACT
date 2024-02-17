import React, { useState } from 'react';

const ControlledComponentExample = () => {
  // State kullanarak form elemanının değerini saklayın
  const [inputValue, setInputValue] = useState('');

  // Input değeri değiştikçe bu fonksiyon çalışacak
  const handleInputChange = (event) => {
    // Input değerini güncelleyin
    setInputValue(event.target.value);
  };

  // Form gönderildiğinde bu fonksiyon çalışacak
  const handleSubmit = (event) => {
    // Formun sayfa yenilemesini engelleyin
    event.preventDefault();

    // Form değerini kullanın veya işleyin
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input değeri state'e bağlı, bu nedenle controlled component */}
      <input
        type="text"
        value={inputValue} // Input değeri state'ten alınır
        onChange={handleInputChange} // Input değeri değiştikçe handleInputChange fonksiyonu çalışır
      />

      {/* Diğer form elemanları da benzer şekilde kontrol edilebilir */}
      
      <button type="submit">Gönder</button>
    </form>
  );
};

export default ControlledComponentExample;
