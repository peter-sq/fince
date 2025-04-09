import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Satoshi', sans-serif;
    background-color: #fff;
    color: #111;
  }
`;
