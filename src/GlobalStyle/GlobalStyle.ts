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

    /* Estilo da barra de rolagem */
  ::-webkit-scrollbar {
    width: 5px; /* Largura da scrollbar */
    height: 5px;

  }

  ::-webkit-scrollbar-track {
    background: #2c2c2c; /* Cor do trilho */
    border-radius: 10px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff6600; /* Cor do polegar da scrollbar */
    border-radius: 10px;
    border: 2px solid #2c2c2c; /* Espaço ao redor do polegar */

  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #ff8533; /* Cor do polegar ao passar o mouse */

  }


`;

export default GlobalStyle;
