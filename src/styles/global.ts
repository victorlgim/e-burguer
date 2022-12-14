import { createGlobalStyle } from "styled-components";

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

    :hover {
      filter: brightness(0.9);
    }
  }

  li {
    list-style: none;
  }
`;
export default GlobalStyle;
