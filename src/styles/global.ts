import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #FBFBFB;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`
export default GlobalStyle