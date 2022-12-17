import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    transition: 0.5s ease;
    font-family: 'Inter', sans-serif;
   

    ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
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
