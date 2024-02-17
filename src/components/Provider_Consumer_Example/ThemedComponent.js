// ThemedComponent.js
import React from 'react';
import ThemeContext from './ThemeContext';

const ThemedComponent = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        // context.theme değerine bağlı olarak arka plan ve metin rengini belirle
        <div style={{ background: context.theme === 'light' ? '#fff' : '#333', color: context.theme === 'light' ? '#333' : '#fff' }}>
          {/* context.theme değerine bağlı olarak arka plan ve metin rengini belirle */}
          <h2>Themed Component</h2>
          {/* context.theme değerini gösteren bir başlık */}
          <p>Current Theme: {context.theme}</p>
          {/* Temayı değiştiren buton */}
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        </div>

      )}
    </ThemeContext.Consumer>
  );
};

// ThemedComponent bileşenini dışa aktar
export default ThemedComponent;


/*
ThemeContext.Consumer: ThemeContext.Consumer bileşeni, ThemeProvider tarafından sağlanan ThemeContext içindeki değerlere erişim sağlar.

Arrow Fonksiyon: ThemeContext.Consumer içindeki değerlere erişmek için bir ok fonksiyon kullanılır. Bu fonksiyonun içinde context adlı parametre ile ThemeProvider tarafından sağlanan değerlere erişim sağlanır.

Stil Belirleme: div elementinin stil özellikleri, context.theme değerine bağlı olarak belirlenir. Örneğin, context.theme === 'light' ise arka plan rengi beyaz (#fff), aksi takdirde siyah (#333) olacaktır. Metin rengi de benzer şekilde belirlenir.

Başlık ve Paragraf: h2 başlığı ve p paragrafı içinde, temanın mevcut değeri (context.theme) görüntülenir.

Toggle Theme Butonu: button elementi, context.toggleTheme fonksiyonunu tetikleyen bir butondur. Bu buton, temayı değiştirmek için kullanılır.
*/
