import { createGlobalStyle } from 'styled-components';
import themes from '../Themes/Themes';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }

  body {
    /* FONTE */
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: normal;

    /* Cor do background */
    background: ${themes.colors.pretoProfundo};

  }

  #root, html, body {
    height: 100%;
    width: 100%;

  }

`;

export default GlobalStyle;
