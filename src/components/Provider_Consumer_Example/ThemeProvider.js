// ThemeProvider.js

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  // State hook'u kullanarak tema değerini ve temayı değiştiren fonksiyonu tanımla
  const [theme, setTheme] = useState('light');


  // toggleTheme fonksiyonu tanımlanıyor
const toggleTheme = () => {
  // setTheme, useState hook'u tarafından döndürülen fonksiyondur ve state'i güncellemek için kullanılır
  // prevTheme, önceki state değerini temsil eder
  // Eğer önceki tema 'light' ise, yeni tema 'dark' olacak şekilde ayarlanır; aksi takdirde 'light'
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};


  // ThemeContext.Provider ile alt bileşenlere tema değeri ve tema değiştiren fonksiyonu sağla
  return (
  // ThemeContext.Provider kullanılarak bir tema bağlamı sağlanır
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {/* Props olarak gelen children'ı içeriğe ekleyerek, Provider'ın altındaki bileşenlere temayı iletebiliriz */}
    {children}
  </ThemeContext.Provider>
);

};

// ThemeProvider bileşenini dışa aktar
export default ThemeProvider;



/*
useState: useState hook'u kullanılarak theme ve setTheme adlı state değişkenleri tanımlanır. theme, başlangıçta 'light' değerini alır.

toggleTheme Fonksiyonu: toggleTheme fonksiyonu, mevcut temaya bağlı olarak yeni bir tema belirler ve setTheme ile state'i günceller.

ThemeProvider Component: ThemeProvider, ThemeContext.Provider içinde bulunan theme ve toggleTheme değerlerini altındaki bileşenlere iletir.

children Props: {children} ifadesi, ThemeProvider bileşeninin içine yerleştirilen diğer bileşenlere (alt bileşenlere) erişimi sağlar. Bu sayede ThemeProvider içindeki bileşenler, ThemeContext.Provider içindeki değerlere erişebilirler.


*/

