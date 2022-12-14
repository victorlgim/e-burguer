import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  animation: translateShow 0.4s ease;

  @media (min-width: 375px) {
    width: 340px;
  }

  @media (min-width: 425px) {
    width: 370px;
  }

  @media (min-width: 768px) {
    width: 700px;
    height: 100vh;
    display: flex;
  }

  @media (min-width: 1024px) {
    width: 800px;
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

export const DivMainLogin = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 1024px) {
    width: 800px;
  }
`;
