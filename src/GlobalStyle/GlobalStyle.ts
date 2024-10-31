import { createGlobalStyle } from 'styled-components';
import themes from '../Themes/Themes';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  
  }

  body {
    /* Cor do background */
    background: ${themes.colors.pretoProfundo};

  }

`;

export default GlobalStyle;
