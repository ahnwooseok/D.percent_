import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #111111;
  }

  img {
    object-fit: cover;
  }
`;

export default GlobalStyle;
