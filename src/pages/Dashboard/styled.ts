import styled from "styled-components";

export const ContainerMain = styled.div`
  margin: 0 auto;
  animation: translateShow 0.4s ease;


  @media (min-width: 1000px) {
    width: 950px;

  }

  @media (min-width: 1200px) {
    width: 1150px;
   
  }

  @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const UlCards = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 22px;
  min-width: 270px;
  margin: 0 auto;
  margin-top: 40px;
  animation: translateShow 0.4s ease;
  margin-left: 14px;

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;
    border: 2px solid transparent;
  }

  @media (min-width: 1000px) {
    width: 900px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-bottom: 50px;
    gap: 29px;
    margin-top: 40px;
  }

  @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
