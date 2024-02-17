import React, { useState } from 'react';
 // Stil dosyasını içe aktar

const DynamicStylesExample = () => {
  // Dinamik stili kontrol etmek için bir state kullanın
  const [isBlue, setIsBlue] = useState(false);

  // Durumu tersine çeviren bir fonksiyon
  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  // Dinamik olarak değişen bir className kullanarak stil uygula
  const containerClassName = isBlue ? 'blue-container' : 'red-container';

  return (
    <div className={containerClassName}>
      <p>Stili dinamik olarak değiştirmek için React örneği</p>
      <button onClick={toggleColor}>Renk Değiştir</button>
    </div>
  );
};

export default DynamicStylesExample;
