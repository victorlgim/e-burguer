import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  body {
    margin: 0;
    padding: 0;
    background: #FBFBFB;

    font-family: 'Inter', sans-serif;
    box-sizing: border-box;

    ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #27ae60;
    border-radius: 20px;
    border: 3px solid transparent;
  }
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
